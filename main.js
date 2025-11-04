document.addEventListener("DOMContentLoaded", () => {
  fetch("articles.json")
    .then(response => response.json())
    .then(articles => {
      const container = document.getElementById("articles");
      container.innerHTML = ""; // clear placeholder

      articles.forEach(article => {
        // Create article card
        const card = document.createElement("div");
        card.classList.add("article-card");

        card.innerHTML = `
          <img src="${article.thumbnail}" alt="${article.title}" class="article-thumb">
          <div class="article-text">
            <h3><a href="article.html?id=${article.id}">${article.title}</a></h3>
            <p class="meta">${article.date} | ${article.author}</p>
            <p>${article.description}</p>
          </div>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error loading articles:", error);
      document.getElementById("articles").innerHTML = "<p>Failed to load articles.</p>";
    });
});
