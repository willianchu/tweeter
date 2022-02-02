$(document).ready(function() {
  console.log('composer-char-counter.js loaded');
  $('#tweet-text').keyup(function() {
    var remaining = 140 - $(this).val().length;
    
    // grab the element with the id of 'char-count'
    var charCount = $('#char-count');
    // set the text of the element to the remaining characters
    charCount.text(remaining);
    // if the remaining characters is less than 0, set the color to red
    if (remaining < 0) {
      charCount.css('color', 'red');
    } else {
      charCount.css('color', 'black');
    }
  });
});
   