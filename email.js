
function sendMail() {
    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    console.log('Template Params:', templateParams); // Add this line

    emailjs.send('service_ul8bu76', 'template_pduzx4g', templateParams)
        .then(function(response) {
            console.log('Email sent successfully', response);
        }, function(error) {
            console.log('Email sending failed', error);
        });
}

