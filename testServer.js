const request = require('request');

request.get({url: 'http://pokeapi.co/api/v2/pokemon?limit=151'}, function (error, response, body) {
    console.log(response.statusCode + 'Body in server ' + JSON.parse(body).results);
    console.log(!error && response.statusCode === 200);
    if (!error && response.statusCode === 200) {
        // res.json(body.results);
        let x=(JSON.parse(body));
        console.log(x.results);
    }
});