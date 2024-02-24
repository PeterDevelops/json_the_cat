const request = require('request');


const userInput = process.argv[2];
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + userInput;

request(url, (error, respond, body) => {
  if (error) {
    console.log(error);
    return;
  }
  
  const data = JSON.parse(body);

  if (data.length < 1) {
    console.log('Not found');
    return;
  }

  console.log(data[0].description);
});