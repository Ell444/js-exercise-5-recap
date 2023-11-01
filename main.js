//Crea una funzione che crea la versione girata di una parola. Chiedi all'utente una parola e mostra la versione girata della parola.

//creare una funzione con una stringa come parametro.

//function reverseWord (text) {
//    let reversedText = '';
//creare un ciclo for, per ottenere la stringa girata.
//    for (let i = text.length - 1; i >= 0; i--){
//        reversedText += text[i];
//    }
//    return reversedText;
//}
//Crea un event listener
//window.addEventListener('load', function(){

    //creare un prompt per chiedere all'utente la parola che desidera girare.
//    let inputUtente = prompt('Dimmi che parola vuoi girare');
    //mostrare la versione girata, grazie alla funzione creata in precedenza e fare un innertext del paragrafo con ID, per mostrare il risultato all'utente.
//    let word = reverseWord(inputUtente);
//    let paragrafo = document.getElementById('risultato');
//    paragrafo.innerText = `Il risultato della parola girata da te scelta è: ${word}`

//})


//Crea una funzione che concatena una lista di stringhe. Chiedi all'utente quante stringhe vuole concatenare e poi mostragli il risultato.

//crea una funzione con parametro un array
function concatenetedString (stringList) {
    let concatenate = '';
    for (let i = 0; i < stringList.length; i++) {
        let string = stringList[i];
        concatenate += string;
    }
    return concatenate;
}


window.addEventListener('load', function(){

    let inputUtente = prompt('Quante stringhe vuoi concatenare?');
    let strings = [];
    for(let i = 0; i < inputUtente; i++){
        let thisString = prompt (`Dammi la stringa ${i + 1}`)
        strings [i] = thisString;
    }
    let concatenate = concatenetedString (strings);
    let paragrafo = document.getElementById('risultato');
    paragrafo.innerText = `La concatenazione delle tue stringhe è: ${concatenate}`

})

