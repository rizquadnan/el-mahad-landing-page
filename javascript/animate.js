const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".from-up");
let rootMargin = "0px 0px -400px 0px";

if (window.innerWidth > 600) {
  rootMargin = "0px 0px -300px 0px";
}

const apearOptions = {
  threshold: 1,
  rootMargin: rootMargin
};
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }

    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, apearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
})