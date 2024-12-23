const loginForm = document.getElementById('loginForm');
const email = document.getElementById("email");
const password = document.getElementById("password");

const signUpLink = document.getElementById('signUpLink');

        // Event for login
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Check local storage for user
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = users.find(user => user.email === email && user.password === password);

            if (userExists) {
                alert('Login successful!');
                // Redirect to dashboard or another page
            } else {
                alert('User not found! Please register.');
            }
        });

        // Event for sign up link
        signUpLink.addEventListener('click', () => {
            const email = prompt('Enter your email:');
            const password = prompt('Enter your password:');
            const confirmPassword = prompt('Confirm your password:');

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = users.find(user => user.email === email);

            if (userExists) {
                alert('User already exists! Please log in.');
            } else {
                users.push({ email, password });
                localStorage.setItem('users', JSON.stringify(users));
                alert('Registration successful! You can now log in.');
            }
        });