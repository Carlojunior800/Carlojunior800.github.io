$(document).ready(function () {
      
    if ($(window).scrollTop() > 399){
        $("#icone").show();
    } else {
        $("#icone").hide();
    }
    
    window.addEventListener("scroll", function () {
        if ($(window).scrollTop() > 400){
            $("#icone").show();
        } else {
            $("#icone").hide();
        }
    });
});