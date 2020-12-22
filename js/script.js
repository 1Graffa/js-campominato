// 1) Il computer deve generare 16 numeri casuali tra 1 e 100.
// 2) I numeri non possono essere duplicati
// 3) In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// 4) L’utente non può inserire più volte lo stesso numero.
// 5) Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// 6) La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// 7) Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// Creo l' Array dove saranno contenuti i 16 numeri casuali da 1 a 100
numeriCasuali = [];
// Uso while per generare numeri finchè non saranno composte 16 cifre casuali senza ripetizioni
while (numeriCasuali.lenght < 16){
  // creo variabile numero che sarà composta da tutti i valori da dell'intervallo da 1 a 100
  var numero = generaNumero(1,100);
  // ora con IF bisogna dire che compilando i 16 numeri non ci debbano essere ripetizioni quindi usiamo INCLUDES per segnalare che non vogliamo ripetizioni grazie ad un valore booleano:
  // "se esce un numero che non è già presente pushalo"
  if (numeriCasuali.includes(numero) == false){
    numeriCasuali.push(numero);
  }
}
console.log(numeriCasuali)
// Funzioni

// genera numero random con valori min e max compresi
function generaNumero(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
