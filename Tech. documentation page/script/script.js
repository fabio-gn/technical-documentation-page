$(document).ready(function(){
    $('#burger-button').click(function() {
        $('#navbar ul').toggleClass('list-inactive');
        //$('#navbar ul').toggleClass('list-active');
        
    });
    $('#navbar ul li a').click(function(){
        $('#navbar ul').toggleClass('list-inactive');
    });
    $('#navbar ul li').click(function(){
        $('#navbar ul').toggleClass('list-inactive');
    });
    
});