/*
* you must specify path to xml file,
* script work only if you specify correct path to xml file on server
* script does not work without web server
*
* */

/*--------path---------------*/
/*example absolute path*/
//var hostURL = 'https://example.com/rateswithcss.xml'

/*example relative path - can be use if xml file is located in current project*/
var hostURL = 'xml/rateswithcss.xml';

/*--------refresh time-------*/
var timeRef = 1*60*1000; // 1*60*1000 - 1 minute
var timeUpdateDate = true;//true or false - display or not time update date
/*--------table option---*/
/*display table: you can specify display or none table with main courses and other courses*/
var upperSection = true; //true or false
var lowerSection = false; //true or false

/*--column option--*/
/*you can specify column for display - true or false*/
var displayColFlag = true;//true or false
var displayColCode = true;//true or false
var displayColCurrency = false;//true or false
var displayColCountry = true;//true or false
var displayColWeBuy = true;//true or false
var displayColWeSell = true;//true or false
var displayColINVBuy = false;//true or false
var displayColINVSell = false;//true or false

/*---------------------*/

/*calculate option*/
var displayCalculate = false; //true or false

/*----------AutoScroll-------*/
/*TopTable*/
var AutoScrollTopTable = false; //true or false

/*autoscroll options*/
var TopRowHeight = 50;
var TopMaxRows = 3;
var TopScrollSpeed = 600;
/*1 - atostart true; 0 - autostart false*/
var TopAutoStart = 1; //0
/*scroll direction*/
var TopDirect = 'up'; //'down'
/*specify - 1 if you want stop scrolling when you mouseover on table of rates*/
var TopPauseOnHover = 0; //1

/*-LowTable-*/
var AutoScrollLowTable = false; //true or false

    /*autoscroll options*/
var LowRowHeight = 50;
var LowMaxRows = 5;
var LowScrollSpeed = 600;
/*1 - atostart true; 0 - autostart false*/
var LowAutoStart = 1; //0
/*scroll direction*/
var LowDirect = 'up'; //'down'
/*specify - 1 if you want stop scrolling when you mouseover on table of rates*/
var LowPauseOnHover = 0; //1
/*--------------------------*/

jQuery(document).ready(function($){

    if(displayCalculate == false){
        $('.calculate').remove();
    }
    else {
        calculate_build();
        calculate_rates();
    }
    /*----------table option---------*/
    if (upperSection == false) {
        $('.upperSection').remove();

    }
    if (lowerSection == false) {
        $('.lowerSection').remove();
    }

    /*autoScroll options*/
    if(AutoScrollTopTable == false){
        $('#prev-button-top').remove();
        $('#next-button-top').remove();

    }
    if(AutoScrollLowTable == false){
        $('#prev-button-low').remove();
        $('#next-button-low').remove();
    }
    /*-----*/

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
    /*----*/

    currency_rates();

    /*refresh rates table*/
    setInterval(function() {
        var element1 = $('.tbody').is(':empty');
        var element2 = $('.main_tbody').is(':empty');
        var element3 = $('.time_update').is(':empty');


        if(element1 == true && element2 == true && element3 == true ){
            currency_rates();
        }
        else{
            $(".fade_table1, .fade_table2 ").fadeOut(1, function(){
                $(".tbody").empty();
                $(".time_update").empty();
                $(".main_tbody").empty();

                currency_rates();
            });

            $(".fade_table1").fadeIn(1, function(){});
            $(".fade_table2").fadeIn(1, function(){});

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
                console.log('currency_rates() - erorr : 0');
            }
        }
    });
}

function success_load(xml) {

    /*outerWidth - th of table. */
    var flag = jQuery('.flag').outerWidth()-1;
    var code = jQuery('.code').outerWidth()-1;
    var cur = jQuery('.cur').outerWidth()-1;
    var buy = jQuery('.buy').outerWidth()-1;
    var sell = jQuery('.sell').outerWidth()-1;
    var country = jQuery('.country').outerWidth()-1;
    var invbuy = jQuery('.invbuy').outerWidth()-1;
    var invsell = jQuery('.invsell').outerWidth()-1;

    /*table cleaning*/
    jQuery(".tbody").empty();
    jQuery(".main_tbody").empty();
    jQuery('.time_update').empty();

    $(xml).find('TIMESTAMP').each(function () {
        if(timeUpdateDate == true){
            $('.time_update').append($(this).text());
        }

    });

    $(xml).find('RATE').each(function () {

        if ($(this).find('ISFLAGGED').text() == '**' && upperSection == true) {
            $('.main_tbody').append('<li class="row_currencyUp">' +
                '<span class="displayColFlag" style="width:' + flag + 'px" ><img src="images/' + $(this).find('FLAGURL').text() + '" class="img-responsive" alt=""/></span>' +
                '<span class="displayColCode" style="width:' + code + 'px" >' + $(this).find('ISO').text() + '</span>' +
                '<span class="displayColCurrency" style="width:' + cur + 'px" >' + $(this).find('NAME').text() + '</span>' +
                '<span class="displayColCountry" style="width:' + country + 'px" >' + $(this).find('COUNTRY').text() + '</span>' +
                '<span class="displayColWeBuy" style="width:' + buy + 'px" >' + $(this).find('WEBUY').text() + '</span>' +
                '<span class="displayColWeSell" style="width:' + sell + 'px" >' + $(this).find('WESELL').text() + '</span>' +
                '<span class="displayColINVBuy" style="width:' + invbuy + 'px" >' + $(this).find('INVBUY').text() + '</span>' +
                '<span class="displayColINVSell" style="width:' + invsell + 'px" >' + $(this).find('INVSELL').text() + '</span>' +

                '</li>');
        }
        else {
            if (lowerSection == true) {
                $('.tbody ').append('<li class="row_currencyLow">' +
                    '<span class="displayColFlag" style="width:' + flag + 'px" ><img src="images/' + $(this).find('FLAGURL').text() + '" class="img-responsive" alt=""/></span>' +
                    '<span class="displayColCode" style="width:' + code + 'px" >' + $(this).find('ISO').text() + '</span>' +
                    '<span class="displayColCurrency" style="width:' + cur + 'px" >' + $(this).find('NAME').text() + '</span>' +
                    '<span class="displayColCountry" style="width:' + country + 'px" >' + $(this).find('COUNTRY').text() + '</span>' +
                    '<span class="displayColWeBuy" style="width:' + buy + 'px" >' + $(this).find('WEBUY').text() + '</span>' +
                    '<span class="displayColWeSell" style="width:' + sell + 'px" >' + $(this).find('WESELL').text() + '</span>' +
                    '<span class="displayColINVBuy" style="width:' + invbuy + 'px" >' + $(this).find('INVBUY').text() + '</span>' +
                    '<span class="displayColINVSell" style="width:' + invsell + 'px" >' + $(this).find('INVSELL').text() + '</span>' +

                    '</li>');
            }
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

    $('.row_currencyUp span').css("height", TopRowHeight + 'px');
    $('.row_currencyLow span').css("height", LowRowHeight + 'px');

}

function atuoScrollRatesTable(){

    if(AutoScrollLowTable == true){
        $('.low').addClass('newstickerLow');

        $('.newstickerLow').newsTicker({
            row_height: LowRowHeight,
            max_rows: LowMaxRows,
            speed: LowScrollSpeed,
            direction: LowDirect,
            duration: 4000,
            autostart: LowAutoStart,
            pauseOnHover: LowPauseOnHover,
            prevButton:  $('#prev-button-low'),
            nextButton:  $('#next-button-low'),
            stopButton:  $('#stop-button-low'),
            startButton: $('#start-button-low')
        });
    }

    if(AutoScrollTopTable == true){
        $('.main_tbody').addClass('newstickerTop');

        $('.newstickerTop').newsTicker({
            row_height: TopRowHeight,
            max_rows: TopMaxRows,
            speed: TopScrollSpeed,
            direction: TopDirect,
            duration: 4000,
            autostart: TopAutoStart,
            pauseOnHover: TopPauseOnHover,
            prevButton:  $('#prev-button-top'),
            nextButton:  $('#next-button-top'),
            stopButton:  $('#stop-button-top'),
            startButton: $('#start-button-top')
        });
    }
}
/*-------------*/

/*----build div with calculate ---*/
function calculate_build(xml){
    $.ajax({
        type: "POST",
        url: hostURL,
        dataType: "xml",

        success: function(xml) {
            success_build(xml);
        },
        error: function(request, status, error){
            var statusCode = request.status;
            if (statusCode == 0){
                window.location.reload();
                console.log('calculate_build() - erorr : 0');
            }
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
            we_buy_rate = (we_buy_rate).toFixed(4);
            $('.we_buy_rate').html(we_buy_rate);

            /*we sell*/
            var we_sell_rate = $(this).find('WESELL').text() * amount;
            we_sell_rate = (we_sell_rate).toFixed(4);
            $('.we_sell_rate').html(we_sell_rate);
        }
    });

}

/*Calculate - if change amount or currency*/
function calculate_rates(){
    $(".amount_select, .flag_select, .select2-selecting").bind('change keyup', function() {
        $.ajax({
            type: "POST",
            url: hostURL,
            dataType: "xml",

            success: function (xml) {
                success_calculate(xml);
            },
            error: function(request, status, error){
                var statusCode = request.status;
                if (statusCode == 0){
                    window.location.reload();
                    console.log('calculate_rates() - erorr : 0');
                }
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





