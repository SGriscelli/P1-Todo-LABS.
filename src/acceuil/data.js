CREATION DES TABLEAUX DE DONNEES //

const taskData = []; // tableau contenant l'ensemble des tâches //
const listLibrary = []; // tableau contenant l'ensemble des listes //

const task = { // object TACHES vide //
  title : null,
  statut: null,
  categorie: null,
  deadline: null,
}

const list = { // object LISTES vide //
  title :null,
  statut: null,
  categorie: null,
  deadline: null,
}

const qualifications = { // object QUALIFICATIONS vide //
  statut: ['null','done','to-do'],
  categorie: ['priority','low','high'],
  deadline: null,
}