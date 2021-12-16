console.log("hello world");


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
    <li>${participantName}</li>         
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