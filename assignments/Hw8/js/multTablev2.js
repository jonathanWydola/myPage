/*
name: Jonathan Wydola
date: Nov 3 2016
class: GUI 1
updated Nov 22 2016 11:20pm

This file is owned by jonathan wydola and is intended for use for educational purposes only
*/

function multTable(iA, iB, eA, eB, numTab) {
    if((!isNaN(iA) && !isNaN(iB) && !isNaN(eA) && !isNaN(eB))) {
        //Starts creating the table:
        var slendA, slendB, slinitA, slinitB;
        //Sets column values by max and min:
        slinitA = Number(iA);
        slinitB = Number(iB);
        //Sets row values by max and min:
        slendA = Number(eA);
        slendB = Number(eB);
        
      
        //Creates the table:
        var i = slinitA;
        var j, k;
        
        //Modified to present each tab as a div containing a table.
        var str = "<div id=\"table" + numTab + "\"><p>You have entered <strong>" + iA + "</strong> for Multiplier (Begin), <strong>" +
                iB + "</strong> for Multiplier (End), <strong>" + eA + "</strong> for Multiplicand (Begin), and <strong>" + eB +
                "</strong> for Multiplicand (End).</p><table>";
                
        for (i; i <= slinitB; i++) {
            if (i === slinitA) {
                str += "<tr><td></td>"; 
                //If i = 0, for the first row, add an empty cell.
                for (j = slendA; j <= slendB; j++) {
                    str += "<td>" + j + "</td>";
                    //Insert values within the range in the row.
                }
                str += "</tr>"; //End of a row.
            }

            str += "<tr><td>" + i + "</td>";
            for (k = slendA; k <= slendB; k++) {
                str += "<td>" + (i * k) + "</td>"; //Multiply these values.
            }
            str += "</tr>";     //End of a row.
        }
       
        
        
        if (numTab !== 1) {
            //If the value of numTab is not equal to 1, then add to what already exists.
            $("#tables").append(str);
        } else {
            //Follow the old procedure of formatting HTML table.
            $("#tables").html(str);
        }
        
        return numTab + 1;
    } else {
        return numTab;
    }
};

//Referenced from Chris Burbine's Validation test from Professor Heines's webpage.
//Link to page: https://teaching.cs.uml.edu/~heines/91.461/91.461-2015-16f/461-lecs/lecture19.jsp
$(document).ready(function() {
    //Retrieves the elements in the data fields of the form:
    var siA  = document.getElementById("slinitA");
    var siB  = document.getElementById("slinitB");
    var seA  = document.getElementById("slendA");
    var seB  = document.getElementById("slendB");
    
    //Retrieves the values of the elements:
    var iA = siA.value;
    var iB = siB.value;
    var eA = seA.value;
    var eB = seB.value;
    
    //Referenced from: http://stackoverflow.com/questions/29451507/how-to-use-jquery-validator-to-determine-value-of-one-field-is-greater-than-anot
    //Referenced from: https://teaching.cs.uml.edu/~heines/91.461/91.461-2015-16f/461-lecs/code/ChrisBurbineValidationTest.html?first=10&second=400
    $.validator.addMethod("greaterThan", function (value, element, param) {
       var $otherElement = $(param);
       return parseInt(value, 10) > parseInt($otherElement.val(), 10);
    });
        //default slider properties
        $("#slinitASlider").slider({
            orientation: "horizontal",
            range: "min",
            min: 0,
            max: 250,
            value: 10,
            slide: function (event, ui) {
                $("input#slinitA").val(ui.value);
            }
        });
        
        $("slinitA").change(function (e) {
            var iA = parseInt("slinitA").val();
            $("#slinitASlider").slider("value", iA);
        });

        $("#slinitBSlider").slider({
            orientation: "horizontal",
            range: "min",
            min: 0,
            max: 250,
            value: 15,
            slide: function (event, ui) {
                $("input#slinitB").val(ui.value);
            }
        });
        //indicates a change therefore retrieval is essential
        $("slinitB").change(function (e) {
            var iB = parseInt("slinitB").val();
            $("#slinitBSlider").slider("value", iB);
        });

        $("#slendASlider").slider({
            orientation: "horizontal",
            range: "min",
            min: 0,
            max: 250,
            value: 20,
            slide: function (event, ui) {
                $("input#slendA").val(ui.value);
            }
        });
        $("slendA").change(function (e) {
            var eA = parseInt("slendA").val();
            $("#slendASlider").slider("value", eA);
        });


        $("#slendBSlider").slider({
            orientation: "horizontal",
            range: "min",
            min: 0,
            max: 250,
            value: 25,
            slide: function (event, ui) {
                $("input#slendB").val(ui.value);
            }
        });
        $("slendB").change(function (e) {
            var eB = parseInt("slendB").val();
            $("#slendBSlider").slider("value", eB);
        });
    
    /* Creates a counter to keep track of how many tabs there are. */
    var numTab = 1;
    prevNumTab = numTab;
    /* Referenced from: https://jqueryui.com/tabs/#default */
    var tabs = $("#tabsNav").tabs();
    var divTabsHref    = $("#tabsHref");          //Gets #tabsHref div.
    var ulTabsHref     = divTabsHref.find("ul");  //Find list of tabs links.
    
    $('#multForm').validate({
    //Referenced from: http://stackoverflow.com/questions/15103289/jquery-validate-js-onkeyup-true-error
    onkeyup: function(element) {$(element).valid();},
    rules: {
    	slinitA: {
            required: true,
            number: true
        },
        slinitB: {
                required: true,
                number: true,
                greaterThan: "#slinitA"
        },
        slendA: {
                required: true,
                number: true
        },
        slendB: {
                required: true,
                number: true,
                greaterThan: "#slendA"
            }
        }, //End of rules.
    messages: {
        slinitA: {
            required : function() {
                $("#slinitA").focus();
                return "Please enter a number for the lower bound of the multipliers. <br />";
            },
            number: function() {
                $("#slinitA").focus();
                return "Please enter a number for the lower bound of the multipliers. <br />";
            }
        },
        slinitB: {
            required: function() {
                $("#slinitB").focus();
                return "Please enter a number for the upper bound of the multipliers. <br />";
            },
            number: function() {
                $("#slinitB").focus();
                return "Please enter a number for the upper bound of the multipliers. <br />";
            },
            greaterThan: function() {
                return "The number entered for the upper bound of the multipliers should be greater than the the multipliers' lower bound. <br />";
            }
        },
        slendA: {
            required: function() {
                $("#slendA").focus();
                return "Please enter a number for the lower bound of the multiplicands. <br />";
            },
            number: function() {
                $("#slendA").focus();
                return "Please enter a number for the lower bound of the multiplicands. <br />";
            }
        },
        slendB: {
            required: function() {
                $("#slendB").focus();
                return "Please enter a number for the upper bound of the multiplicands. <br />";
            },
                number: function() {
                $("#slendB").focus();
                return "Please enter a number for the upper bound of the multiplicands. <br />";
            },
            greaterThan: function() {
                //$("#slendB").focus();
                return "The number entered for the upper bound of the multiplicands should be greater than the the multiplicands' lower bound. <br />";
            }
        }
    }, //End of messages().
    errorPlacement: function(error, element) {
        //Source: http://stackoverflow.com/questions/13200659/custom-error-label-placement-using-jquery-validate-for-all-or-some-of-your-erro
        switch (element.attr("id")) {
            case "slinitA":
                error.appendTo("#slinitAErr");
                break;
            case "slinitB":
                error.appendTo("#slinitBErr");
                break;
            case "slendA":
                error.appendTo("#slendAErr");
                break;
            case "slendB":
                error.appendTo("#slendBErr");
                break;
            default:
                error.appendTo(element);
        }
    }, //End of errorPlacement().
    sucess: function(error, element) {
        //$(element).css({ "border" : ""});
    }, //End of success().			   //Taken from Professor Heines's webpage.
    }); //End of validate().
    $(".add-tab").button().click(function() {
        //Prints out link to content of tabs.
        prevNumTab = numTab;

        var tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>";
        var label = $("tabNav").val() || "Table " + numTab, id = "table" + numTab, 
            li = $(tabTemplate.replace( /#\{href\}/g, "#" + id ).replace( /#\{label\}/g, label)),
            tabContentHtml = $("#tables").val();
        tabs.find(".ui-tabs-nav").append(li);
        tabs.append("<div id='" + id + "'><p>" + tabContentHtml + "</p></div>");
        tabs.tabs("refresh");
        
      
        numTab = multTable(siA.value, siB.value, seA.value, seB.value, numTab);
        tabs.tabs("refresh");
        
        /* Makes it so that the newest tab is the active one: */
        tabs.tabs("option", "active", numTab - 2);
        if (numTab === prevNumTab) {
            divTabsHref.remove(ulTabsHref.lastchild);
        }
    });
    
    //Taken almost for verbatim at the source code @ http://jqueryui.com/tabs/#manipulation
    tabs.delegate("span.ui-icon-close", "click", function() {
        var panelId = $(this).closest("li").remove().attr("aria-controls");
        $("#" + panelId).remove();
        
        
        //Tab content was not removed from the final child.
        if (numTab === 1 || prevNumTab === 0) {
            $("#tables > div").each(function() {
                $(this).remove();
            });
        }
        
        tabs.tabs("refresh");
    });
        
    tabs.bind("keyup", function(event) {
        if (event.altKey && event.keyCode === $.ui.keyCode.BACKSPACE) {
            var panelId = tabs.find(".ui-tabs-active").remove().attr("aria-controls");
            $("#" + panelId).remove();
            tabs.tabs("refresh");
        }
    });
    
    /* Basically just removed all the content in the tabs navigation bar, and their corresponding divs. */
    $(".remove-all-tabs").button().click(function() {
        $(".ui-tabs-nav > li").each(function() {
            $(this).remove();
        });
        
        $("#tables > div").each(function() {
            $(this).remove();
        });
        
        //Reset numTab and prevNumTab to init:
        numTab = 1;
        prevNumTab = numTab;
        
        tabs.tabs("refresh");
    });
    
    prevNumTab = numTab;
    tabs.tabs("refresh");
});

