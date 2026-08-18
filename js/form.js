$(function() {

    var form = $('#ajax-contact');
    var formMessages = $('#form-messages');

    $(form).submit(function(e) {
        e.preventDefault();

        $(formMessages).removeClass('error').addClass('success');
        $(formMessages).text('Thank you. Your transport requirement has been noted. Our team will review the details you submitted.');

        $('#name, #company, #email, #phone, #pickup, #destination, #ftype, #cargo, #city, #wight, #message').val('');
    });

});
