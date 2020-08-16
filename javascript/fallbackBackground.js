// fallback desktop hero background image
var img = document.createElement("img");
img.onerror = function () {
  var style = document.createElement('style');
  style.innerHTML = "header { background-image: url('assets/desktop/banner-desktop.jpg'); }";
  document.head.appendChild(style);
}
img.src = "assets/desktop/banner-desktop.webp";

// fallback mobile hero background image
var img1 = document.createElement("img");
img1.onerror = function () {
  var style = document.createElement('style');
  style.innerHTML = "header { background-image: url('assets/mobile/hero@2x.png'); }";
  document.head.appendChild(style);
}
img1.src = "assets/mobile/hero@2x.webp";

// fallback mobile and desktop biaya section background
var img2 = document.createElement("img");
img2.onerror = function () {
  var style = document.createElement('style');
  style.innerHTML = ".biaya-wrapper { background: linear-gradient( \
                                                    90deg, \
                                                    rgba(244, 182, 11, 0.9) 0%, \
                                                    rgba(238, 97, 1, 0.9) 60% \
                                                    ), \
                                        url('assets/mobile/biaya_program@2x.jpg');\
                                        background-repeat: no-repeat; \
                                        background-size: cover; \
                                        background-position: left; \
                                      }";
  document.head.appendChild(style);
}
img2.src = "assets/mobile/biaya_program@2x.webp";