const text = document.querySelector('#text').textContent
const form = document.querySelector('#form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const formElement = event.target
    const formData = Object.fromEntries(new FormData(formElement))

    event.target.reset()

    console.log(formData)
})