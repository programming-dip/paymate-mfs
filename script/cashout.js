const cashoutBtn = document.getElementById("cashout-btn");


cashoutBtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    const agentNumberField = document.getElementById("agent-number-in");
    const amountField = document.getElementById("cashout-amount-in");
    const pinField = document.getElementById("cashout-pin-in");
    let mainBalance = document.getElementById("balance-main-page").innerText;

    if(agentNumberField.value && amountField.value && pinField.value){
        if(parseInt(pinField.value) === 1234){
             const newBalance = parseFloat(mainBalance) - parseFloat(amountField.value);
             document.getElementById("balance-main-page").innerText = newBalance;
             
        }else{
            alert("PIN not correct!");
        }
    }else {
        alert("Please enter all the fields !");
    }

});