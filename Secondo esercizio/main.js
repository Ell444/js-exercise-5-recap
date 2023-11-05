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
