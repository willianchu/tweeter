$(document).ready(function() {
  console.log('tweet-hover-state.js loaded');
  $('.fa.fa-retweet').hover(function() {
  $(this).css("color", "darkgoldenrod");
  }, function(){
  $(this).css("color", "#545149");
  });

  $('.fa.fa-heart').hover(function() {
    $(this).css("color", "darkgoldenrod");
    }, function(){
    $(this).css("color", "#545149");
    });

    $('.fa.fa-flag').hover(function() {
      $(this).css("color", "darkgoldenrod");
      }, function(){
      $(this).css("color", "#545149");
      });
});

  
  