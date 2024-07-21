document.addEventListener('DOMContentLoaded', () => {
  const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
      try {
        const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          alert('Sign-up successful! Redirecting to dashboard...');
          document.location.replace('/dashboard');
        } else {
          const result = await response.json();
          alert(`Failed to sign up: ${result.message}`);
        }
      } catch (error) {
        console.error('Error during sign-up:', error);
        alert('Failed to sign up. Please try again.');
      }
    } else {
      alert('Please fill out both fields.');
    }
  };

  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
});
