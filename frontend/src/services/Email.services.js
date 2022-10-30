import axios from "axios";

const url = "https://localhost:7000/emails";

export async function getListPerson() {
  const options = {
    method: "GET",
    withCredentials: false,
    url: url,
  };

  return await axios.request(options).then((res) => {
    const response = res.data;
    return response;
  });
}

export async function getEmailById(id) {
  return await axios.get(url + `/` + id).then((res) => {
    const response = res.data;
    return response;
  });
}

export async function add(id, emails) {
  for (var email of emails) {

    if (email.emailAddressID === "") { 
      email.emailAddressID = 0;
    }

    console.log(email.emailAddress, email.emailAddressID);

    const options = {
      method: "POST",
      withCredentials: false,
      url: url,
      data: {
        BusinessEntityID: id,
        EmailAddress: email.emailAddress,
        EmailAddressID: email.emailAddressID 
      },
    };

    await axios
      .request(options)
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.error(error);
      });
  }
}

export async function deleted(id) {
  return await axios.delete(url + `/` + id).then((res) => {
    return res.status;
  });
}
