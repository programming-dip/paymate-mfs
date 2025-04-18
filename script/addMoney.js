document.getElementById('add-money-btn')
    .addEventListener('click', function(event) { 
        event.preventDefault();
        const amount = getNumInputValueById('amount-in');
        const pin = getNumInputValueById('pin-in');
        const mainBalance = getNumTextValueById("balance-main-page");
        const phNum = getNumInputValueById("phone-number-in");

        if(amount && pin && phNum){
            if(pin === 1234){
                const sum = mainBalance + amount;
                document.getElementById('balance-main-page').innerText = sum;

                // List in Transaction History
                const transactionContainer = document.getElementById("transaction-histories");

                const p = document.createElement("p");
                p.innerText = `
                added $ ${amount} from ${phNum}
                `
                transactionContainer.appendChild(p);

            }else {
                alert("PIN not correct");
            }
        }else {
            alert('empty amount or PIN or phone!')
        }
        
        
        
    });