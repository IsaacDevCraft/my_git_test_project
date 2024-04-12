// change navbar

window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})
// show/hide nav menu 
const menu = document.querySelector('.nav_menu'); // Use '.nav_menu' to select by class
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn= document.querySelector('#close-menu-btn'); // Corrected ID spelling

menuBtn.addEventListener('click', () => {
  menu.style.transform = "translateX(0)"; // Corrected style property
  closeBtn.style.display ='inline-block';
  menuBtn.style.display = 'none'; // Change to 'none' to hide the open button
});

closeBtn.addEventListener('click', () => {
  menu.style.transform = "translateX(100%)"; // Corrected style property
  closeBtn.style.display = 'none'; // Hide close button when closing menu
  menuBtn.style.display = 'inline-block'; // Show open button when closing menu
});


//show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click',()=>{
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if (icon.className === "fa-solid fa-plus"){
            icon.className= "fa-solid fa-minus"
        }else{ 
            icon.className ="fa-solid fa-plus";
        }
    })
})
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
