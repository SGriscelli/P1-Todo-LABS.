// ================ ECOUTE DU FORMULAIRE:

// Etape 1: Déclaration des éléments HTML à écouter
let form = document.getElementById('taskForm');
let textInput = document.getElementById('textInput');
let deadlineInput = document.getElementById('deadlineInput');
let priorityInput = document.getElementById('priorityInput');
let statutInput = document.getElementById('statutInput');
let taskListInput = document.getElementById('taskOrListInput');
let taskContainer = document.getElementById('cardContainer');
let totalKPI = document.getElementById('totalKPI');
let pendingKPI = document.getElementById('totalPending');
let todoKPI = document.getElementById('totalTodo'); // Pour afficher le nombre total de tâches
let allData = []; // Tableau pour stocker les tâches
let pendingData = []; // Tableau pour stocker les en-cours
let todoData = []; // Tableau pour stocker les taches A faire

// Fonction pour mettre à jour le compteur de tâches total
function updateTaskCount() {
  totalKPI.textContent = allData.length; // Mise à jour du nombre de tâches
}

// Fonction pour mettre à jour le compteur de tâches en-cours (statut "en-cours")
function updatePendingCountIncludes() {
  // Filtrer les tâches qui ont un statut "en-cours"
  pendingData = allData.filter(task => task.statut.toLowerCase() === 'en-cours');
  // Mettre à jour l'élément HTML avec le nombre de tâches "en-cours"
  pendingKPI.textContent = pendingData.length;
}

// Fonction pour mettre à jour le compteur de tâches à faire (statut "A faire")
function updateTodoCount() {
  todoData = allData.filter(task => task.statut.toLowerCase() === 'a faire');
  todoKPI.textContent = todoData.length;
}

// Mettre à jour tous les compteurs (total, en-cours, à faire)
function updateAllCounters() {
  updateTaskCount(); // Mise à jour du compteur total
  updatePendingCountIncludes(); // Mise à jour du compteur "en-cours"
  updateTodoCount(); // Mise à jour du compteur "A faire"
}

// Etape 2: Ecouter l'événement de soumission du formulaire
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Récupérer les valeurs du formulaire
  const name = textInput.value;
  const deadline = deadlineInput.value;
  const priority = priorityInput.value;
  const statut = statutInput.value;
  const taskOrList = taskListInput.value;

  // Créer un nouvel objet de tâche
  const newTaskForm = {
    name: name,
    deadline: deadline,
    priority: priority,
    statut: statut,
    taskOrList: taskOrList,
  };

  allData.push(newTaskForm); // Ajouter la tâche à la liste globale

  // Création de l'élément de tâche dans le DOM
  const taskElement = document.createElement('div');
  taskElement.classList.add('task');

  // HTML de la tâche affichée
  taskElement.innerHTML = `
    <div class="cardContainer">
      <h3 class="task-name">${name}</h3>
      <div>
        <p class="task-priority">Catégorie: ${priority}</p>
        <p class="task-deadline">Deadline: ${deadline}</p>
      </div>
      <p class="task-status">Statut: ${statut}</p> <!-- Classe pour le statut -->
      <p>Type: ${taskOrList}</p>
    </div>
  `;

  // Création des boutons (Valider, Modifier, Supprimer, Enregistrer)
  const checkButton = document.createElement('button');
  const modificateButton = document.createElement('button');
  const deleteButton = document.createElement('button');
  const saveButton = document.createElement('button');

  checkButton.classList.add('checkButton');
  modificateButton.classList.add('modificateButton');
  deleteButton.classList.add('deleteButton');
  saveButton.classList.add('saveButton'); // Ajouter la classe Enregistrer

  checkButton.innerHTML = 'Valider';
  modificateButton.innerHTML = 'Modifier';
  deleteButton.innerHTML = 'Supprimer';
  saveButton.innerHTML = 'Enregistrer'; // Texte du bouton Enregistrer

  // Ajouter les boutons à l'élément de tâche
  taskElement.appendChild(checkButton);
  taskElement.appendChild(modificateButton);
  taskElement.appendChild(deleteButton);
  taskElement.appendChild(saveButton); // Ajouter le bouton Enregistrer

  // Insérer la tâche dans le conteneur
  taskContainer.appendChild(taskElement);

  // Réinitialisation du formulaire
  textInput.value = '';
  
  // Mise à jour des compteurs après l'ajout de la tâche
  updateAllCounters();

  // Événement pour changer le statut de la tâche à "fait"
  checkButton.addEventListener('click', function() {
    newTaskForm.statut = "fait"; // Mise à jour du statut dans l'objet
    const statusElement = taskElement.querySelector('.task-status');
    statusElement.textContent = "Statut: fait ✅"; // Mise à jour dans le DOM

    const taskIndex = allData.indexOf(newTaskForm); // Trouver l'index dans allData
    if (taskIndex !== -1) {
      allData[taskIndex] = newTaskForm; // Mettre à jour l'objet dans allData
    }

    // Mise à jour des compteurs après modification du statut
    updateAllCounters();
  });

  // Événement pour supprimer la tâche
  deleteButton.addEventListener('click', function() {
    taskContainer.removeChild(taskElement); // Supprimer l'élément du DOM

    // Supprimer la tâche de allData
    const taskIndex = allData.indexOf(newTaskForm);
    if (taskIndex !== -1) {
      allData.splice(taskIndex, 1); // Retirer l'objet du tableau
    }

    // Mettre à jour les compteurs après la suppression
    updateAllCounters();
  });

  // Événement pour passer en mode édition (modification)
  modificateButton.addEventListener('click', function() {
    // Sélectionner les éléments de la tâche et les remplacer par des champs modifiables
    const nameElement = taskElement.querySelector('.task-name');
    const priorityElement = taskElement.querySelector('.task-priority');
    const deadlineElement = taskElement.querySelector('.task-deadline');
    const statusElement = taskElement.querySelector('.task-status');

    // Remplacer les éléments par des champs de saisie pour l'édition
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
      Statut: 
      <select class="edit-statut">
        <option value="A faire" ${newTaskForm.statut === "A faire" ? 'selected' : ''}>A faire</option>
        <option value="En-cours" ${newTaskForm.statut === "En-cours" ? 'selected' : ''}>En-cours</option>
        <option value="Fait" ${newTaskForm.statut === "Fait" ? 'selected' : ''}>Fait</option>
      </select>
    `;

    // Afficher le bouton "Enregistrer" en mode édition
    saveButton.style.display = 'inline-block';
  });

  // Événement pour enregistrer les modifications
  saveButton.addEventListener('click', function() {
    // Récupérer les nouvelles valeurs des champs de saisie
    const editedName = taskElement.querySelector('.edit-name').value;
    const editedPriority = taskElement.querySelector('.edit-priority').value;
    const editedDeadline = taskElement.querySelector('.edit-deadline').value;
    const editedStatut = taskElement.querySelector('.edit-statut').value; // Correctement récupéré

    // Mettre à jour l'objet newTaskForm avec les nouvelles valeurs
    newTaskForm.name = editedName;
    newTaskForm.priority = editedPriority;
    newTaskForm.deadline = editedDeadline;
    newTaskForm.statut = editedStatut; // Mettre à jour le statut

    // Mettre à jour l'affichage HTML avec les nouvelles valeurs
    taskElement.querySelector('.task-name').textContent = editedName;
    taskElement.querySelector('.task-priority').textContent = `Catégorie: ${editedPriority}`;
    taskElement.querySelector('.task-deadline').textContent = `Deadline: ${editedDeadline}`;
    taskElement.querySelector('.task-status').textContent = `Statut: ${editedStatut}`;

    // Masquer le bouton "Enregistrer"
    saveButton.style.display = 'none';

    // Mise à jour des compteurs après modification
    updateAllCounters();
  });
});

// Écouter les changements de tri dans le select
const sortSelect = document.querySelector('.sort'); // Sélectionner l'élément <select>

sortSelect.addEventListener('change', function(event) {
  const selectedCategory = event.target.value;
  filterTasks(selectedCategory); // Appeler la fonction pour filtrer selon la catégorie choisie
});

// Fonction pour filtrer les tâches en fonction de la catégorie
function filterTasks(category) {
  // Vider le conteneur des tâches avant d'afficher les tâches filtrées
  taskContainer.innerHTML = '';

  // Définir le filtre en fonction de la catégorie choisie
  let filteredTasks = [];

  if (category === 'all') {
    filteredTasks = allData; // Afficher toutes les tâches
  } else if (category === 'done') {
    filteredTasks = allData.filter(task => task.statut.toLowerCase() === 'fait');
  } else if (category === 'todo') {
    filteredTasks = allData.filter(task => task.statut.toLowerCase() === 'a faire');
  } else if (category === 'prioritaire') {
    filteredTasks = allData.filter(task => task.priority.toLowerCase() === 'haute');
  } else if (category === 'important') {
    filteredTasks = allData.filter(task => task.priority.toLowerCase() === 'moyenne');
  } else if (category === 'faible') {
    filteredTasks = allData.filter(task => task.priority.toLowerCase() === 'faible');
  }

  // Réafficher les tâches filtrées
  filteredTasks.forEach(task => {
    displayTask(task); // Fonction pour afficher une tâche
  });
}

// Fonction pour afficher une tâche dans le DOM
function displayTask(task) {
  const taskElement = document.createElement('div');
  taskElement.classList.add('task');

  // HTML de la tâche affichée
  taskElement.innerHTML = `
    <div class="cardContainer">
      <h3 class="task-name">${task.name}</h3>
      <div>
        <p class="task-priority">Catégorie: ${task.priority}</p>
        <p class="task-deadline">Deadline: ${task.deadline}</p>
      </div>
      <p class="task-status">Statut: ${task.statut}</p> <!-- Classe pour le statut -->
      <p>Type: ${task.taskOrList}</p>
    </div>
  `;

  // Ajouter la tâche filtrée dans le conteneur
  taskContainer.appendChild(taskElement);
}


// =======================> AFFICHER / CACHER LA SECTION CONTACT US

// Etape 1: Afficher la section Contact Us en cliquant sur le bouton
const contactUsButton = document.querySelector('#contactUsButton');
const contactUsArea = document.querySelector('.contactUsArea');

contactUsButton.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (contactUsArea.style.display === 'block') {
    contactUsArea.style.display = 'none';
  } else {
    contactUsArea.style.display = 'block';
  }
});

