const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  console.log('Username:', username);
  console.log('Password:', password);

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert('Sign-up successful! Redirecting to dashboard...');
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up. Please try again.');
    }
  } else {
    alert('Please fill out both fields.');
  }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
