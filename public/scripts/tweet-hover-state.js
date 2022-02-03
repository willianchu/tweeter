/* eslint-disable no-undef */

$(document).ready(function() {
  console.log('tweet-hover-state.js loaded');

  const addListeners = () => {
    $('i.fa.fa-retweet').hover(function() {
      $(this).css("color", "darkgoldenrod");
    }, function() {
      $(this).css("color", "#545149");
    });
  
    $('.fa-heart').hover(function() {
      $(this).css("color", "darkgoldenrod");
    }, function() {
      $(this).css("color", "#545149");
    });

    $('.fa-flag').hover(function() {
      $(this).css("color", "darkgoldenrod");
    }, function() {
      $(this).css("color", "#545149");
    });
  };
});




  
  