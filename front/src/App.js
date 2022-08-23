import { useState, useEffect } from 'react';
import './App.css';
import EnseignantsList from './components/EnseignantsList';
import EnseignantDataService from './services/enseignant.service';
import ActivitesDataService from './services/actvites.service'
import RapportActivites from './components/RapportActivites';
import EnseignantCard from './components/EnseignantCard';
import RapportChart from './components/RapportChart';



function App() {
  const [enseignants, setEnseignants] = useState([])
  const [selectedEnseignant, setSelectedEnseignant] = useState()
  const [dataEnseignant, setDataEnseignant] = useState({})
  const [activitesEnseignant, setActivitesEnseignant] = useState()
  const [activitesEncadrement, setActivitesEncadrement] = useState()
  const [totalActivites, setTotalActivites] = useState([])

  const getEnseignementsByID = () => {
    ActivitesDataService.getEnseignements(selectedEnseignant)
    .then((res) =>{
        console.log(res.data)
        setActivitesEnseignant(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
  }

  const getEncadrementByID = () => {
    ActivitesDataService.getEncadrements(selectedEnseignant)
    .then((res) =>{
        console.log(res.data)
        setActivitesEncadrement(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
  }

  const getEnseignantByID = () => {
    if(selectedEnseignant != null) {
      EnseignantDataService.get(selectedEnseignant)
      .then((res) => {
        console.log(res.data)
        setDataEnseignant(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  } 

  const getEnseignants = () => {
      EnseignantDataService.getAll()
      .then((res) =>{
          console.log(res.data)
          setEnseignants(res.data)
      })
      .catch((err) => {
          console.log(err);
        });
  }

  useEffect(() => {
    getEnseignants()
  }, [])

  useEffect(() => {
    //Reactivates every time the selected option changes
    getEnseignantByID()
    getEnseignementsByID()
    getEncadrementByID()
  }, [selectedEnseignant])

  return (
    <div className="App">
      <h1>Enseignants :</h1>
      <div className='list-card'>
        <EnseignantsList enseignants={enseignants} handleSelect={setSelectedEnseignant} />
      </div>
      <div className='rapport'>
        {selectedEnseignant != null ? 
            <>
              <h1>Selected:</h1>
              <EnseignantCard ens={dataEnseignant} />
              <RapportChart activitesData={totalActivites} />
              <RapportActivites 
                activitesEnseignant={activitesEnseignant} 
                activitesEncadrement={activitesEncadrement} 
                handleTotalActivites={setTotalActivites}
              />
            </> : <h1>No enseignant selected</h1>}
      </div>
    </div>
  );
}

export default App;
