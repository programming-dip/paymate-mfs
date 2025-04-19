const cashoutBtn = document.getElementById("cashout-btn");


cashoutBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const agentNumber = getNumInputValueById("agent-number-in");
    const amount = getNumInputValueById("cashout-amount-in");
    const pin = getNumInputValueById("cashout-pin-in");
    let mainBalance = getNumTextValueById("balance-main-page");

    if(amount > mainBalance){
        alert("Not enough balance!");
        return;
    }

    if (agentNumber && amount && pin) {
        if (pin === 1234) {
            const newBalance = mainBalance - amount;
            setInnerTextByIDandValue("balance-main-page", newBalance);

            // List in Transaction History
            const transactionContainer = document.getElementById("transaction-histories");

            const div = document.createElement("div");
            div.classList.add("bg-red-300","my-4");

            div.innerHTML = `
            <h1 class="text-gray-700">Cashout from agent<h1>
            <h3>$${amount}</h3>
            <p>Agent: ${agentNumber}</p>
            `

            transactionContainer.appendChild(div);

        } else {
            alert("PIN not correct!");
        }
    } else {
        alert("Please enter all the fields !");
    }

});