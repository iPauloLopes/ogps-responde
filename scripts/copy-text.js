function onSubmit() {
    document.querySelectorAll('#form').forEach(form => {
        form.addEventListener('submit', copyToClipboard);
    });
}

function copyToClipboard(event) {
    event.preventDefault()

    const text = document.querySelector('#text')
    const newText = document.querySelector('#newText')

    const formElement = event.target
    const formData = Object.fromEntries(new FormData(formElement))

    const editedText = text.textContent.replace(/#(\w+)/g, (match, key) => formData[key] || match)

    navigator.clipboard.writeText(editedText)

    text.style.display = 'none'
    newText.textContent = editedText
    newText.style.display = 'flex'

    event.target.reset()
}

function showNotification () {
    document.querySelector('.notificationBanner').style.display = 'flex'
    setTimeout(() => document.querySelector('.notificationBanner').style.display = 'none', 2000)
}

window.initCopyText = onSubmit;

onSubmit();