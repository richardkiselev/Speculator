const params = new URLSearchParams(window.location.search);
const articleId = params.get('id');

fetch('./articles.json')
  .then(response => response.json())
  .then(data => {
    const article = data.find(a => a.id === articleId);
    const container = document.getElementById('article-container');

    if (!article) {
      container.innerHTML = '<p>Article not found.</p>';
      return;
    }

    container.innerHTML = `
      <h1>${article.title}</h1>
      <p><em>${article.section} — ${article.date}</em></p>
      <img src="${article.thumbnail}" alt="${article.title}" style="width:100%; max-height:150px; object-fit:cover; margin-bottom:20px;">
      <p>${article.content}</p>
    `;
  })
  .catch(err => console.error(err));
