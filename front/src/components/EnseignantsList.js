import React, { useState } from 'react'
import Select from 'react-select'

function EnseignantsList(props) {
    // Array of all options
    const optionList = []
    
    props.enseignants.map( ens => {
        optionList.push({
            value: ens.id,
            label: ens.nom
        })
    })

    function handleSelect(data) {
        props.handleSelect(data.value)
      }

  return (
    <div className='ens-dropdown'>
        <Select
          options={optionList}
          placeholder="Choisir Enseignant"
          value={props.selectedEnseignant}
          onChange={handleSelect}
          isSearchable={true}
        />
    </div>
    )
}

export default EnseignantsList