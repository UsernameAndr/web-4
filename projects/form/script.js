function showGreeting() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    
    if (!firstName && !lastName) {
        document.getElementById('greeting').innerText = 'Пожалуйста, введите имя и фамилию.';
    } else if (firstName === '' || lastName === '') {
        document.getElementById('greeting').innerText = 'Пожалуйста, введите имя и фамилию.';
    } else if (!firstName) {
        document.getElementById('greeting').innerText = 'Пожалуйста, введите имя.';
    } else if (!lastName) {
        document.getElementById('greeting').innerText = 'Пожалуйста, введите фамилию.';
    } else {
        document.getElementById('greeting').innerText = `Здравствуйте, ${firstName} ${lastName}!`;
    }
}
