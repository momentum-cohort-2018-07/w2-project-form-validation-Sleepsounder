document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

    // clearError()

    var name = document.getElementById('name').value.trim()

    // check and make sure name is not empty

    if (name === '') {
        alert('ERROR')
    }})