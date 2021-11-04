// Ricreiamo le card del nostro team aggiungendo al layout di base fornito (allegato sotto) il nostro JavaScript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
// Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice.

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
        img: 'img/angela-caroll-chief-editor.jpg',
        name: 'Angela Caroll',
        role: 'Chief Editor',
    },
    {
        img: 'img/walter-gordon-office-manager.jpg',
        name: 'Walter Gordon',
        role: 'Office Manager',
    },
    {
        img: 'img/angela-lopez-social-media-manager.jpg',
        name: 'Angela Lopez',
        role: 'Social Media Manager',
    },
    {
        img: 'img/scott-estrada-developer.jpg',
        name: 'Scott Estrada',
        role: 'Developer'
    },
    {
        img: 'img/barbara-ramos-graphic-designer.jpg',
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
    },
]

// Creo il ciclo per stampare i membri del team
// 1 - Mi collego all'elemento alla classe dove far uscire la stampa sul DOM
// Ref
const teamCont = document.querySelector('.team-container');

// 2 - Alternativa con funzione
cardGenerator(teamList, teamCont);

// 3 - Ciclo for per iterare su gli oggetti in array
function cardGenerator (card, container) {
    for (let i = 0; i < card.length; i++) {
        const teamCard = card[i];
    
        container.innerHTML += `<div class="team-card">
                                  <div class="card-image">
                                      <img
                                      src="${teamCard.img}"
                                      alt="${teamCard.name}"
                                      />
                                  </div>
                                  <div class="card-text">
                                      <h3>${teamCard.name}</h3>
                                      <p>${teamCard.role}</p>
                                  </div>
                                </div>`;
                            }
                        }


// Crea evento aggiunzione card su form

// 1 - Aggiungo collegamento al bottone
// 2 - All'inserimento dei dati inseriti dall'utente in ogni sezione aggiungo una nuova card nell'array con gli oggetti
// 3 - Mostro la nuova carta nel DOM

// Prendo riferimento bottone sul DOM
const btn = document.getElementById('addMemberButton');

btn.addEventListener('click', function() {
    teamCont.innerHTML = '';
    // Collego ref dal DOM 
    let nameUser = document.getElementById('name');
    let roleUser = document.getElementById('role');
    let imgUser = document.getElementById('image');
    
    //Aggiungo nuovo oggetto  
    teamList.push ({
        img: imgUser.value,
        name: nameUser.value,
        role: roleUser.value,
    })
    
    // Ristampo nuovo array object con push elemento richiamando la funzione
    cardGenerator (teamList, teamCont)
    
    nameUser.value = '';
    roleUser.value = '';
    imgUser.value = '';
})