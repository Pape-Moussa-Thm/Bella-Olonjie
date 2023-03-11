function showNotification(color) {
    const notificationContainer = document.getElementById("notification-container");
    const notification = document.createElement("li");
    notification.classList.add("notification", `notification-${color}`);
    notification.textContent = `Notification ${color}`;
    notificationContainer.appendChild(notification);
    
    setTimeout(() => {
      notificationContainer.removeChild(notification);
    }, 1000);
  }