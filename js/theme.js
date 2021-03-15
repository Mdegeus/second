// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

document.querySelector('.btn-dark-th').addEventListener('click', function(){
    setTheme('theme-dark');
});

document.querySelector('.btn-light-th').addEventListener('click', function(){
    setTheme('theme-light');
});

document.querySelector('.btn-blue-th').addEventListener('click', function(){
    setTheme('theme-blue');
});

document.querySelector('.btn-remove-theme').addEventListener('click', function(){
    localStorage.setItem('theme', 'null');
});