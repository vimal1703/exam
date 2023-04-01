$(document).ready(function() {
    $('#register-form').submit(function(e) {
        e.preventDefault();

        // get the form data
        var formData = {
            'username': $('#username').val(),
            'password': $('#password').val(),
            'confirm_password': $('#confirm-password').val(),
            'email': $('#email').val()
        };

        // send the form data to the server
        $.ajax({
            type: 'POST',
            url: '/register',
            data: formData,
            dataType: 'json',
            encode: true
        })
        .done(function(data) {
            // show success message
            $('#message').html(data.message);
        })
        .fail(function(data) {
            // show error message
            $('#message').html(data.responseJSON.message);
        });
    });
});
