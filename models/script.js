function navigateTo(page) {
    window.location.href = page;
}

document.getElementById('forgotPassword').addEventListener('click', function() {
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.forgot-password-form').style.display = 'block';
});

document.getElementById('register').addEventListener('click', function() {
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.register-form').style.display = 'block';
});

document.getElementById('backToLogin').addEventListener('click', function() {
    document.querySelector('.forgot-password-form').style.display = 'none';
    document.querySelector('.login-form').style.display = 'block';
});

document.getElementById('backToLoginFromRegister').addEventListener('click', function() {
    document.querySelector('.register-form').style.display = 'none';
    document.querySelector('.login-form').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const u = document.getElementById('u').value;
    const password = document.getElementById('password').value;


    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ RM, password })
        });

        if (response.ok) {
            navigateTo('entrada.html');
        } else {
            alert('Credenciais inválidas');
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
    }
});

document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newEmail = document.getElementById('newEmail').value;
    const newPassword = document.getElementById('newPassword').value;

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ newUsername, newEmail, newPassword })
        });

        if (response.ok) {
            alert('Usuário registrado com sucesso');
            document.querySelector('.register-form').style.display = 'none';
            document.querySelector('.login-form').style.display = 'block';
        } else {
            alert('Erro ao registrar usuário');
        }
    } catch (error) {
        console.error('Erro ao registrar usuário:', error);
    }
});
