import React from 'react'
import RapportEncadrement from './RapportEncadrement'
import RapportEnseignement from './RapportEnseignement'


function RapportActivites(props) {
  return (
    <div className='rapport-section'>
      <RapportEnseignement activitesEnseignant={props.activitesEnseignant} />
      <RapportEncadrement activitesEncadrement={props.activitesEncadrement} />
    </div>
  )
}

export default RapportActivites