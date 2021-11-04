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
];

// Creo il ciclo per stampare i membri del team
// Ref
const teamCont = document.querySelector('.team-container');

cardGenerator(teamList, teamCont);

// Prendo riferimento bottone sul DOM
const btn = document.getElementById('addMemberButton');

btn.addEventListener('click', function() {

    let nameUser = document.getElementById('name');
    let roleUser = document.getElementById('role');
    let imgUser = document.getElementById('image');
    
    if ((nameUser.value.trim() == '') || (roleUser.value.trim() == '') || (imgUser.value.trim() == '')) {
        alert('Non può lasciare campi vuoti')
    } else {
        teamCont.innerHTML = '';
                teamList.push ({
                    img: imgUser.value.trim(),
                    name: nameUser.value.trim(),
                    role: roleUser.value.trim(),
                })
                
                cardGenerator (teamList, teamCont)
                
                nameUser.value = '';
                roleUser.value = '';
                imgUser.value = '';
    }
})





/**
 * Function Section
 */

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
                            };
                        };