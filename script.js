// Words typing on the first page

const wordsToType = ["QA Engineer", "problem solver", "team player"];
const typingSpeed = 100;
const deleteSpeed = 50;

const typingTextElement = document.getElementById("typing-text");
let currentWordIndex = 0;
let isDeleting = false;
let currentText = "";
let currentIndex = 0;

async function typeAndDelete() {
    const currentWord = wordsToType[currentWordIndex];

    if (!isDeleting) {
        if (currentIndex < currentWord.length) {
            currentText += currentWord[currentIndex];
            typingTextElement.textContent = currentText;
            currentIndex++;
        }

        if (currentIndex === currentWord.length) {
            isDeleting = true;
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    } else {
        currentText = currentText.slice(0, -1);
        typingTextElement.textContent = currentText;
        if (currentText === "") {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % wordsToType.length;
            await new Promise(resolve => setTimeout(resolve, 500));
            currentIndex = 0;
            currentText = "";
        }
    }

    setTimeout(typeAndDelete, isDeleting ? deleteSpeed : typingSpeed);
}

typeAndDelete();

// Smooth page scrolling

document.addEventListener('DOMContentLoaded', function() {
  var portfolioSection = document.getElementById('portfolio-section');
  var isScrolling = false;

  document.addEventListener('scroll', function() {
    var portfolioSectionTop = portfolioSection.getBoundingClientRect().top;

    if (portfolioSectionTop <= window.innerHeight / 2) {
      portfolioSection.classList.add('visible');
    } else {
      portfolioSection.classList.remove('visible');
    }
  });

  // Handler for smooth scrolling when clicking on a button
  var scrollToPortfolio = document.getElementById('scroll-to-portfolio');
  scrollToPortfolio.addEventListener('click', function(event) {
    event.preventDefault();
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Handler for automatic scrolling when scrolling downwards
  window.addEventListener('wheel', function(event) {
    if (!isScrolling) {
      if (event.deltaY > 0) {
        isScrolling = true;
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
          isScrolling = false;
        }, 0);
      }
    }
  });
});

// Words typing on the second page

const wordsToType2 = ["banking", "medicine", "everything"];

const typingTextElement2 = document.getElementById("typing-text-2");
let currentWordIndex2 = 0;
let isDeleting2 = false;
let currentText2 = "";
let currentIndex2 = 0;

async function typeAndDelete2() {
    const currentWord2 = wordsToType2[currentWordIndex2];

    if (!isDeleting2) {
        if (currentIndex2 < currentWord2.length) {
            currentText2 += currentWord2[currentIndex2];
            typingTextElement2.textContent = currentText2;
            currentIndex2++;
        }

        if (currentIndex2 === currentWord2.length) {
            isDeleting2 = true;
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    } else {
        currentText2 = currentText2.slice(0, -1);
        typingTextElement2.textContent = currentText2;
        if (currentText2 === "") {
            isDeleting2 = false;
            currentWordIndex2 = (currentWordIndex2 + 1) % wordsToType2.length;
            await new Promise(resolve => setTimeout(resolve, 500));
            currentIndex2 = 0;
            currentText2 = "";
        }
    }

    setTimeout(typeAndDelete2, isDeleting2 ? deleteSpeed : typingSpeed);
}

typeAndDelete2();

// Opening and closing a popup

const openPopups = document.querySelectorAll('.open-pop-up');
const closePopups = document.querySelectorAll('.pop-up-close');
const popups = document.querySelectorAll('.pop-up');

for (let i = 0; i < openPopups.length; i++) {
  openPopups[i].addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    popups[i].classList.add('active');

    document.addEventListener('click', closePopupOutside);
  });
}

for (let i = 0; i < closePopups.length; i++) {
  closePopups[i].addEventListener('click', function() {
    popups[i].classList.remove('active');
  });
}

// Scroll up

const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
        this.el.classList.remove('btn-up-hide');
    },
    hide() {
        this.el.classList.add('btn-up-hide');
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;

            // Show button if scrolling is more than half the height of the browser window
            scrollY > windowHeight / 2 ? this.show() : this.hide();
        });
        document.querySelector('.btn-up').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}
btnUp.addEventListener();