function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value

    }

    let serviceID = "service_u6n2byb"
    let templateID = "template_rf46skg"

    emailjs.send(serviceID, templateID, params)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Success")
        }, function (error) {
            console.log('FAILED...', error);
        });

}