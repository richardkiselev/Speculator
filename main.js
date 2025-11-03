fetch('./articles.json')
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("articles");
    data.forEach((article) => {
      const div = document.createElement("div");
      div.className = "article-preview";
      div.innerHTML = `
        <img src="${article.thumbnail}" alt="${article.title}" class="article-thumb">
         <h2>${article.title}</h2>
          <p><em>${article.section} — ${article.date}</em></p>
         <p>${article.description}</p>
         <button onclick="viewArticle('${article.id}')">Read full article</button>
    `;

      container.appendChild(div);
    });
  });

function viewArticle(id) {
  window.location.href = "article.html?id=" + id;
}
