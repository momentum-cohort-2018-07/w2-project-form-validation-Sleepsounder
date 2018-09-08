document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

    var inputElements = document.getElementsByTagName('input')

    for (var idx = 0;idx < inputElements.length; idx++) {
        if (inputElements[idx].value.trim() === '') {
            inputElements[idx].parentElement.classList.add('input-invalid')
            // errorMessage(inputElements[idx].parentElement)
        }
        else {
            inputElements[idx].parentElement.classList.add('input-valid')
        }
    }
})

// function errorMessage(inputElements[idx]) {
//     var errorDiv = document.createElement('div')
//     errorDiv.innerText = 'field is required'

//     inputElements[idx].appendChild(errorDiv)
// }


























// inputElements[i].createElement('div')





// function addErrorDiv() {
//     var errorDiv = document.createElement('div')
//     errorDiv.innerText = 'cannot be blank'

// function showEmptyNameError () {
//     var errorDiv = document.createElement('div')
//     errorDiv.classList.add('error-msg')
//     errorDiv.innerText = 'cannot be blank'











//         if (inputElements[i].value.trim() === "") {
//             inputElements[i].createElement.parentElements.classList.add('input-invalid')
//         }

//     }
// })
  // for (var i = 0; i < inputElements.length; i++) {


    // (var i of inputElements)

 // inputElements[i].createElement.parentElement.add('div')




    // clearError()

//     var name = document.getElementById('name').value.trim()
//     // check and make sure name is not empty
//     if (name === '') {
//        showInvalidError()
//     }
// })

// function showInvalidError() {
//     var errorDiv = document.createElement('div')
//     errorDiv.classList.add('input-invalid')

//     var field = document.getElementById('name-field')
//     // field.parentElement.appendChild(errorDiv)
//     field.classList.add('input-invalid')

// }

// for inputElement getElementsByTag('input')
