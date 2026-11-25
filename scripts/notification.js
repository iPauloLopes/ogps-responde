function showNotification() {
    document.querySelector('.notification-toast').style.display = 'flex'
    setTimeout(() => document.querySelector('.notification-toast').style.display = 'none', 2000)
}

window.initNotificationToast = showNotification;