function showNotification() {
    const notificationToast = document.createElement('h3')
    notificationToast.classList.add('notification-toast')
    notificationToast.textContent = 'Texto copiado!'
    document.body.appendChild(notificationToast)
    setTimeout(() => notificationToast.remove(), 2000);
}

window.initNotificationToast = showNotification;