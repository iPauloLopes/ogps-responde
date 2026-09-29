const text = document.querySelector('#text').textContent
const form = document.querySelector('#form')

form.addEventListener ('submit', callFunctions)

//Prevent page reload after submit
function cancelPageReload (event) {
    event.preventDefault()
}
//Convert inputs into an object
function inputToObject (event) {
    const formElement = event.target
    const formData = Object.fromEntries(new FormData(formElement))
    return formData
}

//Reset all form fields
function resetFormFields (event) {
    event.target.reset()
}

//Call other functions in the right order
function callFunctions (event) {
    cancelPageReload(event)
    const convertedObject = inputToObject(event)

    console.log(convertedObject)//Only here for debugging purposes and should be removed

    resetFormFields (event)
}