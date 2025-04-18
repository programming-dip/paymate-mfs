const cashoutBtn = document.getElementById("cashout-btn");


cashoutBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const agentNumber = getNumInputValueById("agent-number-in");
    const amount = getNumInputValueById("cashout-amount-in");
    const pin = getNumInputValueById("cashout-pin-in");
    let mainBalance = getNumTextValueById("balance-main-page");

    if (agentNumber && amount && pin) {
        if (pin === 1234) {
            const newBalance = mainBalance - amount;
            setInnerTextByIDandValue("balance-main-page", newBalance);

            // List in Transaction History
            const transactionContainer = document.getElementById("transaction-histories");

            const p = document.createElement("p");
            p.innerText = `
                             cashout $ ${amount} from ${agentNumber} agent
                             `
            transactionContainer.appendChild(p);

        } else {
            alert("PIN not correct!");
        }
    } else {
        alert("Please enter all the fields !");
    }

});