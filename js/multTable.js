/*
name: Jonathan Wydola
date: Nov 3 2016
class: GUI 1
updated Nov 3 2016 11:33pm

This file is owned by jonathan wydola and is intended for use for educational purposes only
*/

/* i'm entirely sure that the boot strap handles the result of this input being invalid with the pop over
*/
"use strict";
function multTable(){
    var content = document.getElementById("table-responsive");
    var colStart = parseInt(multForm.cstart.value);
    var colEnd = parseInt(multForm.cend.value);
    var rowStart = parseInt(multForm.rstart.value);
    var rowEnd = parseInt(multForm.rend.value);
    var validation = function(){
        /*easiest way i could handle descending inputs and negatives*/
        var swapIfGreater = function(){
            //swap the values
            if(colStart > colEnd){
                var temp;
                temp = colStart;
                colStart = colEnd;
                colEnd = temp;
            }
            if(rowStart > rowEnd){
                var temp2;
                temp2 = rowStart;
                rowStart = rowEnd;
                rowEnd = temp2;
            }
        };
        
        //empty input
        var validateSpace = function(data){
            if ((data === "") || (data === " ") || (data === isNaN(data))){
                return false;
            } 
            return true;
        };
        
        //validateInputs
        var truth1 = validateSpace(colStart);
        var truth2 = validateSpace(colEnd);
        var truth3 = validateSpace(rowStart);
        var truth4 = validateSpace(rowEnd);
       
        
        
        //if all inputs are valid, swap values and returns to table
        if((truth1) && (truth2) && (truth3) && (truth4)){
            swapIfGreater(colStart, colEnd);
            swapIfGreater(rowStart, rowEnd);
            return true;
        } else{
            return false;
        }
        
    };
    
    /* THIS WILL BE THE MAIN */
    var res = validation(colStart, colEnd, rowStart, rowEnd); 
    
    //passes validation and begins building the table
    if (res === true){
        //counters
        var i;
        var j;
        //for my table
        var table = document.createElement("table");
        var tableHeaderDef = document.createElement("th");
        var tableRow = "";
        var tableHeader = ""; 
        var tableHeaderContext = "";
        var remTableData = ""; 
        var remTableDataContext = "";
        var remTableHeader = "";
        var remTableHeaderContext = "";
        var wrapper = "";
        
        table.setAttribute("class", "table table-striped table-bordered");
        table.setAttribute("id", "myTable");   
        for( i = rowStart; i <= rowEnd + 1; i+=1){

            tableRow = document.createElement("tr");
            //first row for header
            if(i===rowStart){
                //empty inital block
                tableRow.appendChild(tableHeaderDef);
                //remaining datapoint incremented by 1
                for (j = colStart; j <= colEnd; j+=1){
                    tableHeader = document.createElement("th");
                    tableHeaderContext = document.createTextNode(j);
                    tableHeader.appendChild(tableHeaderContext);
                    tableRow.appendChild(tableHeader);
                }
            //rest of the rows
            } else{

                for(j = colStart; j <= colEnd; j+=1){
                    remTableHeader = document.createElement("th");
                    remTableData = document.createElement("td");
                    //first column in row contains row headers
                    if(j === colStart){
                        remTableHeaderContext = document.createTextNode(i - 1);
                        remTableHeader.appendChild(remTableHeaderContext);
                        tableRow.appendChild(remTableHeader);
                    }
                    //product of row by column
                    remTableDataContext = document.createTextNode((i-1)*j);
                    remTableData.appendChild(remTableDataContext);
                    tableRow.appendChild(remTableData);
                }
            }
            table.appendChild(tableRow);
        }
        wrapper = document.createElement("div");
        wrapper.appendChild(table);
        content.innerHTML = wrapper.innerHTML;
    }
    
}
