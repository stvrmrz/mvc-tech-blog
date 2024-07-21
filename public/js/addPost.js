document.addEventListener('DOMContentLoaded', () => {
  const addPostForm = document.querySelector('.add-post-form');

  if (addPostForm) {
    addPostForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const title = document.querySelector('#post-title').value.trim();
      const content = document.querySelector('#post-content').value.trim();

      if (title && content) {
        const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({ title, content }),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to add post.');
        }
      }
    });
  } else {
    console.error('Add post form not found');
  }
});
