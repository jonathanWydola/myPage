// NOTE: If you run this file locally
// You will not get a server status
// You can comment out lines 9 and 26 to make it work locally

var xhr = new XMLHttpRequest();                 //Create a new xmllHttpRequest constructor

xhr.onload = function() {                       //sets up the onload function to execute after the request is loaded
  // The following conditional check will not work locally - only on a server
  //if(xhr.status === 200) {                      //if AJAX server status OK
    responseObject = JSON.parse(xhr.responseText); //Parse the response text of the request

    //This will create our custom injection
    var newContent = '';
    for (var i = 0; i < responseObject.events.length; i++) { //iterate through entire response
      newContent += '<div class="event">';
      newContent += '<img src="' + responseObject.events[i].map + '" ';
      newContent += 'alt="' + responseObject.events[i].location + '" />';
      newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
      newContent += responseObject.events[i].date + '</p>';
      newContent += '</div>';
    }

    //Update and set the custom injection
    document.getElementById('content').innerHTML = newContent;

  //}
};

xhr.open('GET', 'data/data.json', true);        //Prepare the request for a json return. will continue the javascript while loading the response
xhr.send(null);                                 //Send the request. no additional args

// When working locally in Firefox, you may see an error saying that the JSON is not well-formed.
// This is because Firefox is not reading the correct MIME type (and it can safely be ignored).

// If you get it on a server, you may need to se the MIME type for JSON on the server (application/JSON).