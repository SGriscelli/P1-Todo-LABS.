// Déclaration des variables nécessaires

let form = document.getElementById('taskForm');
let textInput = document.getElementById('textInput');
let deadlineInput = document.getElementById(`deadlineInput`);
let priorityInput = document.getElementById(`priorityInput`);
let statutInput = document.getElementById(`statutInput`);
let taskListInput = document.getElementById(`taskOrListInput`);
let taskContainer = document.getElementById(`cardContainer`);


form.addEventListener('submit', function(event) {
    event.preventDefault();

});