$(function () {


    /**Get menu-top*/
    //get page
    var page = $('.menu-top').attr('data-page');

    $.ajax({
        url: "menu.html",
        dataType: "text",
        success: function(menu){
            $('.menu-top').html(menu);
            //add class active to current page name
            if(page != ''){
                $('li a.'+page).addClass('active');
            }
        }
    });

    /**Slider - Home page*/
    $('.single-item').slick({
        autoplay: true,
        dots: true,
        prevArrow:	'<div class="slick-arrow-prev"></div>',
        nextArrow:'<div class="slick-arrow-next"></div>'
    });

    /**get footer and correct inner div's height */
    $.ajax({
        url: "footer.html",
        dataType: "text",
        success: function(menu){
            $('.footer').html(menu);
        }
    });

    /**Section demo-form - height */
    var hDemo = $('.demo-form').outerHeight();

    var w = $(window).width();
    if(w > 768) {
        $('.section-form-text').outerHeight(hDemo);

        /**contact us page: height partner*/
        var h = $('.partner-left .contact-us-partners').outerHeight();
        $('.partner-right .contact-us-partners').outerHeight(h);
    }
});
$(window).resize(function(){
    var w = $(window).width();
    if(w > 768) {
        $('.section-form-text').outerHeight(hDemo);

        /**contact us page: height partner*/
        var h = $('.partner-left .contact-us-partners').outerHeight();
        $('.partner-right .contact-us-partners').outerHeight(h);
    }
});