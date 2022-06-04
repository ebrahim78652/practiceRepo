const axios = require("axios");

axios.get("https://jsonplaceholder.typicode.com/users").then(
  (response) => console.log(response.data),
  (responseRejected) => {
    console.log("the server rejected your request. its wrong!");
    console.log(responseRejected.code);
  }
);
