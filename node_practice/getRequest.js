const axios = require("axios");

axios
  .get("https://www.breakingbadapi.com/api/characters/1")
  .then((response) => {
    console.log(`status code is : ${response.status}`);
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
