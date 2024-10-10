function createCard() {

const newCard = `<artcilce class=".cards">
<h3>Tache 1</h3>
    <div class="informationsTask">
        <a>deadline:
            <input type ="date">
        </a>
        <a>statut:
            <select name="sort" class="sort">
                <option value="all">All</option>
                <option value="done">Done</option>
                <option value="todo">To-do</option>
            </select>
        </a>
        <a>categorie: 
            <select name="sort" class="sort">
                <option value="all">Prioritaire</option>
                <option value="done">Important</option>
                <option value="todo">Faible</option>
            </select>
        </a>
    </div>
    <div class="buttonSection">
        <a><button class="editButton">Edit</button></a>
        <a><button class="deleteButton">Delete</button></a>
        <a><button class="shareButton">Share</button></a>
    </div>
</article>`;
    return newCard
}

export defaut createCard;
