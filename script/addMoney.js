document.getElementById('add-money-btn')
    .addEventListener('click', function(event) { 
        event.preventDefault();
        const amount = getNumInputValueById('amount-in');
        const pin = getNumInputValueById('pin-in');
        const mainBalance = getNumTextValueById("balance-main-page");
        const phNum = getNumInputValueById("phone-number-in");
        const bank = getTextInputValueById("bank-name");
        if (amount < 0) {
            alert("Invalid amount!");
            return;
        }

        if(amount && pin && phNum && bank){
            if(pin === 1234){
                const sum = mainBalance + amount;
                document.getElementById('balance-main-page').innerText = sum;

                // List in Transaction History
                const transactionContainer = document.getElementById("transaction-histories");

                const div = document.createElement("div");
                div.classList.add("bg-green-300","my-4");

                div.innerHTML = `
                <h1 class="text-gray-700">Added Money from ${bank}</h1>
                <h3>$${amount}</h3>
                <p>Account Number:${phNum}</p>

                `
                transactionContainer.appendChild(div);

                alert("Add money successful! Check Transactions")

            }else {
                alert("PIN not correct");
            }
        }else {
            alert('empty amount or PIN or phone or Bank!')
        }
        
        
        
    });