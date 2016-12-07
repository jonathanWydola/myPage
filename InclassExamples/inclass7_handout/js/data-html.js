// NOTE: If you run this file locally
// You will not get a server status and the example will fail
// Comment out lines 9 and 11 if you are working locally

var xhr = new XMLHttpRequest();                 //initialize a new XMLHttpRequest constructor

xhr.onload = function() {                       //sets the onload option to a function that sets the response from the xhr request (When response has loaded)
  // The following conditional check will not work locally - only on a server
  if(xhr.status === 200) {                       // if status is OK
    document.getElementById('content').innerHTML = xhr.responseText; //we succeeeded, therefore set the value of contents to the response of the request (Update)
  }
};

xhr.open('GET', 'data/data.html', true);        //Opens the request to the url provided (html response), will continue the javascript while waiting for a response from the server 9prepare request)
xhr.send(null);                                 //Sends the request with no additonal parameter (send request)