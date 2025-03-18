function calcolaIMC() {
    let nome = document.getElementById("nome").value;
    let eta = parseInt(document.getElementById("eta").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let altezza = parseFloat(document.getElementById("altezza").value) / 100;
    
    if (!nome || isNaN(eta) || isNaN(peso) || isNaN(altezza) || altezza <= 0 || peso <= 0) {     
        alert("Per favore, compila tutti i campi correttamente.");
        return;
    }
    // classificazione del peso (https://dietistaroma.com/imc-lindice-di-massa-corporea-cose-e-a-cosa-serve/)

    let IMC = peso / (altezza * altezza);
    let classificazione = "";

    if (IMC < 18.5) {
        classificazione = "sottopeso";
    } else if (IMC >= 18.5 && IMC < 24.9) {
        classificazione = "normopeso";
    } else if (IMC >= 25 && IMC < 29.9) {
        classificazione = "sovrappeso";
    } else {
        classificazione = "obeso";
    }
    
    let etaCategoria = eta >= 18 ? "maggiorenne" : "minorenne";
    
    document.getElementById("risultato").innerHTML = `Ciao ${nome}, il tuo IMC è ${IMC.toFixed(2)}, classificabile come ${classificazione}. In base alla tua età sei ${etaCategoria}.`;
}
