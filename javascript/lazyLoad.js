const images1 = document.querySelectorAll(".lazy"); 
const images2 = document.querySelectorAll("[data-src]"); 

function preLoadElement(element) {
  if (element.tagName === "PICTURE") {
    const children = element.childNodes;
    children.forEach(child => {
      if (child.tagName) {
        if(child.tagName === "SOURCE") {
          child.srcset = child.dataset.srcset;
        }
      }
    })

  } else {
    const src = element.getAttribute("data-src");
    if (!src) {
      return;
    }

    element.src = src;
  }
};

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 800px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return
    } else {
      preLoadElement(entry.target);
      imgObserver.unobserve(entry.target);
    }
  })
}, imgOptions);

images1.forEach(image => {
  imgObserver.observe(image);
});

images2.forEach(image => {
  imgObserver.observe(image);
});