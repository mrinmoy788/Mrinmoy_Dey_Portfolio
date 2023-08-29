
function sendMail() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    const errorMessageContainer = document.getElementById('error-message');
    errorMessageContainer.innerHTML = ''; // Clear previous error messages

    let isValid = true;

    if (!nameInput.value) {
        displayErrorMessage('Please enter your name.');
        isValid = false;
    }

    if (!emailInput.value) {
        displayErrorMessage('Please enter your email.');
        isValid = false;
    }

    if (!phoneInput.value) {
        displayErrorMessage('Please enter your phone number.');
        isValid = false;
    }

    if (!messageInput.value) {
        displayErrorMessage('Please enter your message.');
        isValid = false;
    }

    if (isValid) {
        // If the form is valid, proceed with sending the email
        const templateParams = {
            name: nameInput.value,
            email: emailInput.value,
            address: document.getElementById('address').value,
            phone: phoneInput.value,
            message: messageInput.value
        };

        // Construct the email message body
        const emailMessage = `
            Name: ${templateParams.name}
            Email: ${templateParams.email}
            Address: ${templateParams.address}
            Phone: ${templateParams.phone}
            
            Message:
            ${templateParams.message}
        `;

        const emailData = {
            to_email: '<mdey788@gmail.com>', 
            subject: 'New Contact Form Submission',
            message: emailMessage
        };

        emailjs.send('service_ul8bu76', 'template_pduzx4g', emailData)
            .then(function(response) {
                console.log('Email sent successfully', response);
                alert('Message sent successfully! Thank you for contacting us.');
                clearFormInputs(); // Clear the form inputs
            })
            .catch(function(error) {
                console.log('Email sending failed', error);
                alert('Message sending failed. Please try again.');
            });
    }
}

function displayErrorMessage(message) {
    const errorMessageContainer = document.getElementById('error-message');
    const errorMessage = document.createElement('p');
    errorMessage.className = 'error';
    errorMessage.textContent = message;
    errorMessageContainer.appendChild(errorMessage);

    setTimeout(function() {
        errorMessageContainer.removeChild(errorMessage);
    }, 1000); // 1000 milliseconds = 1 second
}

function clearFormInputs() {
    // Clear the form inputs after successful submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
}
