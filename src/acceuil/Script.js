
// ================ ECOUTE DU FORMULAIRE:

// Etape 1: Je déclare les fonctions des élements que je veux écouter:

let form = document.getElementById('taskForm');
let textInput = document.getElementById('textInput');
let deadlineInput = document.getElementById(`deadlineInput`);
let priorityInput = document.getElementById(`priorityInput`);
let statutInput = document.getElementById(`statutInput`);
let taskListInput = document.getElementById(`taskOrListInput`);
let taskContainer = document.getElementById(`cardContainer`);
let taskData = [];

// Etape 2: J'écoute les élements:

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // je récupérer les valeurs des champes du formulaire:
    const name =  textInput.value;
    const deadline = deadlineInput.value;
    const priority = priorityInput.value;
    const statut = statutInput.value;
    const taskOrList = taskListInput.value;

  // je crée mon element à insérer lorsque je crée une tâche:
    const taskElement = document.createElement('div');
    taskData.push(text);
    taskElement.classList.add('task');
    taskElement.innerHTML = `
    <div class="cardContainer">
      <h3>${name}</h3>
    <div>
      <p>Catégorie: ${priority}</p>
      <p>Deadline: ${deadline}</p>
    </div>
      <p>Statut: ${statut}</p>
      <p>Catégorie: ${taskOrList}</p>
    </div>
    `;

    // j'insère mon élément dans le conteneur:
  taskContainer.appendChild(taskElement);

    // je reset le formulaire:
  form.reset();

});

// // =======================> CREATION DE LA FUNCTION : CREATION D'OBJETS AVEC PLUSIEURS VARIABLES

// // Etape 1: Définir son besoin: je veux que pour chaque nouvelle entrée de tache, un object se crée:




// =======================> AFFICHER / CACHER LA SECTION CONTACT US

// Etape 1: J'affiche ma section Contact Us en cliquant sur le bouton Contact Us//
const contactUsButton = document.querySelector(`#contactUsButton`);
const contactUsArea = document.querySelector(`.contactUsArea`);

contactUsButton.addEventListener('click', (event) => {
 event.preventDefault();
 event.stopPropagation();

 if (contactUsArea.style.display === "block") {
   contactUsArea.style.display = "none";
 } else  {
   contactUsArea.style.display = "block";
 }
});