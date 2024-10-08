const taskData = [];
const listLibrary = [];

const task = {
  title : null,
  statut: null,
  categorie: null,
  deadline: null,
}

const list = {
  title :null,
  statut: null,
  categorie: null,
  deadline: null,
}

const qualifications = {
  statut: ['null','done','to-do'],
  categorie: ['priority','low','high'],
  deadline: null,
}

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






// J'écoute le buttonTask pour créer une tache dans ma taskArea//
// const buttonTask = document.querySelector(`#addTask`);
// const ulTask = document.querySelector(`#taskArea`);

// buttonTask.addEventListener('click', () => {
//     const text = document.querySelector('#textTask').value;
//     const li = document.createElement('li');
//     li.innerHTML = text;
//     ulTask.append(li);
// })

// J'écoute le buttonList pour créer une tache dans ma listArea//
const buttonList = document.querySelector(`#addList`);
const ulList = document.querySelector(`#listArea`);

buttonList.addEventListener('click', () => {
    const text = document.querySelector('#textList').value;
    const li = document.createElement('li');
    li.innerHTML = text;
    ulList.append(li);
})


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
