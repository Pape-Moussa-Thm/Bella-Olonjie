// Récupération des éléments HTML
const leftDiv = document.getElementById('leftDiv');
const rightDiv = document.getElementById('rightDiv');
const moveRightButton = document.getElementById('moveRightButton');
const moveLeftButton = document.getElementById('moveLeftButton');

// Tableau de données
const data = ['Mon Premier', 'Deuxième', 'Troisième', 'Quatrième'];

// Génération des éléments dans le div gauche
data.forEach((item) => {
  const p = document.createElement('p');
  p.textContent = item;
  leftDiv.appendChild(p);
});

// Gestion de la sélection au survol
leftDiv.addEventListener('mouseover', (event) => {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
  }
  if (event.target.tagName === 'P') {
    event.target.classList.add('selected');
  }
});

// Gestion du déplacement d'un élément vers la droite
moveRightButton.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected) {
    rightDiv.appendChild(selected);
    selected.classList.remove('selected');
    moveRightButton.disabled = true;
    moveLeftButton.disabled = false;
    showNotification('green', 'Élément déplacé vers la droite');
  }
});

// Gestion du déplacement d'un élément vers la gauche
moveLeftButton.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected) {
    leftDiv.appendChild(selected);
    selected.classList.remove('selected');
    moveLeftButton.disabled = true;
    moveRightButton.disabled = false;
    showNotification('blue', 'Élément déplacé vers la gauche');
  }
});

// Fonction pour afficher une notification colorée pendant 1 seconde
function showNotification(color, message) {
  const notification = document.createElement('div');
  notification.style.backgroundColor = color;
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 1000);
}

// Vérification de la présence d'éléments dans le div gauche pour activer/désactiver les boutons
if (leftDiv.children.length > 0) {
  moveRightButton.disabled = false;
} else {
  moveRightButton.disabled = true;
}

// Vérification de la présence d'éléments dans le div droite pour activer/désactiver les boutons
if (rightDiv.children.length > 0) {
  moveLeftButton.disabled = false;
} else {
  moveLeftButton.disabled = true;
}