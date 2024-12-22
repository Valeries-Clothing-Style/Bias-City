// Toggle visibility for password fields
function togglePasswordVisibility(inputId) {
    const input = document.getElementById(inputId);
    const icon = input.nextElementSibling;
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Toggle between Sign-Up and Login Forms
function toggleForm(formType) {
    if (formType === 'signup') {
        document.getElementById('signup-form').style.display = 'block';
        document.getElementById('login-form').style.display = 'none';
    } else {
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    }
}

// Handle Sign-Up logic
function signUp() {
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (username === '' || password === '' || confirmPassword === '') {
        document.getElementById('signup-message').textContent = 'All fields are required.';
        return;
    }
    
    if (password !== confirmPassword) {
        document.getElementById('signup-message').textContent = 'Passwords do not match.';
        return;
    }
    
    // Save user data to Local Storage (simulating a backend process)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    
    document.getElementById('signup-message').textContent = 'Sign Up Successful!';
    setTimeout(() => {
        toggleForm('login');
    }, 2000);
}

// Handle Login logic
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    
    if (username === storedUsername && password === storedPassword) {
        window.location.href = 'home.html';
    } else {
        document.getElementById('login-message').textContent = 'Invalid credentials.';
    }
}
