$(document).ready(function(){
    
//Define global variables..............................................................................
    var clickSearch = $("#search");
    var typeSearch = $("#userSearch");
    var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    
    
//This function makes the call and gets the data..................................................................
    function getData() {
        var query = typeSearch.val();
    }
    
    
    
});