const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.carousel-card');
const cardWidth = cards[0].offsetWidth;
let currentIndex = 0;

function moveSlider(offset) {
    currentIndex = (currentIndex + offset + cards.length) % cards.length;
    const position = -currentIndex * cardWidth;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(${position}px)`;
}

document.querySelector('.prev-button').addEventListener('click', () => moveSlider(-1));
document.querySelector('.next-button').addEventListener('click', () => moveSlider(1));

// tabs

function openTab(evt, tabName) {
    // Hide all tab content
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    // Remove 'active-tab' class from all tabs
    const tabs = document.getElementsByClassName('tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active-tab');
    }

    // Show the clicked tab content
    document.getElementById(tabName).style.display = 'block';

    // Add 'active-tab' class to the clicked tab
    evt.currentTarget.classList.add('active-tab');
}

// Show the first tab by default
document.getElementById('tab1').style.display = 'block';
document.getElementsByClassName('tab')[0].classList.add('active-tab');


// testimonials

const trackzz = document.querySelector('.carousel-trackzz');
const cardszz = document.querySelectorAll('.carousel-cardzz');
const cardWidthzz = cardszz[0].offsetWidth;
let currentIndexzz = 0;

function moveSliderzz(offset) {
    currentIndex = (currentIndex + offset + cardszz.length) % cardszz.length;
    const position = -currentIndex * cardWidthzz;
    trackzz.style.transition = 'transform 0.5s ease-in-out';
    trackzz.style.transform = `translateX(${position}px)`;
}

document.querySelector('.prev-buttonzz').addEventListener('click', () => moveSliderzz(-1));
document.querySelector('.next-buttonzz').addEventListener('click', () => moveSliderzz(1));



// for cor testimonials
