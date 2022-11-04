/*
* you must specify path to xml file,
* script work only if you specify correct path to xml file on server
* script does not work without web server
*
* */

/*--------path---------------*/
/*example absolute path*/
//var hostURL = 'https://example.com/currency_rates.xml'

/*example relative path - can be use if xml file is located in current project*/
var hostURL = 'xml/rateswithcss.xml';

/*--------refresh time-------*/
var timeRef = 1*60*1000; // 1*60*1000 - 1 minute

/*--column option--*/
/*you can specify column for display - true or false*/
var displayColFlag = true;//false
var displayColCode = true;//false
var displayColCurrency = true;//false
var displayColWeBuy = true;//false
var displayColWeSell = true;//false
var displayColINVBuy = false;//false
var displayColINVSell = false;//false
var displayColCountry = true;//false
/*---------------------*/

/*calculate option*/
var displayCalculate = false; //false

/*----------AutoScroll-------*/
/*TopTable*/
var AutoScrollTopTable = false; //false

/*autoscroll options*/
var TopRowHeight = 45;
var TopMaxRows = 3;
var TopScrollSpeed = 600;
/*1 - atostart true; 0 - autostart false*/
var TopAutoStart = 1; //0
/*scroll direction*/
var TopDirect = 'up'; //'down'
/*specify - 1 if you want stop scrolling when you mouseover on table of rates*/
var TopPauseOnHover = 0; //1

jQuery(document).ready(function($){

    if(displayCalculate == false){
        $('.calculate').remove();
    }
    else {
        calculate_build();
        calculate_rates();
    }

    currency_rates();

    /*refresh rates table*/
    setInterval(function() {
        var element2 = $('.main_tbody').is(':empty');
        var element3 = $('.time_update').is(':empty');

        if(element2 == true && element3 == true){
            currency_rates();
        }
        else{
            $(".fade_table1").fadeOut(600, function(){
                $(".time_update").empty();
                $(".main_tbody").empty();
                currency_rates();
            });

            $(".fade_table1").fadeIn(300, function(){});
        }
    }, timeRef); /* 1*60*1000 - 1 min */

    /*autoscroll*/
    atuoScrollRatesTable();

});

jQuery(window).resize(function(){
    currency_rates();
});

function currency_rates(){

    $.ajax({
        type: "POST",
        url: hostURL,
        dataType: "xml",

        success: function(xml) {
            success_load(xml);
        },
        error: function(request, status, error){
            var statusCode = request.status;
            if (statusCode == 0){
                window.location.reload();
            }
        }
    });
}

function success_load(xml) {

    /*--column option--*/
    if (displayColFlag == false) {
        $('.flag').remove();
    }
    if (displayColCode == false) {
        $('.code').remove();
    }
    if (displayColCurrency == false) {
        $('.cur').remove();
    }
    if (displayColWeBuy == false) {
        $('.buy').remove();
    }
    if (displayColWeSell == false) {
        $('.sell').remove();
    }
    if (displayColINVBuy == false) {
        $('.invbuy').remove();
    }
    if (displayColINVSell == false) {
        $('.invsell').remove();
    }
    if (displayColCountry == false) {
        $('.country').remove();
    }

    /*outerWidth - th of table. */
    var flag = jQuery('.flag').outerWidth();
    var code = jQuery('.code').outerWidth();
    var cur = jQuery('.cur').outerWidth();
    var buy = jQuery('.buy').outerWidth();
    var sell = jQuery('.sell').outerWidth();
    var country = jQuery('.country').outerWidth();
    var invbuy = jQuery('.invbuy').outerWidth();
    var invsell = jQuery('.invsell').outerWidth();

    /*table cleaning*/

    jQuery(".main_tbody").empty();
    jQuery('.time_update').empty();

    $(xml).find('TIMESTAMP').each(function () {
        $('.time_update').append($(this).text())
    });

    $(xml).find('RATE').each(function () {
        if ($(this).find('ISFLAGGED').text() == '**') {
            $('.main_tbody').append('<li class="row_currencyUp">' +
                '<span class="displayColFlag" style="width:' + flag + 'px" ><img src="images/' + $(this).find('FLAGURL').text() + '" class="img-responsive" alt=""/></span>' +
                '<span class="displayColCountry" style="width:' + country + 'px" >' + $(this).find('COUNTRY').text() + '</span>' +
                '<span class="displayColCode" style="width:' + code + 'px" >' + $(this).find('ISO').text() + '</span>' +
                '<span class="displayColCurrency" style="width:' + cur + 'px" >' + $(this).find('NAME').text() + '</span>' +
                '<span class="displayColWeBuy" style="width:' + buy + 'px" >' + $(this).find('WEBUY').text() + '</span>' +
                '<span class="displayColWeSell" style="width:' + sell + 'px" >' + $(this).find('WESELL').text() + '</span>' +
                '<span class="displayColINVBuy" style="width:' + invbuy + 'px" >' + $(this).find('INVBUY').text() + '</span>' +
                '<span class="displayColINVSell" style="width:' + invsell + 'px" >' + $(this).find('INVSELL').text() + '</span>' +
                '</li>');
        }
    });

    /*--column option--*/
    if (displayColFlag == false) {
        $('.displayColFlag').remove();
    }
    if (displayColCode == false) {
        $('.displayColCode').remove();
    }
    if (displayColCurrency == false) {
        $('.displayColCurrency').remove();
    }
    if (displayColWeBuy == false) {
        $('.displayColWeBuy').remove();
    }
    if (displayColWeSell == false) {
        $('.displayColWeSell').remove();
    }
    if (displayColINVBuy == false) {
        $('.displayColINVBuy').remove();
    }
    if (displayColINVSell == false) {
        $('.displayColINVSell').remove();
    }
    if (displayColCountry == false) {
        $('.displayColCountry').remove();
    }

    //if(AutoScrollTopTable == false){
    //    $('#prev-button-low').remove();
    //    $('#next-button-low').remove();
    //}
    $('.row_currencyUp span').css("height", TopRowHeight + 'px');

    //$('.table-currency li:even span').css('background','#F3F9FF');
}

function atuoScrollRatesTable(){

    if(AutoScrollTopTable == true){
        $('.main_tbody').addClass('newstickerTop');

        $('.newstickerTop').newsTicker({
            row_height: TopRowHeight,
            max_rows: TopMaxRows,
            speed: TopScrollSpeed,
            direction: TopDirect,
            duration: 3000,
            autostart: TopAutoStart,
            pauseOnHover: TopPauseOnHover,
            prevButton:  $('#prev-button'),
            nextButton:  $('#next-button'),
            stopButton:  $('#stop-button'),
            startButton: $('#start-button')
        });
    }
}

/*----build div with calculate ---*/
function calculate_build(xml){
    $.ajax({
        type: "POST",
        url: hostURL,
        dataType: "xml",

        success: function(xml) {
            success_build(xml);
        },
        error: function(){
            alert('ERROR');
        }
    });
}

function success_build(xml){
    $(xml).find('RATE').each(function () {

        if(displayCalculate == true ){
            $('.flag_select').append('<option value="' + $(this).find('ISO').text() + '" >' + $(this).find('ISO').text() + '</option>');

            $('.flag_select option:first-child').select();

            if($(this).find('ISO').text() == $('.flag_select option:selected').text() ){

                $('.currency_inner').html('<p>' + $(this).find('NAME').text() + '<img src="images/' + $(this).find("FLAGURL").text() + '" class="img-responsive" alt=""/></p>');
            }
        }

        var amount = $('.amount_select').val();
        var rate = $('.flag_select').val();

        if ($(this).find('ISO').text() == rate) {

            /*we buy*/
            var we_buy_rate = $(this).find('WEBUY').text() * amount;
            $('.we_buy_rate').html(we_buy_rate);

            /*we sell*/
            var we_sell_rate = $(this).find('WESELL').text() * amount;
            $('.we_sell_rate').html(we_sell_rate);
        }
    });
}

/*Calculate - if change amount or currency*/
function calculate_rates(){
    $(".amount_select, .flag_select").bind('change keyup', function() {
        $.ajax({
            type: "POST",
            url: hostURL,
            dataType: "xml",

            success: function (xml) {
                success_calculate(xml);
            },
            error: function () {
                alert('ERROR - calculate');
            }
        });
    });
}

function success_calculate(xml){
    var amount = $('.amount_select').val();
    var rate = $('.flag_select').val();

    $(xml).find('RATE').each(function () {

        if ($(this).find('ISO').text() == rate) {

            /*we buy*/
            var we_buy_rate = $(this).find('WEBUY').text() * amount;
            we_buy_rate = (we_buy_rate).toFixed(4);
            $('.we_buy_rate').html(we_buy_rate);

            /*currency_inner - inform div */
            if($(this).find('ISO').text() == $('.flag_select option:selected').text() ){
                $('.currency_inner').html('<p>' + $(this).find('NAME').text() +  '<img src="images/' + $(this).find("FLAGURL").text() + '"  class="img-responsive" alt=""/></p>');
            }

            /*we sell*/
            var we_sell_rate = $(this).find('WESELL').text() * amount;
            we_sell_rate = (we_sell_rate).toFixed(4);
            $('.we_sell_rate').html(we_sell_rate);
        }
    });
}
/*-------------*/


