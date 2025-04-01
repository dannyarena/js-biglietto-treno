
const chilometri = Number(prompt("Quanti chilometri vuoi percorrere?"));


const eta = Number(prompt("Quanti anni hai?"));


console.log("Chilometri inseriti:", chilometri);
console.log("Età inserita:", eta);

// si converte il testo in valore calcolabile
const km = Number(chilometri);
const etaNumero = Number(eta);


const prezzoBase = km * 0.21;


console.log("Prezzo base del biglietto:", prezzoBase);

let prezzoFinale = prezzoBase; // per adesso è uguale al prezzo base

//condizioni
if (etaNumero < 18) {
  // Sconto del 20% per i minorenni
  prezzoFinale = prezzoBase * 0.8;
} else if (etaNumero > 65) {
  // Sconto del 40% per gli over 65
  prezzoFinale = prezzoBase * 0.6;
}

// Formattiamo il prezzo finale con massimo due decimali
prezzoFinale = prezzoFinale
// Mostriamo il prezzo finale
console.log("Prezzo finale del biglietto: €", prezzoFinale.toFixed(2));
