import React, { useEffect, useState } from 'react'
import RapportEncadrement from './RapportEncadrement'
import RapportEnseignement from './RapportEnseignement'



function RapportActivites(props) {
  const [totalHeuresEns, setTotalHeuresEns] = useState(0)
  const [totalHeuresPFE, setTotalHeuresPFE] = useState(0)
  const [totalHeuresPI, setTotalHeuresPI] = useState(0)

  const data = [
    { name: 'Enseignement', value: totalHeuresEns },
    { name: 'PFE', value: totalHeuresPFE },
    { name: 'PI', value: totalHeuresPI },
    
  ];

  useEffect(() => {
    props.handleTotalActivites(data)
  }, [totalHeuresEns,totalHeuresPFE,totalHeuresPI])
  
  

  return (
    <div className='rapport-section'>
      <RapportEnseignement 
        activitesEnseignant={props.activitesEnseignant} 
        handleTotalEns={setTotalHeuresEns} 
      />
      <RapportEncadrement 
        activitesEncadrement={props.activitesEncadrement} 
        handleTotalPFE={setTotalHeuresPFE} 
        handleTotalPI={setTotalHeuresPI} 
      />
    </div>
  )
}

export default RapportActivites