// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
//map
function initMap() {
  var location = {lat:29.5130543, lng: -98.5688967};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: location ,
    zoom: 12
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  })
}
$(document).ready(function(){
  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
      window.location.hash = href;
    });
    return false;
  });
  // Tooltips
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  $(function () {
    $('#item1').tooltip();
  });
  $("#submit-button") .on("click", function () {
    var comment = $('#message').val();
    console.log(comment);

    if (comment ===""){
      $("#message" ) .css("border", "2px solid red");
    }
    else {
      $('#name').hide(),
      $('#email').hide(),
      $('#phone').hide(),
      $('#message').hide();
      $('#visible-comment').html(comment);
    };
    return false;
  });
  $("#message").on("keyup", function() {
    console.log("keyup happened");
    var charCount = $('#message') .val().length;
    console.log (charCount);
    $("#char-count") .html(charCount);
    if(charCount>50){
      $("#char-count").css("color","red");
    } else {
      $("#char-count").css("color","white");
    }
  });
  //work secction
  for(var i = 0; i < work.length; ++i ) {
    $("#work").append("\
    <div class='col-sm-4 col-md-3'>\
    <a href='#' class= 'work-img'>\
    <img class='img-responsive' style= 'width: 200px' src='" + work[i].pic + "'>\
    <span class= 'info'><p class= 'proj-title'>Title:</p> [Projects]</span>\
    </a>\
    </div>\
    ");
    $(".work-img").mouseenter(function(){
      $(".info", this).show();
    }).mouseleave(function(){
      $(".info", this).hide();
    });
    var images = $("#work img");
    if(i%2 === 0){
      $(images[i]).css("border", "2px solid DodgerBlue");
    } else {
      $(images[i]).css("border", "2px solid salmon");
    };
  };
});
