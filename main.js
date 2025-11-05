document.addEventListener('DOMContentLoaded', () => {
    const articlesContainer = document.getElementById('articles');

    fetch('articles.json')
        .then(response => response.json())
        .then(articles => {
            // Display newest first
            const sortedArticles = articles.slice().reverse();

            sortedArticles.forEach(article => {
                // Create article card
                const card = document.createElement('div');
                card.className = 'article-card';

                // Thumbnail
                const thumb = document.createElement('img');
                thumb.className = 'article-thumb';
                thumb.src = article.thumbnail;
                thumb.alt = article.title;

                // Text container
                const textDiv = document.createElement('div');
                textDiv.className = 'article-text';

                // Title
                const title = document.createElement('h3');
                const titleLink = document.createElement('a');
                titleLink.href = `article.html?id=${encodeURIComponent(article.id)}`;
                titleLink.innerHTML = article.title; // DO NOT MODIFY text
                title.appendChild(titleLink);

                // Meta info
                const meta = document.createElement('p');
                meta.className = 'meta';
                meta.textContent = `${article.author} | ${article.section} | ${article.date}`;

                // Description
                const desc = document.createElement('p');
                desc.innerHTML = article.description; // DO NOT MODIFY text

                textDiv.appendChild(title);
                textDiv.appendChild(meta);
                textDiv.appendChild(desc);

                card.appendChild(thumb);
                card.appendChild(textDiv);

                articlesContainer.appendChild(card);
            });
        })
        .catch(err => {
            console.error('Error loading articles:', err);
            articlesContainer.innerHTML = '<p>Failed to load articles.</p>';
        });
});
