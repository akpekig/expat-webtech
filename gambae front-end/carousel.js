
window.onload = function() {

  let left = $('.hero-overlay-left');
  let right = $('.hero-overlay-right');

  let i = 0;
  let images = [
    'url(\"carousel/1.png\")',
    'url(\"carousel/2.png\")',
    'url(\"carousel/3.jpg\")',
    'url(\"carousel/4.jpg\")',
    'url(\"carousel/5.png\")',
    'url(\"carousel/6.png\")'
  ]
  let buttons = [
    $('#carousel-button1'),
    $('#carousel-button2'),
    $('#carousel-button3'),
    $('#carousel-button4'),
    $('#carousel-button5'),
    $('#carousel-button6')
  ]




  setInterval(function() {
    if( i >= 1){
      let j = i - 1;
      buttons[j].toggleClass('carousel-button-active');
    }
    buttons[i].toggleClass('carousel-button-active');
    left.css( 'background-image', images[i] );
    right.css( 'background-image', images[i + 1] );
    left.slideDown();
    right.slideDown();
    i++;
    if (i == images.length) {
      i = 0;
    }
  }, 4000);


};
