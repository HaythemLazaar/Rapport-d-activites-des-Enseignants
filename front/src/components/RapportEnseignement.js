import React from 'react'

function RapportEnseignement(props) {
    let totalHeuresEns = 0
  return (
    <>
    <div className='activites-table'>
        <h4>Module</h4>
        <h4>Date</h4>
        <h4>Duree</h4>
      </div>
      <div className='table-content'> 
        {props.activitesEnseignant != null ? 
          props.activitesEnseignant.map(function(act){
            let d = '11/02/22'
            totalHeuresEns += act.duree
            return(
              <>
                  <p>{act.module}</p>
                  <p>{act.date_cours}</p>
                  <p>{act.duree}</p>
              </> 
        )}) : <h1>No</h1>}
      </div>
      <div className='table-footer'>
        <div></div>
        <div><p>Total :</p></div>
        <div>{totalHeuresEns}</div>
      </div>
    </>
  )
}

export default RapportEnseignement