// Chiedi all'utente il suo nome
let name = prompt("Qual'è il tuo Nome?");

// Chiedi all'utente il suo congnome
let cognome = prompt("Qual'è il tuo Cognome?");

// Chiedi all'utente il suo colore preferito
let colore_preferito = prompt("Qual'è il tuo colore preferito?");

// Generazione della variabile
let user_info = name + cognome + colore_preferito + "23";


document.getElementById("user_info_d").innerHTML = user_info;
