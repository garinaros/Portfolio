const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if(localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.textContent = '🌙';
} else {
    body.classList.add('dark-theme');
    themeToggle.textContent = '🌞';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');

    if(body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '🌙';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌞';
    }
})