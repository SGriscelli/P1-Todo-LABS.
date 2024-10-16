// ================ ECOUTE DU FORMULAIRE:

// Etape 1: Je déclare les fonctions des éléments que je veux écouter:

let form = document.getElementById(`taskForm`);
let textInput = document.getElementById(`textInput`);
let deadlineInput = document.getElementById(`deadlineInput`);
let priorityInput = document.getElementById(`priorityInput`);
let statutInput = document.getElementById(`statutInput`);
let taskListInput = document.getElementById(`taskOrListInput`);
let taskContainer = document.getElementById(`cardContainer`);
let totalKPI = document.getElementById('totalKPI'); // Pour afficher le nombre total de tâches
let allData = [];

// Fonction pour mettre à jour le compteur de tâches
function updateTaskCount() {
  totalKPI.textContent = allData.length; // Mettre à jour le contenu du span avec le nombre de tâches
}

// Etape 2: J'écoute les éléments:

form.addEventListener('submit', function(event) {
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

  // HTML à afficher (pas encore modifiable)
  taskElement.innerHTML = `
    <div class="cardContainer">
      <h3 class="task-name">${name}</h3>
      <div>
        <p class="task-priority">Catégorie: ${priority}</p>
        <p class="task-deadline">Deadline: ${deadline}</p>
      </div>
      <p class="task-status">Statut: ${statut}</p> <!-- Ajout d'une classe pour le statut -->
      <p>Catégorie: ${taskOrList}</p>
    </div>
  `;

  // Création des boutons
  const checkButton = document.createElement('button');
  const modificateButton = document.createElement('button');
  const deleteButton = document.createElement('button');
  const saveButton = document.createElement('button'); // Bouton Enregistrer pour la modification

  checkButton.classList.add('checkButton');
  modificateButton.classList.add('modificateButton');
  deleteButton.classList.add('deleteButton');
  saveButton.classList.add('saveButton'); // Ajout du bouton Enregistrer

  checkButton.innerHTML = 'Valider';
  modificateButton.innerHTML = 'Modifier';
  deleteButton.innerHTML = 'Supprimer';
  saveButton.innerHTML = 'Enregistrer'; // Texte pour Enregistrer

  // Ajout des boutons à l'élément de tâche
  taskElement.appendChild(checkButton);
  taskElement.appendChild(modificateButton);
  taskElement.appendChild(deleteButton);
  taskElement.appendChild(saveButton); // Ajout du bouton Enregistrer

  // Insertion de l'élément de tâche dans le conteneur
  taskContainer.appendChild(taskElement);

  // Réinitialisation du formulaire
  textInput.value = '';

  // Mettre à jour le nombre total de tâches après l'ajout
  updateTaskCount();

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
  });

  // Ajouter l'événement pour supprimer la tâche spécifique
  deleteButton.addEventListener('click', function() {
    taskContainer.removeChild(taskElement); // Suppression de la tâche elle-même

    // Supprimer la tâche de l'array allData
    const taskIndex = allData.indexOf(newTaskForm);
    if (taskIndex !== -1) {
      allData.splice(taskIndex, 1); // Supprimer l'objet de la liste
    }

    // Mettre à jour le nombre total de tâches après suppression
    updateTaskCount();
  });

  // Ajouter l'événement pour passer en mode édition (modification)
  modificateButton.addEventListener('click', function() {
    // Créer des champs modifiables pour chaque élément (nom, priorité, deadline, etc.)
    const nameElement = taskElement.querySelector('.task-name');
    const priorityElement = taskElement.querySelector('.task-priority');
    const deadlineElement = taskElement.querySelector('.task-deadline');
    const statusElement = taskElement.querySelector('.task-status');

    // Remplacer le texte par des champs de saisie pour l'édition
    nameElement.innerHTML = `<input type="text" value="${newTaskForm.name}" class="edit-name">`;
    priorityElement.innerHTML = `
  Catégorie: 
  <select class="edit-priority">
    <option value="aucune" ${newTaskForm.priority === "aucune" ? 'selected' : ''}>Aucune</option>
    <option value="faible" ${newTaskForm.priority === "faible" ? 'selected' : ''}>Faible</option>
    <option value="haute" ${newTaskForm.priority === "haute" ? 'selected' : ''}>Haute</option>
  </select>
`;
    deadlineElement.innerHTML = `Deadline: <input type="date" value="${newTaskForm.deadline}" class="edit-deadline">`;
    statusElement.innerHTML = `
  Catégorie: 
  <select class="edit-priority">
    <option value="aucune" ${newTaskForm.statut === "aucune" ? 'selected' : ''}>Aucune</option>
    <option value="faible" ${newTaskForm.statut === "faible" ? 'selected' : ''}>Faible</option>
    <option value="haute" ${newTaskForm.statut === "haute" ? 'selected' : ''}>Haute</option>
  </select>
`;

    // Afficher le bouton "Enregistrer" une fois en mode édition
    saveButton.style.display = 'inline-block';
  });

  // Ajouter l'événement pour enregistrer les modifications
  saveButton.addEventListener('click', function() {
    // Récupérer les nouvelles valeurs des champs de saisie
    const editedName = taskElement.querySelector('.edit-name').value;
    const editedPriority = taskElement.querySelector('.edit-priority').value;
    const editedDeadline = taskElement.querySelector('.edit-deadline').value;
    const editedStatut = taskElement.querySelector('.edit-statut').value;

    // Mettre à jour l'objet newTaskForm avec les nouvelles valeurs
    newTaskForm.name = editedName;
    newTaskForm.priority = editedPriority;
    newTaskForm.deadline = editedDeadline;
    newTaskForm.statut = editedStatut;

    // Mettre à jour l'affichage HTML avec les nouvelles valeurs
    taskElement.querySelector('.task-name').textContent = editedName;
    taskElement.querySelector('.task-priority').textContent = `Catégorie: ${editedPriority}`;
    taskElement.querySelector('.task-deadline').textContent = `Deadline: ${editedDeadline}`;
    taskElement.querySelector('.task-status').textContent = `Statut: ${editedStatut}`;

    // Masquer le bouton Enregistrer après modification
    saveButton.style.display = 'none';
  });
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
