const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".from-up");

const apearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -300px 0px"
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