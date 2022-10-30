import axios from "axios";

export function AuthUser(User){

    console.log(User);
    
    var options = {
      method: 'POST',
      url: 'https://microservices-gateway.azurewebsites.net/api/home/auth',
      data: User
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
}