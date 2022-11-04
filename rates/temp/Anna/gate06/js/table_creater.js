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
var displayColCountry = false;//true or false
var displayColWeBuy = true;//true or false
var displayColWeSell = true;//true or false
var displayColINVBuy = false;//true or false
var displayColINVSell = false;//true or false
/*---------------------*/

/**countries object*/
var countries = {
    'europe': {
        'ALL': 'Albania Leke',
        'BAM': 'Bosnia and Herzegovina Convertible Marka',
        'BGL': 'Bulgaria Leva',
        'CZK': 'Czech Republic Koruny',
        'DKK': 'Denmark Kroner',
        'HRK': 'Croatia Kuna',
        'HUF': 'Hungary Forint',
        'ISK': 'Iceland Kronur',
        'MKD': 'Macedonia Denars',
        'NOK': 'Norway Krone',
        'PLN': 'Poland Zlotych',
        'RON': 'Romania Lei',
        'RSD': 'Serbie Dinar',
        'RUB': 'Russia Rubles',
        'SCP': 'Scottland Scottish Pounds',
        'SEK': 'Sweden Kronor'
    },
    'middleEast': {
        'AED': 'United Arab Emirates Dirhams',
        'BHD': 'Bahrain Dinars',
        'ILS': 'Israel New Shekels',
        'JOD': 'Jordan Dinars',
        'KWD': 'Kuwait Dinars',
        'LBP': 'Lebanon Pounds',
        'OMR': 'Oman Rials',
        'QAR': 'Qatar Rials',
        'SAR': 'Saudi Arabia Riyals',
        'TRY': 'Turkey Liras'
    },
    'asia': {
        'CNY': 'China Yuan Renminbi',
        'JPY': 'Japan Yen',
        'BND': 'Brunei Darussalam Dollars',
        'HKD': 'Hong Kong Dollars',
        'IDR': 'Indonesia Rupiahs',
        'INR': 'India Rupees',
        'KRW': 'Korea (South) Won',
        'LKR': 'Sri Lanka Rupees',
        'MOP': 'Macau Patacas',
        'MVR': 'Maldives (Maldive Islands) Rufiyaa',
        'MYR': 'Malaysia Ringgits',
        'NPR': 'Nepal Nepal Rupees',
        'PHP': 'Philippines Pesos',
        'PKR': 'Pakistan Rupees',
        'SGD': 'Singapore Dollars',
        'THB': 'Thailand Baht',
        'TWD': 'Taiwan New Dollars',
        'VND': 'Viet Nam Dong'
    },
    'australiaSouthPacific': {
        'AUD': 'Australia Dollars',
        'FJD': 'Fiji Dollars',
        'NZD': 'New Zealand Dollars',
        'PGK': 'Papua New Guinea Kina',
        'XPF': 'Comptoirs Français du Pacifiqu'
    },
    'centralAmerica': {
        'BSD': 'Bahamas Dollars',
        'BZD': 'Belize Dollars',
        'CAD': 'Canada Dollars',
        'CRC': 'Costa Rica Colones',
        'DOP': 'Dominican Republic Pesos',
        'GTQ': 'Guatemala Quetzales',
        'HNL': 'Honduras Lempiras',
        'JMD': 'Jamaica Dollars',
        'KYD': 'Cayman Islands Dollars',
        'MXN': 'Mexico Pesos',
        'NIO': 'Nicaragua Gold Cordobas',
        'BMD': 'Bermuda Dollars'
    },
    'southAmerica': {
        'ARS': 'Argentina Pesos',
        'BBD': 'Barbados Dollars',
        'BOB': 'Bolivia Bolivianos',
        'BRL': 'Brazil Brazil Real',
        'CLP': 'Chile Pesos',
        'COP': 'Colombia Pesos',
        'GYD': 'Guyana Dollars',
        'PEN': 'Peru Nuevos Soles',
        'PYG': 'Paraguay Guarani',
        'TTD': 'Trinidad and Tobago Dollars',
        'UYU': 'Uruguay Pesos',
        'XCD': 'East Caribbean Dollars'
    },
    'africa': {
        'BWP': 'Botswana Pulas',
        'DJF': 'Djibouti Francs',
        'EGP': 'Egypt Pounds',
        'KES': 'Kenya Shillings',
        'MAD': 'Morocco Dirhams',
        'MUR': 'Mauritius Rupees',
        'NAD': 'Namibia Dollars',
        'SCR': 'Seychelles Rupees',
        'TND': 'Tunisia Dinars',
        'XAF': 'Communauté Financière Africain Francs',
        'XOF': 'Communauté Financière Africain Francs',
        'ZAR': 'South Africa Rand'
    }
};

var titles = {
    'europe': 'European countries',
    'middleEast': 'Middle East Countries',
    'asia': 'Asian countries',
    'australiaSouthPacific': 'Australian/South Pacific countries',
    'centralAmerica': 'Central American countries',
    'southAmerica': 'South American countries',
    'africa': 'African countries'
};

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
    var rateRowsMain_1_999 = '<tr class="row_currency_title">' +
        '<td class="displayColCurrency">' +
        '<td class="displayColWeBuy">' + 'Taux de 0 à 999' + '<br>' + 'Rate from 0 to 999' + '</td>' +
        '<td class="displayColFlag">' +
        '<td class="displayColWeSell">' + 'Taux de 0 à 999' + '<br>' + 'Rate from 0 to 999' + '</td>' +
        '<td class="displayColCode">' +
        '</tr>';
    var rateRowsMain_1000 = '<tr class="row_currency_title">' +
        '<td class="displayColCurrency">' +
        '<td class="displayColWeBuy">' + 'Taux à partir de 1000' + '<br>' + 'Rate for 1000+' + '</td>' +
        '<td class="displayColFlag">' +
        '<td class="displayColWeSell">' + 'Taux à partir de 1000' + '<br>' + 'Rate for 1000+' + '</td>' +
        '<td class="displayColCode">' +
        '</tr>';

    /**Create main currencies table*/
    $(xml).find('RATE').each(function () {
        if ($(this).find('ISFLAGGED').text() === '**') {
            var currencyCode = $(this).find('ISO').text();
            if (currencyCode === 'USD1-999' || currencyCode === 'EUR1-999' || currencyCode === 'GBP1-999') {
                rateRowsMain_1_999 += '<tr class="row_currencyUp">' +
                    '<td class="displayColCurrency">' + $(this).find('NAME').text() + '</td>' +
                    '<td class="displayColWeBuy">' + $(this).find('WEBUY').text() + '</td>' +
                    '<td class="displayColFlag"><img src="images/' + $(this).find('FLAGURL').text() + '" class="img-responsive" alt=""/></td>' +
                    '<td class="displayColWeSell">' + $(this).find('WESELL').text() + '</td>' +
                    '<td class="displayColCode">' + $(this).find('ISO').text() + '</td>' +
                    '</tr>';
            }
            if (currencyCode === 'USD1000+' || currencyCode === 'EUR1000+' || currencyCode === 'GBP1000+') {
                rateRowsMain_1000 += '<tr class="row_currencyUp">' +
                    '<td class="displayColCurrency">' + $(this).find('NAME').text() + '</td>' +
                    '<td class="displayColWeBuy">' + $(this).find('WEBUY').text() + '</td>' +
                    '<td class="displayColFlag"><img src="images/' + $(this).find('FLAGURL').text() + '" class="img-responsive" alt=""/></td>' +
                    '<td class="displayColWeSell">' + $(this).find('WESELL').text() + '</td>' +
                    '<td class="displayColCode">' + $(this).find('ISO').text() + '</td>' +
                    '</tr>';
            }
        }
    });
    $('#rate_0_999').find('.main_tbody').html(rateRowsMain_1_999);
    $('#rate_1000').find('.main_tbody').html(rateRowsMain_1000);

    /**
     * Other currencies
     * */
    var data = {
        'europe': [],
        'middleEast': [],
        'asia': [],
        'australiaSouthPacific': [],
        'centralAmerica': [],
        'southAmerica': [],
        'africa': []
    };

    /**Create  slides*/
    $(xml).find('RATE').each(function () {
        if ($(this).find('ISFLAGGED').text() === '**') {
            var currencyCode = $(this).find('ISO').text();
            /**check currency name for XCD and XPF*/
            var name = $(this).find('NAME').text();

            if (currencyCode === 'XPF' && $(this).find('NAME').text() === '') {
                name = 'Franc CFP';
            }
            if (currencyCode === 'XCD' && $(this).find('NAME').text() === '') {
                name = 'Caraïbe Dollars';
            }
            var item = $(this);
            $.each(countries, function (reg, val) {
                if (val.hasOwnProperty(currencyCode)) {
                    var currency = {
                        cur: name,
                        buy: item.find('WEBUY').text(),
                        flag: '<img src="images/' + item.find('FLAGURL').text() + '" class="img-responsive" alt=""/>',
                        sell: item.find('WESELL').text(),
                        code: item.find('ISO').text()
                    };
                    data[reg].push(currency);
                }
            });
        }
    });

    /**create html with rates*/
    var html = '';
    var startThead = '<thead><tr>' +
        '<th class=\"cur\" width=\"16%\"></th>' +
        '<th class=\"buy\" width=\"25%\"></th>' +
        '<th class=\"flag\" width=\"16%\"></th>' +
        '<th class=\"buy\" width=\"25%\"></th>' +
        '<th class=\"code\" width=\"16%\"></th>' +
        '</tr>' +
        '</thead><tbody class="main_tbody ">';
    var endHtml = '</tbody></table></div>';

    $.each(data, function (reg, currencies) {
        var c = 0;
        $.each(currencies, function () {
            if (currencies.length > 6) {
                if (c === 0 || c === 6 || c === 12) {
                    html += '<div class="item table-wrapper"><p class="table-title">' + titles[reg] + '</p><table class="table">';
                    html += startThead;
                }
                html += '<tr>';
                html += '<td class="displayColCurrency">' + this.cur + '</td>';
                html += '<td class="displayColWeBuy">' + this.buy + '</td>';
                html += '<td class="displayColFlag">' + this.flag + '</td>';
                html += '<td class="displayColWeSell">' + this.sell + '</td>';
                html += '<td class="displayColCode">' + this.code + '</td>';
                html += '</tr>';
                if (c === 5 || c === 11 || c === (currencies.length - 1)) {
                    html += endHtml;
                }

            } else {
                if (c === 0) {
                    html += '<div class="item table-wrapper"><p class="table-title">' + titles[reg] + '</p><table class="table">';
                    html += startThead;
                }
                html += '<tr>';
                html += '<td class="displayColCurrency">' + this.cur + '</td>';
                html += '<td class="displayColWeBuy">' + this.buy + '</td>';
                html += '<td class="displayColFlag">' + this.flag + '</td>';
                html += '<td class="displayColWeSell">' + this.sell + '</td>';
                html += '<td class="displayColCode">' + this.code + '</td>';
                html += '</tr>';
                if (c === (currencies.length - 1)) {
                    html += endHtml;
                }
            }
            c++;
        });
    });

    /**Start "Other currencies" slider */
    var owl = $("#slider");
    owl.html(html);
    owl.trigger('destroy.owl.carousel');
    owl.owlCarousel({
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                dots: false
            }
        }
    });

    /**Start "Messages" slider */
    var messageSlider = $("#message-slider");
    messageSlider.trigger('destroy.owl.carousel');
    messageSlider.owlCarousel({
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                dots: false
            }
        }
    });

    /**Start "Main currencies" slider */
    var mainRatesSlider = $("#main-rates-slider");
    mainRatesSlider.trigger('destroy.owl.carousel');
    mainRatesSlider.owlCarousel({
        autoplayHoverPause: true,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                dots: false
            }
        }
    });

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