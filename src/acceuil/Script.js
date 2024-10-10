// J'écoute le buttonTask pour créer une tache dans ma taskArea//
const buttonTask = document.querySelector(`#addTask`);
const ulTask = document.querySelector(`#taskArea`);

buttonTask.addEventListener('click', () => {
    const text = document.querySelector('#textTask').value;
    const li = document.createElement('li');
    taskData.push(text);
    console.log(taskData);
    li.innerHTML = text;
    ulTask.append(li);
})

// J'écoute le buttonList pour créer une tache dans ma listArea//
const buttonList = document.querySelector(`#addList`);
const ulList = document.querySelector(`#listArea`);

buttonList.addEventListener('click', () => {
    const text = document.querySelector('#textList').value;
    const li = document.createElement('li');
    li.innerHTML = text;
    ulList.append(li);
});


// CREATION DES CONTAINERS DE TACHES //
// importer la function création d'une carte
import createCard from "./cardCreator.js"
// Je récupère le noeud dans mon DOM
const cards = document.querySelector('.cards');
// J'intègre la nouvelle carte dans mon DOM
cards.innerHTML = createCard();
console.log("test" , cards);


// FOOTER SECTION //
// J'affiche ma section Contact Us en cliquant sur le bouton Contact Us//
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