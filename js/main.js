document.querySelector('.btn-menu').addEventListener('click', function(){
    openNav();
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  if (localStorage.getItem('theme') === null || localStorage.getItem('theme') === 'null'){
    localStorage.setItem('theme', 'theme-dark');
    }

document.documentElement.className = localStorage.getItem('theme');
