import React from "react";
import axios from 'axios' 

class EnseignantDataService{

  getAll(){
    return axios.get('http://localhost:8080/api/enseignants')
  }

  get(id){
    return axios.get(`http://localhost:8080/api/enseignants/${id}`)
  }
}


export default new EnseignantDataService();
