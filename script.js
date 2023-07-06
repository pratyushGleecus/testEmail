function sendMail() {

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value

    }

    var serviceID = process.env.SERVICE_ID;
    var templateID = process.env.TEMPLATE_ID;


    emailjs.send(serviceID, templateID, params)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Success")
        }, function (error) {
            console.log('FAILED...', error);
        });

}

function darkMode() {
    let bodyEle = document.body;
    bodyEle.classList.toggle("darkMode")
    let square = document.getElementById("squareIcon")
    square.classList.toggle("darkModeSq")
}
