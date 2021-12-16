

// je crée une fonction d 'ajouter d'un participant a la liste//
function addParticipant(event)
{
    // j'empeche le fonctionnement  par defaut du bouton pour eviter de recharger la page//
    event.preventDefault();
    
    // je recupere l'ajout du participant//
    const nameInputElement = document.getElementById("nameInput");
    // alternative pour recuperer l'input a partir de son name//
    // = constNameImputElement = document.queryselector("input(name =nameInput")");//
    
    // je cree mon prenom
    const participantName = nameInputElement.value.trim();
    
    // si le nom est vide , j 'affiche un message d'erreur//
    if(participantName ==="")
    {
        alert("le nom est obligatoire");
        return;
    }
    
    
    /*element ou elt veut dire je recupere a partir de l HTML*/
    // je crée un element li qui contient mon prenom//
    const participantElement = ` 
    <li class = participant>${participantName}</li>         
    `;
    
    // je recupere l element ul  d qui contient  la liste des participants//
    const participantListElement = document.getElementById("participantList")
    // j'ajoute mon a l'element ul //
    participantListElement.innerHTML = participantListElement.innerHTML + participantElement;
    
    // je vide l'input nameInput//
    nameInputElement.value = "";
}


// je recupere le formulaire d'ajout d'un nom //
const addNameFormElement = document.getElementById("addNameForm");
// quand je soumet le formulaire , je veux que la fonction  addParticipant soit appelée//
addNameFormElement.addEventListener("submit",addParticipant);

// la liste des participants//
const participants = ["Gregory", "Julien" , "Nicolas", "Pierre", "Paul" ,"Jacques" , "Sofian"]
// nombre de groupe//
const numberGroup = 3
// fonction de generation des groupes //


function generateGroups(participants , numberGroup) {
// je veux trier un tableau de nom aléatoirement //


const sorted = participants
// la fonction Map prend un tableau en entrée
// apllique une fonction sur chaque element du tableau
// et retourne un nouveau tableau //
// elle renvoie un nombre aleatoire entre 0 et 1 //
.map((participant) => ({ name:participant, sort: Math.random() }))
// la fonction Sort trie //
.sort((a, b) => a.sort - b.sort)

.map((participant) => participant.name)

// je veux génerer des groupes de nom //

const groupsArr = [];
for (let i = 0; i < numberGroup; i++){
    groupsArr.push([]);
}

var groupsArrIndex = 0;
while (sorted.length > 0){
    // je prends le dernier element du tableau sorted//
    // et je l ajoute dans le groupe correspondant a groupsArrIndex//
    groupsArr[groupsArrIndex].push(sorted.pop());
    // j ajoute 1 a groupArrIndex//
    groupsArrIndex++;
    // si groupArrIndex est superieur a la taille du tableau groupArr //
    // je reinitialise groupArrIndex a 0//
    
    if(groupsArrIndex  >= groupsArr.length){
        groupsArrIndex = 0
    }
}
// je recupere l élément HTML qui contiendra la liste des participant//
const groupListElement = document.getElementById("groupList");

// je vide le contenu de la liste//
groupListElement.innerHTML = "";

//pour chaque groupe je crée une carte qui contiendra  la liste des participants du groupe
for(let groupIndex = 0 ; groupIndex < groupsArr.length;groupIndex++) {
    let groupElement = `
    <div class="card bg-light mb-3" style="max-width: 20rem;">
    <div class="card-header">groupe ${groupIndex + 1}</div>
    <div class="card-body">
    <ul>`
    ;
    // pour chaque groupe j'affiche la liste de participant//
    for( let participantIndex = 0; participantIndex < groupsArr[groupIndex].length;participantIndex++)
    {
        groupElement += `<li>${groupsArr[groupIndex][participantIndex]}</li>`;
    }
    groupElement += `
    
    </ul>
    </div>
    </div>
    `;
    groupListElement.innerHTML += groupElement;
}
}




const generateForm = document.getElementById("generateGroup");
generateForm.addEventListener("submit",function(event){
    event.preventDefault();
    //je recupere la valeur de l input numberGroups  //
    //je la convertie en integer//
    const numberGroups = parseInt(document.getElementById("groupNumber").value);

    //on veut recuperer la liste des particiants//
    const participant = [];
    const participantElement = document.querySelectorAll(".participant");
   // dans chaque li, je piush le texte dans tableau participant//
    participantElement.forEach(element => participant.push(element.textContent));

    generateGroups(participant, numberGroups);


    // si numberGroups n'est pas un nombre j'affiche un message d'erreur//
    if( Number.isNaN(numberGroups)){
        alert("le nombre de groupes doit etre un nombre");
        return;
    }

    // si numberGroups est inferieur  a 1 j'affiche un message d'erreur//
    if(numberGroup < 1 ){
        alert("le nombre de groupe doit etre superieur a 1");
        return;
    }
    // si numberGroups est inferieur a la taimlle du tableau participant j affihe un message d'erreur//
    if(numberGroup > participant.length){
        alert("le nomnbre de groupes doit etre inferieur ou egal au nomnbre de participant");
        return;
    }
})




