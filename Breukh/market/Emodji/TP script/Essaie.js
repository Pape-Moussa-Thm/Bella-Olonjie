
const successButton = document.getElementById('success-button');
const dangerButton = document.getElementById('danger-button');
const warningButton = document.getElementById('warning-button');
const infoButton = document.getElementById('info-button');

const notificationsContainer = document.querySelector('.notifications-container');

successButton.addEventListener('click', function() {
    
  showNotification('success', 'Success notification');
});

dangerButton.addEventListener('click', function() {
  showNotification('danger', 'Danger notification');
});

warningButton.addEventListener('click', function() {
  showNotification('warning', 'Warning notification');
});

infoButton.addEventListener('click', function() {
  showNotification('info', 'Info notification');
});

function showNotification(type, message) {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.classList.add(`notification-${type}`);
  notification.textContent = message;
  notificationsContainer.appendChild(notification);

  
  setTimeout(function() {
    notification.remove();
  }, 1000);
}