/*Jonathans Wydola
 *This file contains all the information and procedures 
 *for running and maintinaing the dictionary for the scrabble game
 */

/*gets the entire array for words*/
/* provided from piazza through : http://ejohn.org/blog/dictionary-lookups-in-javascript/*/

/*variables to hold our board values while playing*/
var lettOnBrd = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
var wrdsOnBrd = [];
var wrd = '';
var wrdFnd = false;
var invldWrd = false;
var dict = new Array()
var txtRsp = '';


$.get("js/src/dict.txt", function (txt) {
    var words = txt.split("\n");
    
    for (var i = 0; i < words.length; i++){
        /*converts everything to upper case to avoid
         *case sensitivity*/
        dict[i] = words[i].toUpperCase();
    }
});
/*finds the word in the supplied dictionary text file*/
function findWrd(){
    var wrdFnd = false;
    var resp = ["Correct!", "Good One!", "Terrific Word!", "Correct", "Your good!"];
    var errResp = ["Ouch!", "Not quite", ":(", "BAHAHA Really?", "Try again CHAMP!"];
    /*predetermined number generator for response*/
    /* ref:http://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript*/
    var respInd = Math.floor(Math.random() * resp.length - 1);
    
    for (var i = dict.length - 1; i >= 0; i--){
        if(dict[i] == wrd){
            document.getElementById("errors").innerHTML = resp[respInd] + "*(You have been awared points, Some tiles, And a fresh board)*";
            wrdFnd = true;
            prevScore = score;
        }
    }
    if(!wrdFnd){
        document.getElementById("errors").innerHTML = errResp[respInd] +
         "*(You have INCORRECTLY entered a word, your letters " +
         "have been returned and you are given another chance)*";    
        score = prevScore;
    }
    rstBrd();
}

/*simply updates our container array for letters on board*/
function updtLettOnBrd(lett, ind){
    lettOnBrd[ind] = lett;
}

/*checks our word to see if it is a valid word*/
function chckWrd(){
    var frstInd = 0;
    var lstInd = 0;
    var mrThnOne = false;
    var frstLett = true;
    var lstLett = true;
    var emptyBrd = true;
    
    for(var i = 0; i <= lettOnBrd.length -1; i++){
        if(lettOnBrd[i] != '' && frstLett == true){
            wrd += lettOnBrd[i];
            frstLett = false;
            frstInd = i;
            lstInd = i;
            console.log(wrd);
        } else if (lettOnBrd[i] != '' && frstLett == false) {
            wrd += lettOnBrd[i];
            lstInd = i;
            console.log(wrd);
        }   
    };

    for (var j = frstInd; j <= lstInd; j++){
        if(lettOnBrd[j] === ''){
            document.getElementById("errors").innerHTML = "Word may NOT contain spaces between letters";
            invldWrd = true;
        }
    };
}

/*if word is valid then find the wrd value*/
function sbmtWrd(){
    chckWrd();
    if(invldWrd){
        score = prevScore;
        rstBrd();
    } else {
        findWrd();   
    }
}