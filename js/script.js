
let name = prompt ("Qual'è il tuo Nome?");

let cognome = prompt ("Qual'è il tuo Cognome?");

let colore_preferito = prompt ("Qual'è il tuo colore preferito?");

let user_info = name + cognome + colore_preferito + "23";

document.getElementById(`user_info_d`).innerHTML = user_info;
