import axios from 'axios' 

class ActivitesDataService{

  getEnseignements(id){
    return axios.get(`http://localhost:8080/api/enseignants/${id}/ens`)
  }

  getEncadrements(id){
    return axios.get(`http://localhost:8080/api/enseignants/${id}/enc`)
  }

}


export default new ActivitesDataService();
