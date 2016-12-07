/*
name: Jonathan Wydola
date: DEC 5 2016
class: GUI 1
updated DEC 6 2016 12:20pm

This file is owned by jonathan wydola and is intended for use for educational purposes only
*/

/* i'm entirely sure that the boot strap handles the result of this input being invalid with the pop over
*/
var strCont = '';
var score = 0;
var prevScore = 0;
var letter = '';
var letterInd = 0;
var dblWrdScr = false;

function newBoard(){
    strCont = '';
    /*to get the proper position i broke up the image into single board tiles*/
    for(var i = 0; i < 15; i++){
        if ( i == 2 || i == 12){
            strCont += '<div id="dblWrd' + i +'"><img class="dnmbrd" src="scrbimg/scrabbleDblWrdBox.jpg" alt="'+ i+'"></div>';
        }
        else if (i == 6 || i == 8){
            strCont += '<div id="dblLtr' + i +'"><img class="dnmbrd" src="scrbimg/scrabbleDblLtrBox.jpg" alt="'+i+'"></div>';
        }
        else{
            strCont += '<div id="blank' + i +'"><img class="dnmbrd" src="scrbimg/scrabbleBlankBox.png" alt="'+i+'"></div>';
        }
    }
    /*create dragable feature*/
    document.getElementById("dnmbrd").innerHTML = strCont;
    for (var i = 0; i < 15; i++){
        if (i == 2 || i == 12){
            /*creating the double word score*/
            $("#dblWrd" + i).droppable({
                tolerance: 'intersect',
                drop: function(event, ui){
                    ui.draggable.position({
                        my: "center",
                        at: "center",
                        of: $(this),
                        using: function(pos){
                            $(this).animate(pos, 200, "linear");
                        }
                    });
                    /* allows me to stack draggables*/
                    $(this).droppable('option', 'accept', ui.draggable);
                    ui.draggable.draggable("option", 'disabled', true);
                    dblWrdScr = true;
                    updateScore(parseInt(ui.draggable.children("img").attr("alt")));
                    
                    /*get the letter*/
                    lett = ui.draggable.children("img").attr("src").replace('scrbimg/scrabbletiles/Scrabble_Tile_', '').replace('.jpg', '');
                    lettInd = $(this).children("img").attr("alt");

                    /*pass the letter and index for the word to be formed*/
                    updtLettOnBrd(lett, lettInd);
                },
                tolerance: 'intersect'
            });
        } else if (i == 6 || i == 8){
            $("#dblLtr" + i).droppable({
                tolerance: 'intersect',
                drop: function(event, ui){
                    ui.draggable.position({
                        my: "center",
                        at: "center",
                        of: $(this),
                        using: function(pos){
                            $(this).animate(pos, 200, "linear");
                        }
                    });
                    /* allows me to stack draggables*/
                    $(this).droppable('option', 'accept', ui.draggable);
                    ui.draggable.draggable("option", 'disabled', true);
                    updateScore(parseInt(ui.draggable.children("img").attr("alt")) * 2);
                    
                    /*get the letter*/
                    lett = ui.draggable.children("img").attr("src").replace('scrbimg/scrabbletiles/Scrabble_Tile_', '').replace('.jpg', '');
                    lettInd = $(this).children("img").attr("alt");

                    /*pass the letter and index for the word to be formed*/
                    updtLettOnBrd(lett, lettInd);
                },
                tolerance: 'intersect'      
            });
        } else{
            $("#blank" + i).droppable({
                tolerance: 'intersect',
                drop: function(event, ui){
                    ui.draggable.position({
                        my: "center",
                        at: "center",
                        of: $(this),
                        using: function(pos){
                            $(this).animate(pos, 200, "linear");
                        }
                    });
                    /* allows me to stack draggables*/
                    $(this).droppable('option', 'accept', ui.draggable);
                    ui.draggable.draggable("option", 'disabled', true);
                    updateScore(parseInt(ui.draggable.children("img").attr("alt")));
                    
                    /*get the letter*/
                    lett = ui.draggable.children("img").attr("src").replace('scrbimg/scrabbletiles/Scrabble_Tile_', '').replace('.jpg', '');
                    lettInd = $(this).children("img").attr("alt");

                    /*pass the letter and index for the word to be formed*/
                    updtLettOnBrd(lett, lettInd);
                },
                tolerance: 'intersect'
            });
        }
    }
}
function fillR(){
    /*All possible letters to chose from*/
    var possbl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    var strCont = '';
    var rckPos = $('#scrbrck').offset();
    var brdPos = $('#scrbrd').position();
    var tlVal = '';
    
    /*decrements tiles if you are using the tiles*/
    for(var i = 0; i < 7; i++){
        lett = possbl.charAt(Math.floor(Math.random() * possbl.length));
        if(scrbTls[lett]["nmbr-rem"] == 0) {
            i--;
        } else{
            scrbTls[lett]["nmbr-rem"]--;
            tlVal = scrbTls[lett]["value"];
            strCont += addTile(lett, i, tlVal);
        }
    }
    /*sets the tiles in the page*/
    document.getElementById("tiles").innerHTML = strCont;
    for (var i = 0; i < 7; i++){
        $('#tile' + i).offset({
            top: rckPos.top,
            left: rckPos.left + 45 + (70 * i) /*shifting position*/
            /*////*/
        })
        $('#tile' + i).draggable({
            snap: "ui.droppable",
            snapMode: "inner:",
            revert: 'invalid'
        });
    }
}
function addTile(lett, nmbr, val){
    return '<div id="tile' + nmbr +'"> <img class ="tiles" src=scrbimg/scrabbletiles/Scrabble_Tile_'+lett+ '.jpg alt="'+val+'"></div>';
}

/*updates the score, doubles up if the dbl word score was used*/
function updateScore(val){
    score += val;
    if(dblWrdScr){
        document.getElementById("score").innerHTML = score * 2;   
    } else{
        document.getElementById("score").innerHTML = score;
    }
}

function newTiles(){
    fillR();
}

function newScr(){
    document.getElementById("score").innerHTML = score;
}

function rstScr(){
    score = prevScore = 0;
    document.getElementById("score").innerHTML = score;
}

function rstBrd(){
    newBoard();
    fillR();
    newScr();
    invldWrd=false;
    wrd='';
    lettOnBrd = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    
}

function rstGm(){
    newBoard();
    fillR();
    wrd = '';
    invldWrd=false;
    lettOnBrd = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
    rstScr();
    document.getElementById("errors").innerHTML = "None";
}
