function animateCounters() {
    const counters = document.querySelectorAll(".counter");
    const speed = 60;

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const inc = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = Math.min(count + inc, target);
          setTimeout(updateCount, 25);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }

  const aboutSection = document.querySelector(".about-section");
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(aboutSection);

        // Bouton Reservation dans About
document.querySelector('.btn-blue').addEventListener('click', function () {
window.location.href = '#reservation';
});
// Bouton "make reservation"
const btnMakeReservation = document.querySelector('.btn-submit-res');
const reservationSuccess = document.getElementById('reservationSuccess');

if (btnMakeReservation) {
btnMakeReservation.addEventListener('click', function () {
const inputs = document.querySelectorAll('.booking-inputs input');
let allFilled = true;
inputs.forEach(input => {
  if (!input.value.trim()) {
    allFilled = false;
  }
});

if (!allFilled) {
  alert('Veuillez remplir tous les champs avant de réserver.');
  return;
}

if (reservationSuccess) {
  reservationSuccess.style.display = 'block';
}

inputs.forEach(input => input.value = '');
});
}

// Bouton "Send" du footer
const newsletterBtn = document.querySelector('.newsletter-form-box button');
const newsletterInput = document.querySelector('.newsletter-form-box input');
const sentMessage = document.getElementById('sentMessage');

if (newsletterBtn) {
newsletterBtn.addEventListener('click', function () {
const email = newsletterInput.value.trim();

if (!email) {
  alert('Veuillez entrer votre email.');
  return;
}

if (sentMessage) {
  sentMessage.style.display = 'block';
}

newsletterInput.value = '';
});
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const targetId = this.getAttribute('href');
const target = document.querySelector(targetId);
if (!target) return;

target.scrollIntoView({
  behavior: 'smooth',
  block: 'start'
});
});
});