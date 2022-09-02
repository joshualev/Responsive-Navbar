const toggleNav = document.querySelector('.mobile-nav-toggle')
const primaryNavigation = document.querySelector('.primary-navigation')

toggleNav.addEventListener("click", toggleNavBar);

function toggleNavBar() {
  if (toggleNav.classList.contains('active-menu') ) {
      primaryNavigation.classList.toggle('hidden')
      toggleNav.classList.toggle('active-menu')
      toggleNav.classList.toggle('expand-menu') 
      

  } else if (toggleNav.classList.contains('expand-menu')){
      primaryNavigation.classList.toggle('hidden')
      toggleNav.classList.toggle('expand-menu')
      toggleNav.classList.toggle('active-menu') 
  } 
}
