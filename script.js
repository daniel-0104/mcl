// href clicked active link start 
document.addEventListener('DOMContentLoaded', () => {
    const currentHTMLPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
  
    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      if (currentHTMLPage === linkPath) {
        link.classList.add('active');
      }
    });
  });
// href clicked active link end


//................................. category click start ...........................
let detailsText = document.getElementsByClassName('text-content');
const monthPlan = document.getElementById('monthly-plan');
const yearPlan = document.getElementById('yearly-plan');
const ownerPlan = document.getElementById('owner-plan');
let currentDetails = 0;

function detailsClick(event,elementId){
  event.preventDefault();
  const clickText = event.target;

  if(clickText.classList.contains('text-active')){
    return;
  }
  for(let d of detailsText){
    d.classList.remove('text-active');
  }
  clickText.classList.add('text-active');
  currentDetails = Array.from(detailsText).indexOf(clickText);

  monthPlan.style.display = elementId === 'monthPlan' ? 'block' : 'none';
  yearPlan.style.display = elementId === 'yearPlan' ? 'block' : 'none';
  ownerPlan.style.display = elementId === 'ownerPlan' ? 'block' : 'none';
}

// let detailsText = document.getElementsByClassName('text-content');

// function detailsClick(event, elementId) {
//     event.preventDefault();
//     const clickText = event.target;

//     for (let d of detailsText) {
//         d.classList.remove('text-active');
//     }
//     clickText.classList.add('text-active');

//     document.querySelectorAll('.plan-section').forEach(section => {
//         section.style.display = 'none';
//     });

//     const selectedSection = document.getElementById(elementId);
//     if (selectedSection) {
//         selectedSection.style.display = 'block';
//     }
// }
//........................................ category click end ................................


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    570: {
        slidesPerView: 2,
    },
    880: {
      slidesPerView: 3,
    },
    1300: {
        slidesPerView: 4,
    }
  }
});


//....................................... ......category active link start .........................................
document.addEventListener('DOMContentLoaded', function() {
  const caseCategory = document.querySelector('.case-scroll-container');
  const categoryLinks = document.querySelectorAll('.category-link button');

  // Set the first button as active by default
  if (categoryLinks.length > 0) {
    categoryLinks[0].classList.add('active');
  }

  // Restore scroll position
  const caseScrollX = sessionStorage.getItem('case-scroll-x');
  if (caseScrollX !== null) {
    caseCategory.scrollLeft = parseInt(caseScrollX, 10);
  }

  // Set active class on button click
  categoryLinks.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent navigation for testing

      // Remove active class from all buttons, add to clicked button
      categoryLinks.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Save scroll position
      sessionStorage.setItem('case-scroll-x', caseCategory.scrollLeft);
    });
  });
});
//................................................category active link end..... .........................................