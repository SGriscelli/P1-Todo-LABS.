
// =======================> ECOUTE DES BOUTONS ET STOCKAGE DES DONNEES

// Etape 1: J'écoute le buttonTask pour créer une tache dans ma taskArea//
const buttonTask = document.querySelector(`#addTask`);
const ulTask = document.querySelector(`#taskArea`);

// Etape 2: Je crée les variables stockant les nouvelles taches;
const taskData = [];

// buttonTask.addEventListener('click', () => {
//     const text = document.querySelector('#textInput').value;
//     const li = document.createElement('li');
//     taskData.push(text);
//     console.log(taskData);
//     li.innerHTML = text;
//     ulTask.append(li);
// })

// Etape 3: J'écoute le buttonList pour créer une tache dans ma listArea//
const buttonList = document.querySelector(`#addList`);
const ulList = document.querySelector(`#listArea`);

// Etape 4: Je crée les variables stockant les nouvelles listes;
const listData = [];

buttonList.addEventListener('click', () => {
    const text = document.querySelector('#textInput').value;
    const li = document.createElement('li');
    listData.push(text);
    console.log(listData); // J'envoie mes données dans le tableau listData
    li.innerHTML = text;
    ulList.append(li);
});

// =======================> CREATION DE LA FUNCTION : CREATION D'OBJETS AVEC PLUSIEURS VARIABLES

// Etape 1: Définir son besoin: je veux que pour chaque nouvelle entrée de tache, un object se crée:
buttonTask.addEventListener('click', () => {
  const text = document.querySelector('#textInput').value;
  const li = document.createElement('li');
  taskData.push(text);
  console.log(taskData);
  li.innerHTML = text;
  ulTask.append(li);
})




// =======================> INTEGRATION DE LA FONCTION CONTAINERS DE TACHES AU CLIC//

// Etape 1: importer la function création d'une carte
// import createCard from "./cardCreator.js"

// Etape 2: Je récupère le noeud dans mon DOM
// const cards = document.querySelector('.cards');

// Etape 3: J'intègre la nouvelle carte dans mon DOM
// cards.innerHTML = createCard();
// console.log("test" , cards);


// =======================> AFFICHER / CACHER LA SACTION CONTACT US

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