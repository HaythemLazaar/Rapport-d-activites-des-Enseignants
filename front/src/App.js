import { useState, useEffect } from 'react';
import './App.css';
import EnseignantsList from './components/EnseignantsList';
import axios from 'axios'
import EnseignantDataService from './services/enseignant.service';
import ActivitesDataService from './services/actvites.service'
import RapportActivites from './components/RapportActivites';
import EnseignantCard from './components/EnseignantCard';



function App() {
  const [enseignants, setEnseignants] = useState([])
  const [selectedEnseignant, setSelectedEnseignant] = useState()
  const [dataEnseignant, setDataEnseignant] = useState({})
  const [activitesEnseignant, setActivitesEnseignant] = useState()

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

  useEffect(() => {
    getEnseignants()
  }, [])

  useEffect(() => {
    //Reactivates every time the selected option changes
    getEnseignementsByID()
    getEnseignantByID()
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
              <h1>Activites d'Enseignement :</h1>
              <RapportActivites activitesEnseignant={activitesEnseignant} />
            </> : <h1>No enseignant selected</h1>}
      </div>
    </div>
  );
}

export default App;