//Crea una funzione che esegue il lancio di una moneta (ritorna testa o croce, casualmente).
//Quindi, chiedi all'utente quanti lanci vuole effettuare e se punta su testa o croce.
//Se la maggioranza dei lanci sono uguali a ciò che ha puntato l'utente, mostragli che ha vinto.
//Altrimenti, mostragli che ha perso.

function lanciaLaMoneta () {
    let val = Math.floor (Math.random ()*(1-0+1)-0)
    if (val === 0) {
        return 'Croce';
    }else if (val === 1){
        return 'Testa';
    }
}

window.addEventListener ('load', function giocoDellaMoneta() {
    let lanciUtente = Number(prompt (`Quante volte vuoi lanciare la moneta?`))
    let vinciteUtente = 0;
    let vinciteBot = 0;
    for (i=0; i < lanciUtente; i++) {
        let sceltaUtente = prompt (`Testa o croce?`);
        let risultatoLancio = lanciaLaMoneta();
        if (risultatoLancio === sceltaUtente) {
            vinciteUtente +=1;
        }else {
            vinciteBot +=1;
        }
    }
    let risultato = '';
    if (vinciteUtente > vinciteBot) {
        risultato = 'Hai vinto!';
    }else if (vinciteBot > vinciteUtente) {
        risultato = 'Hai perso!'
    }else if (vinciteUtente === vinciteBot){
        risultato = 'Avete pareggiato.'
    }
    
    let p = document.getElementById ('risultato')
    p.innerText = `Il risultato della partita è ${risultato}`
})