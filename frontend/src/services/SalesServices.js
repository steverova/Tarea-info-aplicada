import axios from "axios";

export async function getReport1(years) {
  const options = {
    method: "POST",
    withCredentials: false,
    url: "https://microservices-gateway.azurewebsites.net/api/home/report1",
    data: years,
  };

  return await axios
    .request(options)
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch(function(error) {
      console.error(error);
    });
}

export async function getReport2(years) {
  const options = {
    method: "POST",
    withCredentials: false,
    url: "https://microservices-gateway.azurewebsites.net/api/home/report2",
    data: years,
  };

  return await axios
    .request(options)
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch(function(error) {
      console.error(error);
    });
}
