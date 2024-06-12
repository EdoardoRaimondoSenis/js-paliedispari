// parola palindoma

function parolapalindroma(parola) {
    let caratteriparola = parola.split("");
    let parolainvertita = caratteriparola.reverse("").join("");
    return parolainvertita
}

let parolainiziale = prompt("inserisci una parola");

const parolarisultato = parolapalindroma(parolainiziale);

if (parolarisultato == parolainiziale) {
    document.querySelector(".risultatopalind").innerHTML = "La parola " + parolainiziale + " è palindroma";
} else {
    document.querySelector(".risultatopalind").innerHTML = "La parola " + parolainiziale + " non è palindroma";
}

// pari e dispari

let paridispari = prompt("Scegli: Pari o Dispari?")

if (paridispari == "Pari" || paridispari == "Dispari") {
    let numerounocinque = parseInt(prompt("Inserisci un numero da 1 a 5"));
    if (numerounocinque > 0 && numerounocinque <= 5) {
        function numerocpu(max, min) {
            return Math.floor(Math.random() * (max - min) + min);
        }
        
        console.log(numerounocinque)
        let numerocaso = numerocpu(1, 5);
        console.log(numerocaso)

        function sommatotale(num1, num2) {
            let somma = num1+ num2;
            return somma;
        }

        let somma = sommatotale(numerounocinque, numerocaso);
        console.log(somma)

        if (paridispari == "Pari") {
            if (somma % 2 == 0) {
                document.querySelector(".risultatopd").innerHTML = "La somma dei due numeri è " + somma + " ed è pari, Complimenti Hai vinto!"
            } else if (somma % 3 == 0) {
                document.querySelector(".risultatopd").innerHTML = "La somma dei due numeri è " + somma + " ed è dispari, Ha vinto la CPU!"
            }
        } else if (paridispari == "Dispari") {
            if (somma % 3 == 0) {
                document.querySelector(".risultatopd").innerHTML = "La somma dei due numeri è " + somma + " ed è dispari, Complimenti Hai vinto!"
            } else if (somma % 2 == 0) {
                document.querySelector(".risultatopd").innerHTML = "La somma dei due numeri è " + somma + " ed è pari, Ha vinto la CPU"
            }
        }
    
    } else {
        alert("Il numero inserito o è troppo grande");
        
    }
} else {
    alert("Scrivi Pari o Dispari o non giochiamo eh");
}

