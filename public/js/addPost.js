document.addEventListener('DOMContentLoaded', () => {
  const newPostButton = document.getElementById('new-post');
  const newPostForm = document.getElementById('new-post-form');

  if (newPostButton && newPostForm) {
    newPostButton.addEventListener('click', () => {
      newPostForm.style.display = 'block';
    });

    newPostForm.addEventListener('submit', async (event) => {
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
    console.error('New post button or form not found');
  }
});
