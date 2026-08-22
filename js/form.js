$(function() {

    var form = $('#ajax-contact');
    var formMessages = $('#form-messages');

    $(form).submit(function(e) {
        e.preventDefault();
        
        var formData = $(form).serialize();

        $.ajax({
            type: 'POST',
            url: 'mailer.php',
            data: formData
        })
        .done(function(response) {
            $(formMessages).removeClass('error').addClass('success');
            $(formMessages).text(response);
            $('#name, #company, #email, #phone, #pickup, #destination, #ftype, #cargo, #city, #wight, #message').val('');
        })
        .fail(function(data) {
            $(formMessages).removeClass('success').addClass('error');
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });
    });

});
