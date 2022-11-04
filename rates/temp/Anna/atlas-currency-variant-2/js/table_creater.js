/*
* you have to specify path to xml file,
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

/*--column option--*/
/*you can specify column for display - true or false*/
var displayColFlag = true;//true or false
var displayColCode = true;//true or false
var displayColCurrency = false;//true or false
var displayColCountry = true;//true or false
var displayColWeBuy = false;//true or false
var displayColWeSell = false;//true or false
var displayColINVBuy = true;//true or false
var displayColINVSell = true;//true or false
/*---------------------*/

jQuery(document).ready(function($){

    /**--column option--*/
    if (displayColFlag === false) {
        $('.flag').remove();
    }
    if (displayColCode === false) {
        $('.code').remove();
    }
    if (displayColCurrency === false) {
        $('.cur').remove();
    }
    if (displayColWeBuy === false) {
        $('.buy').remove();
    }
    if (displayColWeSell === false) {
        $('.sell').remove();
    }
    if (displayColINVBuy === false) {
        $('.invbuy').remove();
    }
    if (displayColINVSell === false) {
        $('.invsell').remove();
    }
    if (displayColCountry === false) {
        $('.country').remove();
    }
    /*----*/

    currency_rates();

    /**refresh rates table*/
    setInterval(function() {
            currency_rates();
        }, timeRef
    );
});

/**
 * Window Resize
 * */
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
            if (statusCode === 0){
                window.location.reload();
                console.log('currency_rates() - erorr : 0');
            }
        }
    });
}

function success_load(xml) {
    /**outerWidth - th of table. */
    var flag = jQuery('.flag').outerWidth();
    var code = jQuery('.code').outerWidth();
    var cur = jQuery('.cur').outerWidth();
    var buy = jQuery('.buy').outerWidth();
    var sell = jQuery('.sell').outerWidth();
    var country = jQuery('.country').outerWidth();
    var invbuy = jQuery('.invbuy').outerWidth();
    var invsell = jQuery('.invsell').outerWidth();

    /**updating info from XML file **/
    var timeUpdate = '';
    $(xml).find('TIMESTAMP').each(function () {
        if(timeUpdateDate === true){
            timeUpdate += $(this).text();
        }
    });
    $('.time_update').html(timeUpdate);

    /**writing data from XML file into rates board **/
    var rateRows = '';
    $(xml).find('RATE').each(function () {

        if ($(this).find('ISFLAGGED').text() === '**') {

            /** round */
            var wesell = (Math.round($(this).find('WESELL').text() * 10000)) / 10000;
            var webuy = (Math.round($(this).find('WEBUY').text() * 10000)) / 10000;
            if(String(wesell).length <= 5){
                wesell = wesell + '0';
            }
            if(String(webuy).length <= 5){
                webuy = webuy + '0';
            }

            rateRows +='<tr class="row_currencyUp">' +
                '<td class="displayColFlag" style="width:' + flag + 'px" ><img src="images/' + $(this).find('FLAGURL').text() + '" class="img-responsive" alt=""/></td>' +
                '<td class="displayColCode" style="width:' + code + 'px" >' + $(this).find('ISO').text() + '</td>' +
                '<td class="displayColCountry" style="width:' + country + 'px" >' + $(this).find('COUNTRY').text() +'</td>' +
                '<td class="displayColCurrency" style="width:' + cur + 'px" >' + $(this).find('NAME').text() + '</td>' +
                '<td class="displayColWeBuy" style="width:' + buy + 'px" >' + webuy + '</td>' +
                '<td class="displayColWeSell" style="width:' + sell + 'px" >' + wesell + '</td>' +
                '<td class="displayColINVBuy" style="width:' + invbuy + 'px" >' + $(this).find('INVBUY').text() + '</td>' +
                '<td class="displayColINVSell" style="width:' + invsell + 'px" >' + $(this).find('INVSELL').text() + '</td>' +
                '</tr>';
        }
    });
    $('.main_tbody').html(rateRows);

    /*--column option--*/
    if (displayColFlag === false) {
        $('.displayColFlag').remove();
    }
    if (displayColCode === false) {
        $('.displayColCode').remove();
    }
    if (displayColCurrency === false) {
        $('.displayColCurrency').remove();
    }
    if (displayColWeBuy === false) {
        $('.displayColWeBuy').remove();
    }
    if (displayColWeSell === false) {
        $('.displayColWeSell').remove();
    }
    if (displayColINVBuy === false) {
        $('.displayColINVBuy').remove();
    }
    if (displayColINVSell === false) {
        $('.displayColINVSell').remove();
    }
    if (displayColCountry === false) {
        $('.displayColCountry').remove();
    }
}