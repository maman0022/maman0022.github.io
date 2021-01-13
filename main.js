let animationElement = document.getElementById('spinner');
let timeoutId, overlayElement;
let angle = 0;
function startSpinner(e) {
  if (e) {
    overlayElement = e.currentTarget;
  }
  angle += parseInt(overlayElement.dataset.counter);
  animationElement.style.transform = `rotate(${angle}deg) skewX(${Math.random() * overlayElement.dataset.counter}deg) skewY(${Math.random() * overlayElement.dataset.counter}deg)`;
  timeoutId = setTimeout(startSpinner, 1);
}
function stopSpinner() {
  clearTimeout(timeoutId);
  animationElement.style.transform = `rotate(${angle}deg) skewX(0deg) skewY(0deg)`;
}
function positionOverlays() {
  $('.overlay').position({ of: $('#spinner'), at: 'center-8 center' });
}
$('.overlay').mouseenter(startSpinner).mouseleave(stopSpinner);
$(window).resize(positionOverlays);
positionOverlays();