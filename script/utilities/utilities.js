// function to return input element's int value
function getNumInputValueById(id) {
    const value = parseFloat(document.getElementById(id).value);
    return value;
}

// function to return text element int value
function getNumTextValueById(id){ 
    const value = parseFloat(document.getElementById(id).innerText);
    return value;
}

// function to change inner text of an element

function setInnerTextByIDandValue(id, value) {
    document.getElementById(id).innerText = value;
}

// function to handle toggle
function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}