// The icons 
const addMoneyBox = document.getElementById("addMoney-box");
const cashoutBox = document.getElementById("cashout-box");
const transactionBtn = document.getElementById("transaction-box");

// Toggle Functions
addMoneyBox.addEventListener("click", function(){ 
    
    handleToggle("cashout-section","none");
    handleToggle("addMoney-section","block");
    handleToggle("transaction-history-section","none");
});

cashoutBox.addEventListener("click", function() { 
    
    handleToggle("cashout-section","block");
    handleToggle("addMoney-section","none");
    handleToggle("transaction-history-section","none");
    
});


transactionBtn.addEventListener("click", function() {
    handleToggle("cashout-section","none");
    handleToggle("addMoney-section","none");
    handleToggle("transaction-history-section","block");

    
})