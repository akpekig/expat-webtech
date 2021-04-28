
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

  buttons[i].toggleClass('carousel-button-active');
  left.css( 'background-image', images[i] );
  right.css( 'background-image', images[i + 1] );
  left.slideDown();
  right.slideDown();

  setInterval(function(){
      let j = i + 2;
      buttons[i].toggleClass('carousel-button-active');
      buttons[i + 1].toggleClass('carousel-button-active');
      left.css( 'background-image', images[i + 1] );
      right.css( 'background-image', images[j]);
      i++;
      if (j == images.length){
        j = 1;
        i = j - 1;
        buttons[i].toggleClass('carousel-button-active');
        buttons[images.length].toggleClass('carousel-button-active');
      }
      buttons[i].click(function() {
        buttons[i].addClass('carousel-button-active');
        left.css( 'background-image', images[i] );
        right.css( 'background-image', images[j]);
      });

  }, 2000);








  /*setInterval(function() {

  setInterval(function(){
    buttons[i - 1].toggleClass('carousel-button-active');
    buttons[i].toggleClass('carousel-button-active');
    left.css( 'background-image', images[i] );
    right.css( 'background-image', images[i + 1] );
  }, 2000);
    if (i == images.length){
      i = 0;
    }
    buttons[i].toggleClass('carousel-button-active');
    i++;
    j++;

    buttons[i].toggleClass('carousel-button-active');
    left.css( 'background-image', images[i] );
    right.css( 'background-image', images[j] );


  }, 2000);*/





};
