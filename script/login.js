const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function(event){
    event.preventDefault(); 
    const phNumField = document.getElementById("phone-number-in");
    if(phNumField.value.length === 10){
        const pinField = document.getElementById("pin-in");
        if(parseInt(pinField.value) === 1234){
            window.location.href = "./main.html";
        }else{
            alert("wrong pin!");
        }
    }else{
        alert("Wrong formate of phone number");
    }
});