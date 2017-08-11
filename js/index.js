
/* Source : http://callmenick.com/_development/image-overlay-hover-effects/ */
$(document).ready(function(){
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }

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
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        // $nav.css("height", "40px");
    });
    // $(".navbar-fixed-top").show();

    
});