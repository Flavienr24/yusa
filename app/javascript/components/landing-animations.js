//Pitch animation

window.onload = function() {

var textWrapper = document.querySelector('.animated-letter');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
};

function textAnimationFlow() {
  setTimeout(7000)
  $('.txt').html(function(i, html) {
  var chars = $.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
  });
};


//Smooth Paragraph on landing
const paragrahAnimation = document.querySelectorAll('.smooth-text');
const firstSection = document.querySelector('.bg-black-gradient');

document.addEventListener('scroll', onScroll);

function onScroll () {
  // calcule la tailler de la section
  sizeFirstSection = firstSection.offsetHeight;
  positionY = window.scrollY;
  // si on scroll plus de la taille de la section 1
  if (positionY > sizeFirstSection/3) {
    paragrahAnimation.forEach((item) => {
    item.style.display = "";
    });
  } else {
    paragrahAnimation.forEach((item) => {
    item.style.display = "none";
    });
  };
};







