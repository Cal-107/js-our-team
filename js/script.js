// Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
// Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.

console.log('JS is ok');

// 1 - Creazione dell'array con gli oggetti
// 2 - Stampa delle immagini
// 3 - Inserire input per aggiungere

// Creazione del'array

const teamList = [
    {
        img: 'img/wayne-barnett-founder-ceo.jpg',
        name: 'Wayne Barret',
        role: 'Founder & CEO',
    },
    {
        img: 'img/wayne-barnett-founder-ceo.jpg',
        name: 'Angela Caroll',
        role: 'Chief Editor',
    },
    {
        img: 'img/wayne-barnett-founder-ceo.jpg',
        name: 'Walter Gordon',
        role: 'Office Manager',
    },
    {
        img: 'img/wayne-barnett-founder-ceo.jpg',
        name: 'Angela Lopez',
        role: 'Social Media Manager',
    },
    {
        img: 'img/wayne-barnett-founder-ceo.jpg',
        name: 'Scott Estrada',
        role: 'Developer'
    },
    {
        img: 'img/wayne-barnett-founder-ceo.jpg',
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
    },
]
console.log(teamList);
console.table(teamList);

// Creo il ciclo per stampare i membri del team

// Mi collego all'elemento alla classe dove far uscire la stampa sul DOM
const teamCont = document.querySelector('team-container');

// Ciclo for
for (let i = 0; i < teamList.length; i++) {
    console.log(teamList);
    // Prendo gli oggetti dell'array e faccio una variabile
    const teamCard = teamList[i];
    console.log('Oggetti array', teamCard);
}