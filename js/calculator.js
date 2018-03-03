$(document).ready(function() {
    
//    set up some global variables
    var display = "";
    var chain = [0];
    var currentNum = "";
    var result = 0;
    
//    number button click events
    $("#decimal").on('click', function(){
        display += ".";
        currentNum += ".";
    });
    
    $("#zero").on('click', function(){
        display += 0;
        currentNum += 0;
    });
    
    $("#one").on('click', function(){
        display += 1;
        currentNum += 1;
    });
    
    $("#two").on('click', function(){
        display += 2;        
        currentNum += 2;
    });
    
    $("#three").on('click', function(){
        display += 3;
        currentNum += 3;
    });
    
    $("#four").on('click', function(){
        display += 4;
        currentNum += 4;
    });
    
    $("#five").on('click', function(){
        display += 5;      
        currentNum += 5;
    });
    
    $("#six").on('click', function(){
        display += 6; 
        currentNum += 6;
    });
    
    $("#seven").on('click', function(){
        display += 7;
        currentNum += 7;
    });
    
    $("#eight").on('click', function(){
        display += 8;
        currentNum += 8;
    });
    
    $("#nine").on('click', function(){
        display += 9;   
        currentNum += 9;
    });
    
    
//    Operator click events
    $("#divide").on('click', function(){
        display += "/";
        chain.push([Number(currentNum), "divide"]);
        currentNum = "";
    });
    
    $("#multiply").on('click', function(){
        display += "*";
        chain.push([Number(currentNum), "multiply"]);
        currentNum = "";
    });
    
    $("#subtract").on('click', function(){
        display += "-";
        chain.push([Number(currentNum), "subtract"]);
        currentNum = "";
    });
    
    $("#add").on('click', function(){
        display += "+";
        chain.push([Number(currentNum), "add"]);
        currentNum = "";
    });
    
    $("#equals").on('click', function(){
        chain.push([Number(currentNum), "equals"]);
        var result = chain[1][0];
        var chainLength = chain.length;
        
        for (i=2;i<chainLength;i++) {
            switch(chain[i-1][1]) {
                case "add":
                    result = result + chain[i][0];
                    break;
                case "subtract":
                    result = result - chain[i][0];
                    break;
                case "multiply":
                    result = result * chain[i][0];
                    break;
                case "divide":
                    result = result / chain[i][0];
                    break;         
            }   
        }
        display = result;
        currentNum = "";
    });
    
//    clear click event
    $("#AC").on('click', function(){
        display = "";
        chain = [0];
        currentNum = "";
        result = 0;  
    });
    

//    this is our step function that runs a few times a second to set the display
    setInterval(function() { 
        if (display == "") {
            $("#display").html("0");  
        } else {
            $("#display").html(display); 
        }
        
        if ($("#display").width() > 300) {
            $("#display").html("EXCEEDED LIMIT"); 
        }
    }, 100)
    

    
});