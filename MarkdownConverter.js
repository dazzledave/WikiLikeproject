document.addEventListener("DOMContentLoaded", function() {
    const convertBtn = document.getElementById("convertBtn");
    const markdownInput = document.getElementById("markdown");
    const htmlResult = document.getElementById("htmlResult");

    convertBtn.addEventListener("click", function() {
        const markdownText = markdownInput.value;
        const htmlText = marked(markdownText);
        htmlResult.innerHTML = htmlText;
    });
});
