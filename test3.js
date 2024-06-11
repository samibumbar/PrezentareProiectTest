document.getElementById('code-source-btn').addEventListener('click', function() {
    var codeLinks = document.getElementById('code-links');
    if (codeLinks.style.display === 'none' || codeLinks.style.display === '') {
        codeLinks.style.display = 'flex';
    } else {
        codeLinks.style.display = 'none';
    }
});