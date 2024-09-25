// Funzione per convertire Markdown in HTML
function renderMarkdown(content) {
  return window.markdownit().render(content);
}

// Funzione per generare il markup del post
function renderPost(post, content) {
  return `
    <article class="post">
      <h2>${post.title}</h2>
      <p class="date">${post.date}</p>
      <div class="post-content">${renderMarkdown(content)}</div>
    </article>
  `;
}

// Sezione dove inserire i post
const blogSection = document.getElementById('blog-posts');

// Carica e visualizza i post
posts.forEach(post => {
  fetch(post.file)
    .then(response => response.text())
    .then(content => {
      const postHtml = renderPost(post, content);
      blogSection.innerHTML += postHtml;
    });
});
