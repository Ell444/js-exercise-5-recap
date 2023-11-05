//Crea una funzione che calcola il doppio di un numero.
//Quindi chiedi all'utente 10 numeri.
//Per ogni numero, mostra all'utente il doppio, usando la funzione.

function doubleNumber (num) {
    let double = num*2;
    return double;
}

window.addEventListener('load', function(){
    let numbers = [];
    for (let i = 0; i < 10; i++) {
        const userInput = Number(prompt(`Dammi 10 numeri - numero ${i + 1}`));
        let doubledNumber = doubleNumber (userInput);
        numbers [i] = doubledNumber;
    }
    let p = document.getElementById('risultato');
    p.innerText = `Il doppio dei tuoi numero è ${numbers}`;
})