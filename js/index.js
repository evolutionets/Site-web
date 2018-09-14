
$(document).ready(function(){
    $("#chevron_down").click(function() {
        $('html,body').animate({
            scrollTop: $("section#prototype").offset().top + (-75)},
            1000);
    });


    $("#lien_prototype").click(function() {
        $('html,body').animate({
            scrollTop: $("section#prototype").offset().top  + (-75)},
            1000);
    });

    $("#lien_equipe").click(function() {
        $('html,body').animate({
            scrollTop: $("section#equipe").offset().top + (-40)},
            1000);
    });

    $("#lien_donations").click(function() {
        $('html,body').animate({
            scrollTop: $("section#donations").offset().top + (-80)},
            1000);
    });

    $("#lien_commanditaires").click(function() {
        $('html,body').animate({
            scrollTop: $("section#quote_commanditaires").offset().top + (-80)},
            1000);
    });

    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        // $nav.hide();
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height()+10);
        // $nav.css("height", "40px");
    });
    // $(".navbar-fixed-top").show();


});
