$(document).ready(function(){
    $('#eduHideBtn').click(function(){
        $('#eduDiv').slideToggle(1000);
        if($('#eduHideBtn').text() == 'Hide') {
            console.log($('#eduHideBtn').text());
            $("#eduHideBtn").html("Show");
        } else {
            $("#eduHideBtn").html("Hide");
        }
        
    });
    $('#skillHideBtn').click(function(){
        $('#skillDiv').slideToggle(1000);
        if($('#skillHideBtn').text() == 'Hide') {
            console.log($('#skillHideBtn').text());
            $("#skillHideBtn").html("Show");
        } else {
            $("#skillHideBtn").html("Hide");
        }
        
    });
    $('#workHideBtn').click(function(){
        $('#workDiv').slideToggle(1000);
        if($('#workHideBtn').text() == 'Hide') {
            console.log($('#workHideBtn').text());
            $("#workHideBtn").html("Show");
        } else {
            $("#workHideBtn").html("Hide");
        }
        
    });
    $('#projHideBtn').click(function(){
        $('#projDiv').slideToggle(1000);
        if($('#projHideBtn').text() == 'Hide') {
            console.log($('#projHideBtn').text());
            $("#projHideBtn").html("Show");
        } else {
            $("#projHideBtn").html("Hide");
        }
        
    });
});