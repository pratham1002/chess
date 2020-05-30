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
    form.appendChild(username)

    const room = document.createElement('input')
    room.setAttribute('id', 'room')
    room.setAttribute('placeholder', 'Enter room name')
    room.setAttribute('name', 'room')
    room.setAttribute('type', 'text')
    form.appendChild(room)

    const submit = document.createElement('input')
    submit.setAttribute('type', 'submit')
    form.appendChild(submit)

    $registration.appendChild(form)
}