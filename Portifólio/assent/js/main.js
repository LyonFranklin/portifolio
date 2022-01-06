/* Exibir Menu */
 const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })    
}
if (navClose){
    navClose.addEventListener('click',( ) =>{
        navMenu.classList.remove('show-menu')
    })
}
/* Remover menu mobile */
const navLink = document.getElementById('nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Slides */
let swiper = new Swiper(".projeto_container", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  /* ============ Scroll =========== */
  const sections = document.querySelectorAll('section[id]')

  function scrollActive( ){
      const scrollY = window.pageYOffset

      sections.forEach(current =>{
          const sectionHeight = current.offsetHeight
          const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
              document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link')
          }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link')
          }
        })
}
window.addEventListener('scroll, scrollActive')
  /* ============ * Change Backgroung   =========== */
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >=80)nav.classList.add('scroll_header');
    else nav.classList.add('scroll_header');
}
window.addEventListener('scroll', scrollHeader)
  /* ============ * Show Scroll Top   =========== */
function scrollUp(){
  const scrollUp = document.getElementById('scroll_Up');
  if(this.scrollY >= 560)scrollUp.classList.add("show_scroll"); else scrollUp.classList.remove("show_scroll");
}
window.addEventListener('scroll', scrollUp)
  /* ============ * Dark Mode   =========== */
  function modoEscuro = document.getElementById('modo-escuro')
  const darkTema = 'modo-escuro'*
  const iconTema = 'bx-sun'
  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon= localStorage.getItem('selected-icon')  
  const getCurrentTheme = () =>document.body.classList.contains(darkTema)? 'dark' : 'light'
  const getCurrentIcon = () =>themeButton.classList.contains(iconTheme)? 'bx-moon' : 'bt-sun'
  
  if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
  }

