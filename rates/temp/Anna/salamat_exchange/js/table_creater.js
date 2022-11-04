/*
* you have to specify path to xml file,
* script work only if you specify correct path to xml file on server
* script does not work without web server
* */
/*--------path---------------*/
/*example absolute path*/
//var hostURL = 'https://example.com/rateswithcss.xml'

/*example relative path - can be use if xml file is located in current project*/
var hostURL = 'xml/rateswithcss.xml';

/*--------refresh time-------*/
var timeRef = 5 * 60 * 1000; // 1*60*1000 - 1 minute
var timeUpdateDate = true;//true or false - display or not time update date

/*--column option--*/
/*you can specify column for display - true or false*/
var displayColFlag = true;//true or false
var displayColCode = true;//true or false
var displayColCurrency = true;//true or false
var displayColCountry = true;//true or false
var displayColWeBuy = true;//true or false
var displayColWeSell = true;//true or false
var displayColINVBuy = false;//true or false
var displayColINVSell = false;//true or false
/*---------------------*/

/*data by columns*/
var flag;
var buy;
var sell;
var cur;
var code;
var country;
var invBuy;
var invSel;
/*---------------------*/
var timeUpdate;
var ratesTable;
/*---------------------*/
var statusCode;

jQuery(document).ready(function ($) {
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

    currency_rates();

    /**refresh rates table*/
    setInterval(function () {
            currency_rates();
        }, timeRef
    );
});

/**
 * Window Resize
 * */
jQuery(window).resize(function () {
    currency_rates();
});

function currency_rates() {
    $.ajax({
        type: "POST",
        url: hostURL,
        dataType: "xml",
        success: function (xml) {
            success_load(xml);
        },
        error: function (request, status, error) {
            statusCode = request.status;
            if (statusCode === 0) {
                window.location.reload();
                console.log('currency_rates() - erorr : 0');
            }
        }
    });
}

function success_load(xml) {

    /**Updating Time **/
    $(xml).find('TIMESTAMP').each(function () {
        if (timeUpdateDate === true) {
            timeUpdate = $(this).text();
        }
    });
    $('.time_update').html(timeUpdate);

    /**Create currencies table*/
    ratesTable = '';
    $(xml).find('RATE').each(function () {
        if ($(this).find('ISFLAGGED').text() === '**') {
            flag = '<img src="images/' + $(this).find('FLAGURL').text() + '" class="img-responsive" alt=""/>';
            buy = $(this).find('WEBUY').text();
            sell = $(this).find('WESELL').text();
            cur = $(this).find('NAME').text();
            code = $(this).find('ISO').text();
            country = $(this).find('COUNTRY').text();
            if(country === 'United States of America'){
                country = 'U.S. of America';
            }
            if(country === 'Euro Member Countries'){
                country = 'EU. Countries';
            }
            invBuy = $(this).find('INVBUY').text();
            invSel = $(this).find('INVSELL').text();

            ratesTable += '<tr>';
            ratesTable += '<td class="displayColFlag">' + flag + '</td>';
            ratesTable += '<td class="displayColCountry">' + country + '</td>';
            ratesTable += '<td class="displayColCurrency">' + cur + '</td>';
            ratesTable += '<td class="displayColCode">' + code + '</td>';
            ratesTable += '<td class="displayColWeBuy">' + buy + '</td>';
            ratesTable += '<td class="displayColWeSell">' + sell + '</td>';
            ratesTable += '<td class="displayColINVBuy">' + invBuy + '</td>';
            ratesTable += '<td class="displayColINVSell">' + invSel + '</td>';
            ratesTable += '</tr>';
        }
    });
    $('#currency_table').find('.main_tbody').html(ratesTable);

    /**Column options*/
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