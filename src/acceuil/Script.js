const buttonTask = document.querySelector(`#addTask`);
const ulTask = document.querySelector(`#taskArea`);

buttonTask.addEventListener('click', () => {
    const text = document.querySelector('#textTask').value;
    const li = document.createElement('li');
    li.innerHTML = text;
    ulTask.append(li);
})


const buttonList = document.querySelector(`#addList`);
const ulList = document.querySelector(`#listArea`);

buttonList.addEventListener('click', () => {
    const text = document.querySelector('#textList').value;
    const li = document.createElement('li');
    li.innerHTML = text;
    ulList.append(li);
})

const taskTemplate = {
  title :null,
  statut: null,
  categorie: null,
  deadline: null,
}

const listTemplate = {
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
