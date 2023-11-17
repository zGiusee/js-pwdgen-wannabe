
let name = prompt ("Qual'è il tuo Nome?");
console.log(name);

let cognome = prompt ("Qual'è il tuo Cognome?");
console.log(cognome);

let colore_preferito = prompt ("Qual'è il tuo colore preferito?");
console.log(colore_preferito);

let user_info = name + cognome + colore_preferito + `23`;
console.log(user_info)

document.getElementById(`user_info_d`).innerHTML = user_info;
console.log(`user_info_d`);