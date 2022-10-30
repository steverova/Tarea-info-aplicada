import axios from "axios";
const url = "https://purchase-microservices.azurewebsites.net/shipped";

export async function getShipMethodList() {
    return await axios.get(url).then((res) => {
      const response = res.data;
      return response;
    });
  }

  export async function getForId(id) {

    return axios.get(url+`/`+id).then((res) => {
      
      return res.data.response;
    });
  }

  export async function deleted(id) {
    return await axios.delete(url+`/`+id).then((res) => {
      return res.status;
    });
  }


  export async function update(shipped) {

    return await axios.put(url,shipped).then((res) => {  
      return res.status;
    });
  }

  export async function save(shipped) {
    console.log(shipped);
     return await axios
       .post(url, shipped)
       .then((response) => console.log(response))
       .catch((error) => {
         console.error("There was an error!", error);
       });
  }