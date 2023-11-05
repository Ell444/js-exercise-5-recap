//Crea una funzione che transforma una stringa in maiuscolo o minuscolo in base ad un parametro.
//Quindi, crea un array che contiene tutte le lettere dell'alfabeto,
//ciascuna randomicamente maiuscola o minuscola.
//Consiglio: potete creare la stringa 'abcdefghijklmnopqrstuvz' e con un ciclo for
//controllare ogni carattere della stringa, ovvero ogni lettera dell'alfabeto.

function upperOrLower (num, string) {
    if (num === 0){
        return string.toLowerCase();
    }else if (num === 1){
        return string.toUpperCase();
    }
}

window.addEventListener ('load', function(){
    let alphabet = [];
    let stringAlphabet = 'abcdefghijklmnopqrstuvz';
    for (i = 0; i < stringAlphabet.length; i++) {
        let randomchar = Math.floor(Math.random ()*(1-0+1)+0);
        let alphabetLetter = stringAlphabet[i];
        alphabetLetter = upperOrLower(randomchar, alphabetLetter);
        alphabet[i] = alphabetLetter; 
    }
    let p = document.getElementById('risultato');
    p.innerText = `L'alfabeto randomico è ${alphabet}`
})