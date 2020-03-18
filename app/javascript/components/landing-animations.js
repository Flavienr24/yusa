window.onload = function() {

var textWrapper = document.querySelector('.animated-letter');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.animated-letter .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 100 * (i+1)
  });
};

function textAnimationFlow() {
  setTimeout(7000)
  $('.txt').html(function(i, html) {
  var chars = $.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
  });
};
