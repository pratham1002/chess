function createRegistrationForm() {
    console.log('making form')
    const $registration = document.getElementById('registration')

    const form = document.createElement('form')
    form.setAttribute('id', 'registrationForm')

    const username = document.createElement('input')
    username.setAttribute('id', 'username')
    username.setAttribute('placeholder','Enter username')
    username.setAttribute('name', 'username')
    username.setAttribute('type', 'text')
    username.setAttribute('required', 'true')
    form.appendChild(username)

    const room = document.createElement('input')
    room.setAttribute('id', 'room')
    room.setAttribute('placeholder', 'Enter room name')
    room.setAttribute('name', 'room')
    room.setAttribute('type', 'text')
    room.setAttribute('required', 'true')
    form.appendChild(room)

    const submit = document.createElement('button')
    submit.setAttribute('id', 'formSubmit')
    submit.setAttribute('type', 'submit')
    submit.innerHTML = "Play!"
    form.appendChild(submit)

    $registration.appendChild(form)
}