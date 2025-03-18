document.getElementById("imc").innerHTML = "Indice di Massa Corporea";

let nome = prompt("Inserisci il tuo nome: ");
let età = parseInt(prompt("Inserisci la tua età: "));
let sesso = parseInt(prompt("Inserisci il tuo sesso: 1 = Maschio, 2 = Femmina"));
let peso = parseInt(prompt("Inserisci il tuo peso (in kg): "));
let altezza = parseInt(prompt("Inserisci la tua altezza (cm): "));

// Calcolo imc
let altezzaMetri = altezza / 100;
let IMC = peso / (altezzaMetri * altezzaMetri);

// classificazione del peso (https://dietistaroma.com/imc-lindice-di-massa-corporea-cose-e-a-cosa-serve/)
let classificazione;
if (IMC < 18.5) {
    classificazione = "sottopeso";
} else if (IMC >= 18.5 && IMC < 24.9) {
    classificazione = "normopeso";
} else if (IMC >= 25 && IMC < 29.9) {
    classificazione = "sovrappeso";
} else {
    classificazione = "obeso";
}

// maggiorenne o minorenne
let etaCategoria = età >= 18 ? "maggiorenne" : "minorenne";

// alert con il output
alert(`Ciao ${nome}, il tuo IMC è ${IMC.toFixed(2)}, classificabile come soggetto ${classificazione}. In base alla tua età sei ${etaCategoria}.`);
