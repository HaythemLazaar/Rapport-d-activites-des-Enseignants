import React from 'react'

function RapportEncadrement(props) {
    let totalHeuresEnc1 = 0
    let totalHeuresEnc2 = 0
    return (
        <>
        <div className='rapport-pfe'>
            <h1>Activites d'Encadrement des projets PFE :</h1>
            <div className='activites-table'>
                <h4>Description</h4>
                <h4>Date</h4>
                <h4>Duree</h4>
            </div>
            <div className='table-content'> 
                {props.activitesEncadrement != null ? 
                props.activitesEncadrement.filter(act => act.type == 1).map(function(act){
                    let d = '11/02/22'
                    totalHeuresEnc1 += act.duree
                    props.handleTotalPFE(totalHeuresEnc1)
                    return(
                    <>
                        <p>{act.description}</p>
                        <p>{act.date_encadrement}</p>
                        <p>{act.duree}</p>
                    </> 
                )}) : <h1>No</h1>}
            </div>
            <div className='table-footer'>
                <div></div>
                <div><p>Total :</p></div>
                <div>{totalHeuresEnc1}</div>
            </div>
        </div>
        <div className='rapport-pi'>
            <h1>Activites d'Encadrement des projets integres :</h1>
            <div className='activites-table'>
                <h4>Description</h4>
                <h4>Date</h4>
                <h4>Duree</h4>
            </div>
            <div className='table-content'> 
                {props.activitesEncadrement != null ? 
                props.activitesEncadrement.filter(act => act.type == 2).map(function(act){
                    let d = '11/02/22'
                    totalHeuresEnc2 += act.duree
                    props.handleTotalPI(totalHeuresEnc2)
                    return(
                    <>
                        <p>{act.description}</p>
                        <p>{act.date_encadrement}</p>
                        <p>{act.duree}</p>
                    </> 
                )}) : <h1>No</h1>}
            </div>
            <div className='table-footer'>
                <div></div>
                <div><p>Total :</p></div>
                <div>{totalHeuresEnc2}</div>
            </div>
        </div>
        </>
        
  )
}

export default RapportEncadrement