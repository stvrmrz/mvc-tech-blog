document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const username = document.querySelector('#username-login').value.trim();
      const password = document.querySelector('#password-login').value.trim();

      if (username && password) {
        const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to log in.');
        }
      }
    });
  } else {
    console.error('Login form not found');
  }
});
