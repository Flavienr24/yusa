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










