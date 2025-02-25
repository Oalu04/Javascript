function parseDonuts(donutString) {
    var numDonuts = parseInt(donutString)
    if (donutString.indexOf("dozen") != -1)
        numDonuts *= 12;
    return numDonuts;
}

function pedido() {

    const PRICE = 0.50;
    const TAX = 0.0916666667;

    if (document.getElementById("Name").value == "")
        alert("Você precisa fornecer um nome de usuário");
    else if (document.getElementById("minutes").value == "" || isNaN(document.getElementById("minutes").value))
        alert("Você deve fornecer o número de minutos ate a coleta");


    var numCakeDonnuts = parseDonuts(document.getElementById("cakedonuts").value);
    var numGlazedDonnuts = parseDonuts(document.getElementById("glazeddonuts").value);

    if (isNaN(numCakeDonnuts)) {
        numCakeDonnuts = 0;
    }
    if (isNaN(numGlazedDonnuts)) {
        numGlazedDonnuts = 0;
    }

    var subtotal = (numCakeDonnuts + numGlazedDonnuts) * PRICE;
    var tax = subtotal * TAX;
    var total = subtotal + tax;

    document.getElementById("subtotal").value = "$" + subtotal.toFixed(2);
    document.getElementById("tax").value = "$" + tax.toFixed(2);
    document.getElementById("total").value = "$" + total.toFixed(2);

}

function placeOrder() {
    form.submit();
}