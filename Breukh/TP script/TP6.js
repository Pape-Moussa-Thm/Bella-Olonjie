// Date cible (1er janvier 2024 à 00:00:00 heure locale)
var targetDate = new Date('2024-01-01T00:00:00');

// Fonction pour mettre à jour l'affichage du compte à rebours
function updateCountdown() {
  var currentDate = new Date();
  var timeRemaining = targetDate.getTime() - currentDate.getTime();

  // Calcul du nombre de jours, heures, minutes et secondes restants
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Affichage des résultats
  document.getElementById('countdown').innerHTML = days + 'j ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
}

// Mise à jour du compte à rebours toutes les secondes
setInterval(updateCountdown, 1000);