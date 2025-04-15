// alert("Login Connected");
document.getElementById("login-btn")
    .addEventListener("click",function(event){ 
        event.preventDefault();
        const phoneNumber = document.getElementById("phone-number-in").value;
        const pin = document.getElementById("pin-in").value;
        if(phoneNumber.length == 10){
            if(parseInt(pin) === 1234){
                window.location.href="./main.html"
            }else {
                alert("Incorrect PIN");
            }
        }else {
           alert("invalid ph num");
        }
        
    });