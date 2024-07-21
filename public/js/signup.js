document.addEventListener('DOMContentLoaded', () => {
  console.log('Signup JS loaded'); // Add this line to check if the script is loaded

  const signupFormHandler = async (event) => {
    event.preventDefault();
    console.log('Form submission prevented'); // Add this line to check if the form submission is prevented

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

  const signupForm = document.querySelector('.signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', signupFormHandler);
    console.log('Signup form event listener added'); // Add this line to check if the event listener is added
  } else {
    console.error('Sign-up form not found');
  }
});
