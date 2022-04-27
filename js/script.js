/*
esercizio di oggi: **Our Team**
nome repo: **js-our-team**
Viene fornito un layout di base in cui è presente **una card di esempio** inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e **dovrà quindi essere rimossa dall’html**.
Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: **Nome, Ruolo e Foto**.
Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.
BONUS:
Utilizzare gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un **nuovo oggetto**, il quale viene **inserito nell’array iniziale** e viene stampata una nuova card con tutte le informazioni inserite dall’utente.
*/
//creazione array oggetti
const arrTeam = [
    {
        nome : "Wayne Barnett",
        ruolo : "Founder CEO",
        foto : "img/wayne-barnett-founder-ceo.jpg",
    },

    {
        nome : "Angela Carola",
        ruolo : "Chief Editor",
        foto : "img/angela-caroll-chief-editor.jpg",
    },

    {
        nome : "Walter Gordon",
        ruolo : "Office Manager",
        foto : "img/walter-gordon-office-manager.jpg",
    },

    {
        nome : "Angela lopez",
        ruolo : "Social Media Manager",
        foto : "img/angela-lopez-social-media-manager.jpg",
    },

    {
        nome : "Scott Estrada",
        ruolo : "Developer",
        foto : "img/scott-estrada-developer.jpg",
    },

    {
        nome : "Barbara Ramos",
        ruolo : "Graphic Designer",
        foto : "img/barbara-ramos-graphic-designer.jpg",
    },

    
];

console.log(arrTeam);
//creazione ciclo
for(let i in arrTeam){
    const team = arrTeam[i]
    console.log(arrTeam[i]);
    const output=
    `<div class="team-card">
    <div class="card-image">
      <img
        src=${team.foto}
        alt="Wayne Barnett"
      />
    </div>
    <div class="card-text">
      <h3>${team.nome}</h3>
      <p>${team.ruolo}</p>
    </div>
    </div>

    `
    document.querySelector(".team-container").innerHTML += output;
}

/*sezione form */

document.getElementById("addMemberButton").addEventListener("click",form);


function form() {
    const nuovoMembroNome = document.getElementById("name").value;
    const ruoloMembro = document.getElementById("role").value;
    const imgMembro = document.getElementById("image").value;


    const NuovoMembro = {
        nome : nuovoMembroNome,
        ruolo : ruoloMembro,
        foto : imgMembro,

    }

    arrTeam.push(NuovoMembro);

    const output=
    `<div class="team-card">
    <div class="card-image">
      <img
        src=${NuovoMembro.foto}
        alt="Wayne Barnett"
      />
    </div>
    <div class="card-text">
      <h3>${NuovoMembro.nome}</h3>
      <p>${NuovoMembro.ruolo}</p>
    </div>
    </div>

    `
    document.querySelector(".team-container").innerHTML += output;

    

    

    
    
}

   
