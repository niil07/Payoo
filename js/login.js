document.getElementById("login-btn")
    .addEventListener("click", function (event) {
        event.preventDefault();

        const phoneNumber = document.getElementById('phn-number').value;
        console.log(phoneNumber);
        const pinNumber = document.getElementById('pin-number').value;
        console.log(pinNumber);
        window.location.href = '/home.html'
});
