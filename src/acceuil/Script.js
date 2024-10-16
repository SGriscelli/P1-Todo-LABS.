// ================ ECOUTE DU FORMULAIRE:

// Etape 1: Je déclare les fonctions des éléments que je veux écouter:


let form = document.getElementById(`taskForm`);
let textInput = document.getElementById(`textInput`);

let deadlineInput = document.getElementById(`deadlineInput`);
let priorityInput = document.getElementById(`priorityInput`);
let statutInput = document.getElementById(`statutInput`);
let taskListInput = document.getElementById(`taskOrListInput`);
let taskContainer = document.getElementById(`cardContainer`);
let allData = [];

function updateTaskCount() {
  totalKPI.textContent = allData.length; // Mettre à jour le contenu du span avec le nombre de tâches
}

// Etape 2: J'écoute les éléments:

form.addEventListener("submit", function (event) {
	event.preventDefault();


  // Récupération des valeurs du formulaire:
  const name = textInput.value;
  const deadline = deadlineInput.value;
  const priority = priorityInput.value;
  const statut = statutInput.value;
  const taskOrList = taskListInput.value;

  // Création d'un nouvel objet pour la tâche
  const newTaskForm = {
    name: name,
    deadline: deadline,
    priority: priority,
    statut: statut,
    taskOrList: taskOrList,
  };
  allData.push(newTaskForm); // Ajout de la tâche à la liste globale

  // Création de l'élément de tâche dans le DOM
  const taskElement = document.createElement('div');
  taskElement.classList.add('task');

  taskElement.innerHTML = `

    <div class="cardContainer">
      <h3>${name}</h3>
      <div>
        <p>Catégorie: ${priority}</p>
        <p>Deadline: ${deadline}</p>
      </div>
      <p class="task-status">Statut: ${statut}</p> <!-- Ajout d'une classe pour le statut -->
      <p>Catégorie: ${taskOrList}</p>
    </div>
  `;

  // Création des boutons
  const checkButton = document.createElement('button');
  const modificateButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  checkButton.classList.add('checkButton');
  modificateButton.classList.add('modificateButton');
  deleteButton.classList.add('deleteButton');

  checkButton.innerHTML = 'Valider';
  modificateButton.innerHTML = 'Modifier';
  deleteButton.innerHTML = 'Supprimer';


  // Ajout des boutons à l'élément de tâche
  taskElement.appendChild(checkButton);
  taskElement.appendChild(modificateButton);
  taskElement.appendChild(deleteButton);

  // Insertion de l'élément de tâche dans le conteneur
  taskContainer.appendChild(taskElement);

  textInput.value = '';

  // Afficher les données dans la console
  console.log('Nouvelle tâche:', newTaskForm);
  console.log('Toutes les données du tableau:', allData);

  // Ajouter l'événement pour modifier le statut de la tâche
  checkButton.addEventListener('click', function() {
    // Mettre à jour l'objet newTaskForm
    newTaskForm.statut = "fait";

    // Mettre à jour l'affichage du statut dans le DOM
    const statusElement = taskElement.querySelector('.task-status');
    statusElement.textContent = "Statut: fait ✅";

    // Actualiser l'objet dans le tableau de toutes les tâches
    const taskIndex = allData.indexOf(newTaskForm); // Trouver l'index de la tâche
    if (taskIndex !== -1) {
      allData[taskIndex] = newTaskForm; // Mettre à jour l'objet dans le tableau
    }

    // Afficher l'objet mis à jour dans la console
    console.log("Statut mis à jour pour la tâche:", newTaskForm);
    });
  // Ajouter l'événement pour supprimer la tâche spécifique
    deleteButton.addEventListener('click', function() {
      taskContainer.removeChild(taskElement); // Suppression de la tâche elle-même
    });

    updateTaskCount();

});

// =======================> AFFICHER / CACHER LA SECTION CONTACT US

// Etape 1: J'affiche ma section Contact Us en cliquant sur le bouton Contact Us//
const contactUsButton = document.querySelector(`#contactUsButton`);
const contactUsArea = document.querySelector(`.contactUsArea`);

contactUsButton.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (contactUsArea.style.display === 'block') {
    contactUsArea.style.display = 'none';
  } else {
    contactUsArea.style.display = 'block';
  }
});
