// Récupération des éléments HTML
const addNewButton = document.getElementById('add-new');
const container = document.getElementById('container');
const Editdelete = document.getElementsByName('Editdelete');
const addediticon = document.getElementsByName('addediticon');
const adddelete = document.getElementsByName('adddelete');

// Variable pour stocker le nombre de composants créés
// let componentCounter = 0;

// Fonction pour créer un nouveau composant
function createComponent() {
  // Incrémenter le compteur de composants
//   componentCounter++;

  // Créer les éléments HTML
  const component = document.createElement('div');
  const editIcon = document.createElement('i');
  const deleteIcon = document.createElement('i');
  const textarea = document.createElement('textarea');

  // Ajouter les classes CSS aux éléments HTML
  component.className='component';
  editIcon.className='fas fa-edit';
  deleteIcon.className='fas fa-trash';

  // Ajouter les événements aux icônes edit et delete
  editIcon.addEventListener('click', () => {
    if (textarea.disabled) {
      textarea.disabled = false;
    } else {
      textarea.disabled = true;
    }
  });
  deleteIcon.addEventListener('click', () => {
    component.remove();
  });

  // Ajouter les éléments HTML au composant
  component.appendChild(editIcon);
  component.appendChild(deleteIcon);
  component.appendChild(textarea);

  // Ajouter le composant au container
  document.body.appendChild(component);
  
}

// Ajouter l'événement au bouton pour créer un nouveau composant
addNewButton.addEventListener('click', createComponent);