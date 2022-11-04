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

/*--------table option---*/
/*display table: you can specify display or none table with main courses and other courses*/
var upperSection = true; //false
var lowerSection = true; //false

/*--column option--*/
/*you can specify column for display - true or false*/
var displayColFlag = true;//false
var displayColCode = true;//false
var displayColCurrency = true;//false
var displayColWeBuy = true;//false
var displayColWeSell = true;//false
var displayColINVBuy = true;//false
var displayColINVSell = true;//false
var displayColCountry = true;//false

jQuery(document).ready(function($){

    currency_rates();

    /*refresh rates table*/
    setInterval(function() {
        var element1 = $('.tbody').is(':empty');
        var element2 = $('.main_tbody').is(':empty');
        var element3 = $('.time_update').is(':empty');

        if(element1 == true && element2 == true && element3 == true){
            currency_rates();
        }
        else{
            $(".fade_table1").fadeOut(600, function(){
                $(".tbody").empty();
                $(".time_update").empty();
                $(".main_tbody").empty();
            });
            $(".fade_table2").fadeOut(600, function(){
                currency_rates();
            });

            $(".fade_table1").fadeIn(300, function(){});
            $(".fade_table2").fadeIn(300, function(){});
        }
    }, timeRef); /* 1*60*1000 - 1 min */
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
        error: function(){
            alert('ERROR');
        }
    });
}

function success_load(xml){

    /*----------table option---------*/
    if(upperSection == false){
        $('.upperSection').remove();
    }
    if(lowerSection == false){
        $('.lowerSection').remove();
    }

    /*--column option--*/
    if(displayColFlag == false){
        $('.flag').remove();
    }
    if(displayColCode == false){
        $('.code').remove();
    }
    if(displayColCurrency == false){
        $('.cur').remove();
    }
    if(displayColWeBuy == false){
        $('.buy').remove();
    }
    if(displayColWeSell == false){
        $('.sell').remove();
    }
    if(displayColINVBuy == false){
        $('.invbuy').remove();
    }
    if(displayColINVSell== false){
        $('.invsell' ).remove();
    }
    if(displayColCountry == false){
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
    jQuery(".tbody").empty();
    jQuery(".main_tbody").empty();
    jQuery('.time_update').empty();

    $(xml).find('TIMESTAMP').each(function(){$('.time_update').append($(this).text())});

    $(xml).find('RATE').each(function() {
        if ($(this).find('ISFLAGGED').text() == '**' && upperSection == true) {
            $('.main_tbody').append('<tr class="row_currency">'+
                '<td class="displayColFlag" style="width:' + flag + 'px" ><img src="images/' + $(this).find('FLAGURL').text() + '" class="img-responsive" alt=""/></td>' +
                '<td class="displayColCode" style="width:' + code + 'px" >' + $(this).find('ISO').text() + '</td>' +
                '<td class="displayColCurrency" style="width:' + cur + 'px" >' + $(this).find('NAME').text() + '</td>' +
                '<td class="displayColWeBuy" style="width:' + buy + 'px" >' + $(this).find('WEBUY').text() + '</td>' +
                '<td class="displayColWeSell" style="width:' + sell  + 'px" >' + $(this).find('WESELL').text() + '</td>' +
                '<td class="displayColINVBuy" style="width:' + invbuy + 'px" >' + $(this).find('INVBUY').text() + '</td>' +
                '<td class="displayColINVSell" style="width:' + invsell + 'px" >' + $(this).find('INVSELL').text() + '</td>' +
                '<td class="displayColCountry" style="width:' + country + 'px" >' + $(this).find('COUNTRY').text() + '</td>' +
                '</tr>');
        }
        else{
            if(lowerSection == true){
                $('.tbody').append('<tr class="row_currency">' +
                '<td class="displayColFlag" style="width:' + flag + 'px" ><img src="images/' + $(this).find('FLAGURL').text() + '" class="img-responsive" alt=""/></td>' +
                '<td class="displayColCode" style="width:' + code + 'px" >' + $(this).find('ISO').text() + '</td>' +
                '<td class="displayColCurrency" style="width:' + cur + 'px" >' + $(this).find('NAME').text() + '</td>' +
                '<td class="displayColWeBuy" style="width:' + buy + 'px" >' + $(this).find('WEBUY').text() + '</td>' +
                '<td class="displayColWeSell" style="width:' + sell  + 'px" >' + $(this).find('WESELL').text() + '</td>' +
                '<td class="displayColINVBuy" style="width:' + invbuy + 'px" >' + $(this).find('INVBUY').text() + '</td>' +
                '<td class="displayColINVSell" style="width:' + invsell + 'px" >' + $(this).find('INVSELL').text() + '</td>' +
                '<td class="displayColCountry" style="width:' + country + 'px" >' + $(this).find('COUNTRY').text() + '</td>' +
                '</tr>');
            }
        }
    });

    /*--column option--*/
    if(displayColFlag == false){
        $('.displayColFlag').remove();
    }
    if(displayColCode == false){
        $('.displayColCode').remove();
    }
    if(displayColCurrency == false){
        $('.displayColCurrency').remove();
    }
    if(displayColWeBuy == false){
        $('.displayColWeBuy').remove();
    }
    if(displayColWeSell == false){
        $('.displayColWeSell').remove();
    }
    if(displayColINVBuy == false){
        $('.displayColINVBuy').remove();
    }
    if(displayColINVSell== false){
        $('.displayColINVSell' ).remove();
    }
    if(displayColCountry == false){
        $('.displayColCountry').remove();
    }
    /*width for low table - scroll*/
    var i = $('.lowerSection th:last-child').outerWidth() - 15;
    $('.low  tr').each(function(){$('.low td:last-child').outerWidth(i)});

}

