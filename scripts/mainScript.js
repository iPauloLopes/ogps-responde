const text = document.querySelector('#text')
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

//Replace elements with # in the base text
function replaceTags (text, convertedObject) {
    const replacedTags = text.textContent.replace(/#(\w+)/g, (match, key) => convertedObject[key] || match)
    return replacedTags
}

//Copy the edited text to clipboard
function copyToClipboard (editedText) {
    navigator.clipboard.writeText(editedText)
}

//Update page text
function updateText (editedText) {
    text.textContent = editedText
}

//Reset all form fields
function resetFormFields (event) {
    event.target.reset()
}

//Call other functions in the right order
function callFunctions (event) {
    cancelPageReload(event)
    const convertedObject = inputToObject(event)
    const editedText = replaceTags(text, convertedObject)
    copyToClipboard (editedText)
    updateText (editedText)
    resetFormFields (event)
}