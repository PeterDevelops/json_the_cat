const request = require('request');

// function definition
const fetchBreedDescription = function(breedName , callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(url, (error, respond, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error, null);
      return;
    }
    if (data.length < 1) {
      callback('Not found', null);
      return;
    }
    callback(null, data[0].description);
  });
};

module.exports = {
  fetchBreedDescription
};