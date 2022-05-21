const https = require("https");
const options = {
  hostname: "https://www.breakingbadapi.com",
  port: 443,
  path: "/api/characters/1",
  method: "GET",
};

const request = https.request(options, (res) => {
  console.log(res);

  res.on("data", (data) => {
    console.log(data);
  });
});

request.on("error", (error) => {
  console.log("error");
});

request.end();
