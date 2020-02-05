/*plugin for sidr*/
$(document).ready(function () {
(function(sidr) {
  "use strict"

  sidr.new('#sidr-left-top-button', {
    name: 'sidr-left-top',
    timing: 'ease-in-out',
    speed: 500,
    side : 'right',
    source: '.nav-sample'
    
  });

  window.onresize = function() {
    sidr.close('sidr-left-top');
  };

  })(window.sidr);

});


/*Scroll Delay*/

$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});

/*Info Auto Scroll*/

// scroll info penting

$(document).ready(function () {
  var speed = 0;
  var scroll = 0;
  var container = $('#row');
  var container_w = container.width();
  var max_scroll = container[0].scrollWidth - container.outerWidth();

  container.on('mousemove', function (e) {
    var mouse_x = e.pageX - container.offset().left;
    var mouseperc = 100 * mouse_x / container_w;
    speed = mouseperc - 50;
  }).on('mouseleave', function () {
    speed = 0;
  });

  function updatescroll() {
    if (speed !== 0) {
      scroll += speed / 5;
      if (scroll < 0) scroll = 0;
      if (scroll > max_scroll) scroll = max_scroll;
      $('#row').scrollLeft(scroll);
    }
    window.requestAnimationFrame(updatescroll);
  }
  window.requestAnimationFrame(updatescroll);
});

// scroll video

$(document).ready(function () {
  var speed = 0;
  var scroll = 0;
  var container = $('#row1');
  var container_w = container.width();
  var max_scroll = container[0].scrollWidth - container.outerWidth();

  container.on('mousemove', function (e) {
    var mouse_x = e.pageX - container.offset().left;
    var mouseperc = 100 * mouse_x / container_w;
    speed = mouseperc - 50;
  }).on('mouseleave', function () {
    speed = 0;
  });

  function updatescroll() {
    if (speed !== 0) {
      scroll += speed / 5;
      if (scroll < 0) scroll = 0;
      if (scroll > max_scroll) scroll = max_scroll;
      $('#row1').scrollLeft(scroll);
    }
    window.requestAnimationFrame(updatescroll);
  }
  window.requestAnimationFrame(updatescroll);
});

// scroll foto

$(document).ready(function () {
  var speed = 0;
  var scroll = 0;
  var container = $('#row2');
  var container_w = container.width();
  var max_scroll = container[0].scrollWidth - container.outerWidth();

  container.on('mousemove', function (e) {
    var mouse_x = e.pageX - container.offset().left;
    var mouseperc = 100 * mouse_x / container_w;
    speed = mouseperc - 50;
  }).on('mouseleave', function () {
    speed = 0;
  });

  function updatescroll() {
    if (speed !== 0) {
      scroll += speed / 5;
      if (scroll < 0) scroll = 0;
      if (scroll > max_scroll) scroll = max_scroll;
      $('#row2').scrollLeft(scroll);
    }
    window.requestAnimationFrame(updatescroll);
  }
  window.requestAnimationFrame(updatescroll);
});

// scroll audio

$(document).ready(function () {
  var speed = 0;
  var scroll = 0;
  var container = $('#row3');
  var container_w = container.width();
  var max_scroll = container[0].scrollWidth - container.outerWidth();

  container.on('mousemove', function (e) {
    var mouse_x = e.pageX - container.offset().left;
    var mouseperc = 100 * mouse_x / container_w;
    speed = mouseperc - 50;
  }).on('mouseleave', function () {
    speed = 0;
  });

  function updatescroll() {
    if (speed !== 0) {
      scroll += speed / 5;
      if (scroll < 0) scroll = 0;
      if (scroll > max_scroll) scroll = max_scroll;
      $('#row3').scrollLeft(scroll);
    }
    window.requestAnimationFrame(updatescroll);
  }
  window.requestAnimationFrame(updatescroll);
});