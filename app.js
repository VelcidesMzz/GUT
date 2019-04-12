var requestURL = 'https://api.myjson.com/bins/124e5g';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send(null);
