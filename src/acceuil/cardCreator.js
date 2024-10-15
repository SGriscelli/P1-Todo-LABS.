
// ================ ECOUTE DU FORMULAIRE:
let taskData= [];
// Etape 1: Je déclare les fonctions des élements que je veux écouter:
const addTask = function(event) {
    event.preventDefault();

        let newTask= {
        id : Date.now(),
        textInput : document.getElementById('textInput').value,
        deadlineInput : document.getElementById(`deadlineInput`).value,
        priorityInput : document.getElementById(`priorityInput`).value,
        statutInput : document.getElementById(`statutInput`).value,
        taskListInput : document.getElementById(`taskOrListInput`).value,
        taskContainer : document.getElementById(`cardContainer`).value,
        }
        taskData.push(newTask);
        document.querySelector('form').reset();

    }
    form.addEventListener('submit', function(event) {

    
};


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