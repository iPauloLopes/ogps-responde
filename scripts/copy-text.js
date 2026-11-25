function onSubmit() {
    document.querySelectorAll('#form').forEach(form => {
        form.addEventListener('submit', copyToClipboard);
    });
}

function copyToClipboard(event) {
    event.preventDefault();

    const text = document.querySelector('#text');
    const newText = document.querySelector('#newText');

    const formElement = event.target;
    const formData = Object.fromEntries(new FormData(formElement));

    const editedText = text.textContent.replace(/#(\w+)/g, (match, key) => formData[key] || match);

    navigator.clipboard.writeText(editedText);

    text.style.display = 'none';
    newText.textContent = editedText;
    newText.style.display = 'flex';

    showNotification();

    event.target.reset();
}

window.initCopyText = onSubmit;

onSubmit();