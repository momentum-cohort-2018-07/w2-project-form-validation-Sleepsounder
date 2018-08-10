document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

    var inputElements = document.getElementsByTagName('input')

    for (var i = 0; i < inputElements.length; i++) {
        
        if (inputElements[i].value.trim() === "") {
            inputElements[i].parentElement.classList.add('input-invalid')
        }
        else {
            inputElements[i].parentElement.classList.add('input-valid')
        }

}
    })

//         if (inputElements[i].value.trim() === "") {
//             inputElements[i].createElement.parentElements.classList.add('input-invalid')
//         }
       
//     }
// })








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
