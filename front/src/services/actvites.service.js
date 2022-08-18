import axios from 'axios' 

class ActivitesDataService{

  getEnseignements(id){
    return axios.get(`http://localhost:8080/api/enseignants/${id}/ens`)
  }

}


export default new ActivitesDataService();
