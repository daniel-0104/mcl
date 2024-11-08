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
//........................................ category click end ................................