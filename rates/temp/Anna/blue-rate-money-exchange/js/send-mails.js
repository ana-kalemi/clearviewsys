$(function () {
    if ($('#contact-us-modal').length > 0) {
        var contactUsForm = $('#contact-us-form');
        var result = $('#contact-us-response').find('.response-result');
        var load_wrapper = $('#contact-us-modal').find('.load-wrapper');
        var address;
        var form_data;
        var url;
        $('.open-contact-us-modal').on('click', function () {
            address = $(this).attr('data-address');
            contactUsForm.find('input[name=address]').val(address);
        });

        /**Validation*/
        contactUsForm.validate({
            rules: {
                name: "required",
                email: {required: true, email: true}
            },
            messages: {
                name: {
                    required: "Please fill up this field"
                },
                email: {
                    required: "Please fill up this field",
                    email: "Wrong email format, please enter correct email"
                }
            },
            errorPlacement: function (error, element) {
                if (element.attr("name") === "name") {
                    error.insertAfter(contactUsForm.find("input[name=name]"));
                }
                if (element.attr("name") === "email") {
                    error.insertAfter(contactUsForm.find("input[name=email]"));
                }
            },
            errorElement: "div",
            submitHandler: function (e) {
                form_data = contactUsForm.serialize();
                url = contactUsForm.attr('action');
                load_wrapper.addClass('active');
                $.ajax({
                    type: "POST",
                    url: url,
                    data:form_data,
                    success: function (response) {
                        $('#contact-us-modal').modal('hide');
                        load_wrapper.removeClass('active');
                        result.html(response);
                        $('#contact-us-response').modal('show');
                    },complete: function(){}
                });
                return false;
            }
        });
    }
});