const images1 = document.querySelectorAll(".lazy"); 
const images2 = document.querySelectorAll("[data-src]"); 

function preLoadImage(img) {
  if (img.tagName === "PICTURE") {
    const children = img.childNodes;
    children.forEach(child => {
      if (child.tagName) {
        if(child.tagName === "SOURCE") {
          child.srcset = child.dataset.srcset;
        }
      }
    })

  } else {
    const src = img.getAttribute("data-src");
    if (!src) {
      return;
    }

    img.src = src;
  }
};

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px 300px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return
    } else {
      preLoadImage(entry.target);
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