/*
name: Jonathan Wydola
date: Nov 3 2016
class: GUI 1
updated Nov 17 2016 12:20pm

This file is owned by jonathan wydola and is intended for use for educational purposes only
*/
/*
 * idk 
 *    $('#multForm').preventDefault();
 *   //if the submission is pressed validate first
 *   $('#submissionbutton').submit(function(){
*/
"use strict";
$(document).ready(function(){
    
/*stopped page from refreshing on click by doing this from here:
 *http://stackoverflow.com/questions/19454310/stop-form-refreshing-page-on-submit
 */
    //validate the multForm
    $('form').validate({
        rules: {
            cstart: {
                required:   true,
                digits:     true   
            },
            cend: {
                required:   true,
                digits:     true
            },
            rstart: {
                required:   true,
                digits:     true
            },
            rend: {
                required:   true,
                digits:     true
            }
        },
        messages: {
            cstart: {
                required:   "Enter a column number",
                digits:     "Number must only contain digits"
            },
            cend:   {
                required:   "Enter a column number",
                digits:     "Number must only contain digits"
            },
            rstart: { 
                required:   "Enter a row number",
                digits:     "Number must only contain digits"
            },
            rend:   {
                required:   "^Enter a row number",
                digits:     "Number must only contain digits"
            }
        },
        submitHandler: function(form){
            form.submit();
        }
    });
    function multTable(){
        $('#multTable').empty();
        if($('#multForm').valid()){
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
               
                swapIfGreater(colStart, colEnd);
                swapIfGreater(rowStart, rowEnd);
            };
            
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
});
