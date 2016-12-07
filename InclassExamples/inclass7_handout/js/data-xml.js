// NOTE: If you run this file locally
// You will not get a server status and the example will fail
// Comment out lines 9 and 35 if you are working locally

var xhr = new XMLHttpRequest();        //new XmlHttpRequest object 

xhr.onload = function() {              //when the response has loaded, this will process xml this time
 // The following conditional check will not work locally - only on a server
 // if (xhr.status === 200) {             //If AJAX return OK

  // THIS PART IS DIFFERENT BECAUSE IT IS PROCESSING XML NOT HTML
  var response = xhr.responseXML;                      //set the response xml, is an object of XML
  var events = response.getElementsByTagName('event'); //gets all tags from response named "event"

  for (var i = 0; i < events.length; i++) {            //for each event in the response
    var container, image, location, city, newline;      //create our vars for each iteration
    container = document.createElement('div');          //specifies our container in the HTML
    container.className = 'event';                      //sets class name to event

    image = document.createElement('img');              //Creates an image tag for response data
    image.setAttribute('src', getNodeValue(events[i], 'map'));
    image.setAttribute('alt', getNodeValue(events[i], 'location'));
    container.appendChild(image);

    location = document.createElement('p');             //creates a paragraph tag for the location data
    city = document.createElement('b');
    newline = document.createElement('br');
    city.appendChild(document.createTextNode(getNodeValue(events[i], 'location')));
    location.appendChild(newline);
    location.insertBefore(city, newline);
    location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
    container.appendChild(location);

    document.getElementById('content').appendChild(container);
  }
// }

  function getNodeValue(obj, tag) {                   //gets the value of the first child of the node passed to it.
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
  }

 // THE FINAL PART IS THE SAME AS THE HTML EXAMPLE BUT IT REQUESTS AN XML FILE
};

xhr.open('GET', 'data/data.xml', true);             //Prepare the request for an xml response
xhr.send(null);                                     //send the request with no additional args.