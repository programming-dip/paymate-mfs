// The icons 
const addMoneyBox = document.getElementById("addMoney-box");
const cashoutBox = document.getElementById("cashout-box");

// The sections
const addMoneySection = document.getElementById("addMoney-section");
const cashoutSection = document.getElementById("cashout-section");


// Toggle Functions


addMoneyBox.addEventListener("click", function(){ 
    
    addMoneySection.style.display = "block";
    cashoutSection.style.display = "none";
});

cashoutBox.addEventListener("click", function() { 
    
    cashoutSection.style.display = "block";
    addMoneySection.style.display = "none";
});