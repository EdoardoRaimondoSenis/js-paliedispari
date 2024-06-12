// parola palindoma

function parolapalindroma(parola) {
    let caratteriparola = parola.split("");
    let parolainvertita = caratteriparola.reverse("").join("");
    return parolainvertita
}

let parolainiziale = prompt("inserisci una parola");

const parolarisultato = parolapalindroma(parolainiziale);

if (parolarisultato == parolainiziale) {
    document.querySelector(".risultato").innerHTML = "La parola " + parolainiziale + " è palindroma";
} else {
    document.querySelector(".risultato").innerHTML = "La parola " + parolainiziale + " non è palindroma";
}

// pari e dispari


