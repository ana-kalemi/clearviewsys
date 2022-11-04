jQuery(document).ready(function ($) {
    /**example relative path - can be use if xml file is located in current project*/
    var hostURL = 'xml/rateswithcss.xml';
    /**calculate option*/
    var displayCalculate = true; //false

    /**switcher*/
    var switcher = $('.cvs-switcher');

    var afxType = $('.cvs-switcher.active').attr('data-type');

    /**Only Numbers*/
    $('.cvs-calc-amount-input').bind("change keyup input click", function () {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });

    get_data_from_xml();
    calculate_rates();

    /**If user switch "we buy" / "we sell"*/
    switcher.on('click', function () {
        $('.cvs-switcher').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        afxType = $(this).attr('data-type');

        /**change data in fields according active switcher **/
        changeDataInBox(afxType)
    });

    /**change data in fields according active switcher **/
    function changeDataInBox(afxType) {
        var userActionType = $('.user-action-type');
        var afxActionType = $('.afx-action-type');
        var cvsUserAmount = $('#cvs_user_amount');
        var cvsAfxAmount = $('#cvs_afx_amount');
        var code = $('.cvs-calc-code-select').val();
        var amount = $('.cvs-calc-amount-input').val();

        /**hidden fields*/
        var afxSell = $('input#cvs_afx_sell').val();
        var afxBuy = $('input#cvs_afx_buy').val();
        var afxInvSell = $('input#cvs_afx_inv_sell').val();
        var afxInvBuy = $('input#cvs_afx_inv_buy').val();

        if (afxType === 'afx_buy') {
            cvsUserAmount.html(afxBuy);
            userActionType.html('RECEIVE');
            afxActionType.html('BUY');

            $('.cvs-inv-rate').html(parseFloat((afxBuy / amount).toFixed(5)) + ' or ' + afxInvBuy)

        } else {
            cvsUserAmount.html(afxSell);
            userActionType.html('PAY');
            afxActionType.html('SELL');

            $('.cvs-inv-rate').html(parseFloat((afxSell / amount).toFixed(5)) + ' or ' + afxInvSell)
        }
        cvsAfxAmount.html(amount);
        $('#cvs-currency-code').html('(' + code + ')');
    }

    /**Get rates data from XML file using AJAX*/
    function get_data_from_xml() {
        $.ajax({
            type: "POST",
            url: hostURL,
            dataType: "xml",

            success: function (xml) {
                success_build(xml);
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

    /**Build div with calculator ---*/
    function success_build(xml) {
        var select = $('#cvs-calc-code-select');
        var amount;
        var currency;
        var we_buy_rate;
        var we_sell_rate;
        var we_inv_buy_rate;
        var we_inv_sell_rate;
        /**hidden fields*/
        var afxSell = $('input#cvs_afx_sell');
        var afxBuy = $('input#cvs_afx_buy');
        var afxInvSell = $('input#cvs_afx_inv_sell');
        var afxInvBuy = $('input#cvs_afx_inv_buy');

        $(xml).find('RATE').each(function () {
            if (displayCalculate === true) {
                select.append('<option value="' + $(this).find('ISO').text() + '" >' + $(this).find('ISO').text() + '</option>')
                select.find('option:first-child').select();

                if ($(this).find('ISO').text() === select.find('option:selected').text()) {
                    $('.cvs-calc-currency-inner')
                        .html('<div><span>' + $(this).find('NAME').text() + '</span>' +
                            '<img src="images/' + $(this).find("FLAGURL").text() +
                            '" class="img-responsive" alt=""/></div>');
                    $('#cvs-currency-code').html('(' + $(this).find('ISO').text() + ')');
                }
            }

            amount = $('#cvs-calc-amount-input').val();
            currency = select.val();

            if ($(this).find('ISO').text() == currency) {

                /**we buy*/
                we_buy_rate = $(this).find('WEBUY').text() * amount;
                we_buy_rate = (we_buy_rate).toFixed(4);
                $('#cvs_user_amount').html(we_buy_rate);
                /**we inv buy*/
                we_inv_buy_rate = $(this).find('INVBUY').text() * amount;
                we_inv_buy_rate = (we_inv_buy_rate).toFixed(4);

                /**we sell*/
                we_sell_rate = $(this).find('WESELL').text() * amount;
                we_sell_rate = (we_sell_rate).toFixed(4);
                $('#cvs_afx_amount').html(amount);
                /**we inv sell*/
                we_inv_sell_rate = $(this).find('INVSELL').text() * amount;
                we_inv_sell_rate = (we_inv_sell_rate).toFixed(4);

                /**hidden fields*/
                afxSell.val(we_sell_rate);
                afxBuy.val(we_buy_rate);
                afxInvSell.val(we_inv_sell_rate);
                afxInvBuy.val(we_inv_buy_rate)

            }
        });
    }

    /**Calculate - if change amount or currency*/
    function calculate_rates() {
        $("#cvs-calc-amount-input, #cvs-calc-code-select").bind('change keyup', function () {
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

    /**Get XML data and calculate result*/
    function success_calculate(xml) {
        var select = $('#cvs-calc-code-select');
        var we_buy_rate;
        var we_sell_rate;
        var we_inv_buy_rate;
        var we_inv_sell_rate;

        var amount = $('#cvs-calc-amount-input').val();
        var currency = select.val();

        /**hidden fields*/
        var afxSell = $('input#cvs_afx_sell');
        var afxBuy = $('input#cvs_afx_buy');
        var afxInvSell = $('input#cvs_afx_inv_sell');
        var afxInvBuy = $('input#cvs_afx_inv_buy');

        $(xml).find('RATE').each(function () {

            if ($(this).find('ISO').text() == currency) {

                /*currency_inner - inform div */
                if ($(this).find('ISO').text() === select.find('option:selected').text()) {
                    $('.cvs-calc-currency-inner')
                        .html('<div><span>' + $(this).find('NAME').text() + '</span>' +
                            '<img src="images/' + $(this).find("FLAGURL").text() +
                            '" class="img-responsive" alt=""/></span></div>');
                    $('#cvs-currency-code').html('(' + $(this).find('ISO').text() + ')');
                }

                /**we buy*/
                we_buy_rate = $(this).find('WEBUY').text() * amount;
                we_buy_rate = (we_buy_rate).toFixed(4);
                $('#cvs_user_amount').html(we_buy_rate);
                /**we inv buy*/
                we_inv_buy_rate = $(this).find('INVBUY').text() * amount;
                we_inv_buy_rate = (we_inv_buy_rate).toFixed(4);

                /**we sell*/
                we_sell_rate = $(this).find('WESELL').text() * amount;
                we_sell_rate = (we_sell_rate).toFixed(4);
                $('#cvs_afx_amount').html(amount);
                /**we inv sell*/
                we_inv_sell_rate = $(this).find('INVSELL').text() * amount;
                we_inv_sell_rate = (we_inv_sell_rate).toFixed(4);

                /**hidden fields*/
                afxSell.val(we_sell_rate);
                afxBuy.val(we_buy_rate);
                afxInvSell.val(we_inv_sell_rate);
                afxInvBuy.val(we_inv_buy_rate)
            }
        });
    }
});