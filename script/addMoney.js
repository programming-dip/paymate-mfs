document.getElementById('add-money-btn')
    .addEventListener('click', function(event) { 
        event.preventDefault();
        const amount = parseFloat(document.getElementById('amount-in').value);
        const pin = parseInt(document.getElementById('pin-in').value);
        const mainBalance = parseFloat(document.getElementById('balance-main-page').innerText);
        if(amount && pin){
            if(pin === 1234){
                const sum = mainBalance + amount;
                document.getElementById('balance-main-page').innerText = sum;
            }else {
                console.log("PIN not correct");
            }
        }else {
            alert('empty amount or PIN!')
        }
        
        
        
    });