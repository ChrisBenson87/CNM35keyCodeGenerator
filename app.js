document.addEventListener("keydown", (event) =>{
    let displayCode = document.getElementById("displayCode");
    let displayKey = document.getElementById("displayKey");
    let displayWhich = document.getElementById("displayWhich");

    let keyDown = event.key;
    let keyCode = event.code;
    let keyWhich = event.which;

    displayCode.innerHTML = `<p class = Pressed Key> ${keyDown} was pressed`
    displayKey.innerHTML = `<p class = Pressed Key> ${keyCode} was pressed`
    displayWhich.innerHTML = `<p class = Pressed Key> ${keyWhich} was pressed`
});