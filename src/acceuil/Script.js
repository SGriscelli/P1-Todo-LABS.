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

const contactArea = document.querySelector(`.contactUs`);
const contactButton = document.querySelector(`.contactusfooter`);

contactButton.addEventListener('click', () => {
    
    if (contactArea.style.display === 'none') {
        contactArea.style.display = 'block';
      } else {
        contactArea.style.display = 'none';
      }
    })