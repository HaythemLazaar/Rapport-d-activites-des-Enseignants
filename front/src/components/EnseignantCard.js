import React from 'react'

function EnseignantCard(props) {
  return (
    <div className='card-ens'>
      <div className='card-ens-row'>
        <h4>Nom :</h4>
        <p>{props.ens.nom}</p>
      </div>
      <div className='card-ens-row'>
        <h4>Prenom :</h4>
        <p>{props.ens.prenom}</p>
      </div>
    </div>
  )
}

export default EnseignantCard