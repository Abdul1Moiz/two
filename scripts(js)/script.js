
function loadVideo(el) {
    el.innerHTML = `
          <iframe src="https://player.vimeo.com/video/1101743481?autoplay=1&muted=1&loop=1"
                  frameborder="0" allow="autoplay; fullscreen"
                  style="position:absolute;top:0;left:0;width:100%;height:100%;"
                  loading="lazy"></iframe>`;
}




// laptop images slider JAVASCRIPT code
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.screen-overlay .slide');
    const nextBtn = document.querySelector('.nav.right');
    const prevBtn = document.querySelector('.nav.left');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide); // Initialize
});


// TESTIMONIAL SECTION JAVASCIRPT

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.testimonial-slide');
    const nextBtn = document.querySelector('.testimonial-nav.right');
    const prevBtn = document.querySelector('.testimonial-nav.left');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide); // Initialize
});



// FREQUENTLY AsKDE QUESTION JAVA SCRIPT

var acc = document.getElementsByClassName("according");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var panel = this.nextElementSibling;
        panel.classList.toggle("active");
    });
}






// Deployment ID
// AKfycbzbvFol_Sf1Q2193s0dReVZHwW9oIHB37sXJB7ZlqORLnV-s4GXamP-s9nGeOloAhzEew


const scriptURL = 'https://script.google.com/macros/s/AKfycbzbvFol_Sf1Q2193s0dReVZHwW9oIHB37sXJB7ZlqORLnV-s4GXamP-s9nGeOloAhzEew/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');


form.addEventListener('submit', e => {
    e.preventDefault();

    msg.textContent = "Sending...";

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.textContent = "Message sent successfully";
            setTimeout(() => {
                msg.textContent = "";
            }, 3000);
            form.reset();
        })
        .catch(error => {
            msg.textContent = "Something went wrong!";
            setTimeout(() => {
                msg.textContent = "";
            }, 3000);
            form.reset();
        });
});