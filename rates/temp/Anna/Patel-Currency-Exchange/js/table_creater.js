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
var timeRef = 1 * 60 * 1000; // 1*60*1000 - 1 minute
var timeUpdateDate = true;//true or false - display or not time update date

/*--column option--*/
/*you can specify column for display - true or false*/
var displayColFlag = true;//true or false
var displayColCode = true;//true or false
var displayColCurrency = false;//true or false
var displayColCountry = false;//true or false
var displayColWeBuy = true;//true or false
var displayColWeSell = true;//true or false
var displayColINVBuy = false;//true or false
var displayColINVSell = false;//true or false
var displayColEmpty = true; //true or false - this is empty table column
/*---------------------*/

/*horizontal rate scroll*/
var horizontalScroll = true; //display - true; hide - false
var horizontalSpeed = 25000;
var $mq = $('.marquee');
/*----------------------*/

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
    if (displayColEmpty === false) {
        $('.empty-col').remove();
    }
    /*----*/
    /*for horizontal*/
    if (horizontalScroll === false) {
        $('.horizontal').remove();
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
            var statusCode = request.status;
            if (statusCode === 0) {
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
    var emptyCol = jQuery('.empty-col').outerWidth();

    /**updating info from XML file **/
    var timeUpdate = '';
    $(xml).find('TIMESTAMP').each(function () {
        if (timeUpdateDate === true) {
            timeUpdate += $(this).text();
        }
    });
    $('.time_update').html(timeUpdate);

    /**writing data from XML file into rates board **/
    var rateRows = '';
    var rateLine = '';
    $(xml).find('RATE').each(function () {

        if ($(this).find('ISFLAGGED').text() === '**') {

            /** round */
            var wesell = (Math.round($(this).find('WESELL').text() * 10000)) / 10000;
            var webuy = (Math.round($(this).find('WEBUY').text() * 10000)) / 10000;
            if (String(wesell).length <= 5) {
                wesell = wesell + '0';
            }
            if (String(webuy).length <= 5) {
                webuy = webuy + '0';
            }

            var inv_sell = (Math.round($(this).find('INVSELL').text() * 10000)) / 10000;
            var inv_buy = (Math.round($(this).find('INVBUY').text() * 10000)) / 10000;
            if (String(inv_sell).length <= 5) {
                inv_sell = inv_sell + '0';
            }
            if (String(inv_buy).length <= 5) {
                inv_buy = inv_buy + '0';
            }

            var countryStr = $(this).find('COUNTRY').text();
            if ($(this).find('ISO').text() === 'USD') {
                countryStr = 'U.S. of America';
            }

            rateRows += '<tr class="row_currencyUp">' +
                '<td class="displayColEmpty" style="width:' + emptyCol + 'px" ></td>' +
                '<td class="displayColFlag" style="width:' + flag + 'px" ><img src="images/' + $(this).find('FLAGURL').text() + '" class="img-responsive" alt=""/></td>' +
                '<td class="displayColCode" style="width:' + code + 'px" >' + $(this).find('ISO').text() + '</td>' +
                '<td class="displayColCurrency" style="width:' + cur + 'px" >' + $(this).find('NAME').text() + '</td>' +
                '<td class="displayColWeBuy" style="width:' + buy + 'px" >' + $(this).find('WEBUY').text() + '</td>' +
                '<td class="displayColWeSell" style="width:' + sell + 'px" >' + $(this).find('WESELL').text() + '</td>' +
                '<td class="displayColINVBuy" style="width:' + invbuy + 'px" >' + $(this).find('INVBUY').text() + '</td>' +
                '<td class="displayColINVSell" style="width:' + invsell + 'px" >' + $(this).find('INVSELL').text() + '</td>' +
                '<td class="displayColEmpty" style="width:' + emptyCol + 'px" ></td>' +
                '</tr>';
        }

        /**for Horizontal*/
        if ($(this).find('ISFLAGGED').text() == '**' && horizontalScroll == true) {
            rateLine += '<div class="rate-row">' +
                '<span class="horizontal_flag" ><img src="images/' + $(this).find('FLAGURL').html() + '"  alt="" /></span>' +
                '<span class="horizontal_code" >' + $(this).find('ISO').html() + '</span>' +
                '<span class="horizontal_rate" >Buy: ' + $(this).find('WEBUY').html() + '</span>' +
                '<span class="horizontal_rate" >Sell: ' + $(this).find('WESELL').html() + '</span>' +
                '</div>';
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


    $mq.bind('finished', horizontal);

    /*horizontal scroll*/
    function horizontal() {
        $mq
            .marquee('destroy')
            .html(rateLine)
            .marquee({
                //speed in milliseconds of the marquee
                duration: horizontalSpeed,
                //gap in pixels between the tickers
                gap: 100,
                //time in milliseconds before the marquee will start animating
                delayBeforeStart: 0,
                //'left' or 'right'
                direction: 'left',
                //true or false - should the marquee be duplicated to show an effect of continues flow
                duplicated: true
            });
    }

    if (horizontalScroll === true) {
        horizontal();
    }
    /*-----------------*/
}


