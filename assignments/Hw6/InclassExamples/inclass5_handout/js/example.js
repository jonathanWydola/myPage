/* Jonathan Wydola
 * Date Created: 11/1/2016
 * This file contains all the code necessary for example.html
 */
// ADD NEW ITEM TO END OF LIST
//items is a funciton
(function insertEnd(items){
    var list = document.getElementsByTagName("ul")[0];
    if(list != null){
        for(i = 0; i < items.length; i++){
            var newNode = document.createElement("li");
            var myText = document.createTextNode(items[i]);
            newNode.appendChild(myText);
            list.insertBefore(newNode, list.childNodes.lastChild);
        }
    }
})(["cream"]);


// ADD NEW ITEM START OF LIST
//used a function and a list
(function insertStart(items){
    var list = document.getElementsByTagName("ul")[0];
    if(list != null){
        for(i = 0; i < items.length; i++){
            var newNode = document.createElement("li");
            var myText = document.createTextNode(items[i]);
            newNode.appendChild(myText);
            list.insertBefore(newNode, list.childNodes[0]);
        }
    }
})(["kale"]);


// ADD A CLASS OF COOL TO ALL LIST ITEMS
(function addClassAttributeCool(){
    var list = document.getElementsByTagName("li");
    for(i = 0; i < list.length; i++) {
        list[i].setAttribute("class", "cool");
    }
})();

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
(function addNumberOfItems(){
    var list = document.getElementsByTagName("li");
    var afterh = document.getElementsByTagName("h2")[0];
    var newNode = document.createElement("span");
    var myText = document.createTextNode(list.length);
    newNode.appendChild(myText);
    if(afterh != null){
        afterh.insertBefore(newNode, afterh.next);
    }
})();


