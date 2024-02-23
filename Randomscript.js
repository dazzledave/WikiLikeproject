document.addEventListener("DOMContentLoaded", function() {
    const randomBtn = document.getElementById("randomBtn");
    const randomArticle = document.getElementById("randomArticle");

    randomBtn.addEventListener("click", function() {
        // List of articles
        const articles = [
            "article1.html",
            "article2.html",
            "article3.html",
            "article4.html",
            "article5.html",
            "article6.html",
            "article7.html"
        ];

        // Generate a random index
        const randomIndex = Math.floor(Math.random() * articles.length);
        
        // Get the URL of the random article
        const randomArticleUrl = articles[randomIndex];

        // Redirect the user to the random article
        window.location.href = randomArticleUrl;
    });
});
