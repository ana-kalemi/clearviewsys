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
var displayColCountry = false;//true or false
var displayColCode = true;//true or false
var displayColCurrency = true;//true or false
var displayColWeBuy = false;//true or false
var displayColWeSell = false;//true or false
var displayColINVBuy = true;//true or false
var displayColINVSell = true;//true or false
/*---------------------*/

/*---------Max Rows in one slide-----*/
var maxSliderows = 12;
/*---------------------*/

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

    /**Build Rates table*/
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
    /**updating info from XML file **/
    var timeUpdate = '';
    $(xml).find('TIMESTAMP').each(function () {
        if (timeUpdateDate === true) {
            timeUpdate += $(this).text();
        }
    });
    $('.time_update').html(timeUpdate);

    /**writing data from XML file into rates board **/
    var leftTable = '';
    var rightTable = '';
    var rowQty = 0;
    var we_sell;
    var we_buy;
    var inv_sell;
    var inv_buy;
    var countryStr;
    var img;
    var code_name;
    var currency;

    $(xml).find('RATE').each(function () {

        /**Create other currencies table*/
        if ($(this).find('ISFLAGGED').text() === '**') {

            /**round*/
            we_sell = round_data($(this).find('WESELL').text());
            we_buy = round_data($(this).find('WEBUY').text());
            inv_sell = round_data($(this).find('INVSELL').text());
            inv_buy = round_data($(this).find('INVBUY').text());
            code_name = $(this).find('ISO').text();

            /**change currency name*/
            currency = changeCurrencyName($(this).find('NAME').text());

            /**short country name*/
            countryStr = get_short_country_str($(this).find('COUNTRY').text(), code_name);
            img = '<img src="images/' + $(this).find('FLAGURL').text() + '" class="img-responsive" alt=""/>';

            if (rowQty < maxSliderows) {
                /**add row to slider rows string*/
                leftTable += prepare_table_row(img, countryStr, code_name, currency, we_buy, we_sell, inv_buy, inv_sell);
            } else {
                /**add row to slider rows string*/
                rightTable += prepare_table_row(img, countryStr, code_name, currency, we_buy, we_sell, inv_buy, inv_sell);
            }
            rowQty++;
        }

    });
    /**write rows strings in the tables*/
    $('#main-rates-left .main_tbody').html(leftTable);
    $('#main-rates-right .main_tbody').html(rightTable);

    /**--column option--*/
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
    /**-----------------*/

    /**Start "Main currencies" slider */
    var mainRatesSlider = $("#other-rates-slider");
    mainRatesSlider.trigger('destroy.owl.carousel');
    mainRatesSlider.owlCarousel({
        autoplayHoverPause: false,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 15000,
        autoplaySpeed: 3000,
        responsive: {
            0: {
                items: 3,
                margin: 3,
                dots: false
            }
        }
    });
}

function round_data(number) {
    var amount = (Math.round(number * 10000)) / 10000;
    if (String(amount).length <= 5) {
        amount = amount + '0';
    }
    return amount;
}

function get_short_country_str(country, code) {
    var countryStr = country;
    if (code === 'USD') {
        countryStr = 'U.S. of America';
    }
    return countryStr;
}

function changeCurrencyName(name) {
    if(name === 'Koruny'){
        name = 'Koruna';
    }
    if (name ==='Zlotych'){
        name = 'Zloty'
    }

    return name;
}


function prepare_table_row(img, countryStr, code_name, currency, we_buy, we_sell, inv_buy, inv_sell) {
    /**outerWidth - th of table. */
    var flag = jQuery('.flag').outerWidth();
    var code = jQuery('.code').outerWidth();
    var cur = jQuery('.cur').outerWidth();
    var buy = jQuery('.buy').outerWidth();
    var sell = jQuery('.sell').outerWidth();
    var country = jQuery('.country').outerWidth();
    var invbuy = jQuery('.invbuy').outerWidth();
    var invsell = jQuery('.invsell').outerWidth();

    var row = '';
    row += '<tr class="row_currencyUp">' +
        '<td class="displayColFlag" style="width:' + flag + 'px" >' + img + '</td>' +
        '<td class="displayColCountry" style="width:' + country + 'px" >' + countryStr + '</td>' +
        '<td class="displayColCurrency" style="width:' + cur + 'px" >' + currency + '</td>' +
        '<td class="displayColCode" style="width:' + code + 'px" >' + code_name + '</td>' +
        '<td class="displayColWeBuy" style="width:' + buy + 'px" >' + we_buy + '</td>' +
        '<td class="displayColWeSell" style="width:' + sell + 'px" >' + we_sell + '</td>' +
        '<td class="displayColINVBuy" style="width:' + invbuy + 'px" >' + inv_buy + '</td>' +
        '<td class="displayColINVSell" style="width:' + invsell + 'px" >' + inv_sell + '</td>' +
        '</tr>';

    return row;
}