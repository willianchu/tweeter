
/* eslint-disable no-undef */
// Test / driver code (temporary). Eventually will get this from the server.
console.log('client.js is running');

$(()=> {
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

  const renderTweets = function(tweets) {
    for (const tweetIndex in tweets) { // loops through tweets
      const $tweet = createTweetElement(tweets[tweetIndex]); // calls createTweetElement for each tweet
      $('#tweets-container').append($tweet); // takes return value and appends it to the tweets container
    }
    addListeners();
  };

  const createTweetElement = function(tweetData) {
    // let $tweet = /* Your code for creating the tweet element */
    
    const $idImg = $('<img>').addClass("id-img").attr('src',`${tweetData.user.avatars}`); // child 1
    const $name = $('<h3>').text(`${tweetData.user.name}`); // child 2
    const $preId = $('<pre>').append($idImg, $name); // parent header-id

    const $marker = $('<h4>').text(`${tweetData.user.handle}`); // child 3
    const $header = $('<header>').addClass('tweet-header').append($preId, $marker); 
    
    const $content = $('<p>').addClass('tweet-content').text(`${tweetData.content.text}`);
    const $hr = $('<hr>'); // child 4
    
    const iflag = $('<i>').addClass('fa fa-flag'); // child 7
    const iretweet = $('<i>').addClass('fa fa-retweet'); // child 8
    const ilike = $('<i>').addClass('fa fa-heart'); // child 9
    const $footerIcons = $('<p>').addClass('footer-social').append(iflag, iretweet, ilike); // parent footer-icons

    const iClock = $('<i>').addClass('fa fa-clock-o'); // child 5
    const icalendar = $('<i>').addClass('fa fa-calendar').text(` ${timeago.format(tweetData.created_at)}`); // child 6

    const $footerTime = $('<p>').addClass('footer-time').append(iClock, icalendar); // parent footer-time

    const $footer = $('<footer>').addClass('tweet-footer').append($footerTime).append($footerIcons); // parent footer

    const $tweet = $('<article>').addClass('tweet'); // parent tweet

    $tweet.append($header, $content, $hr, $footer); // parent tweet

    const $tweetsContainer = $('#tweets-container');

    $tweetsContainer.append($tweet);
      
    return $tweet;
  };

  $('#new-tweet-form').on('submit', function(event) {
    event.preventDefault(); // prevents page from reloading
    console.log("the form has submmited");

    const caracterCount = $('#char-count').html();

    console.log(typeof caracterCount);
    
    if (parseFloat(caracterCount) < 0) {
      alert('You have exceeded the character limit');
      $('input.error:button').css('display', 'inline');
    } else {
      const data = $("#new-tweet-form").serialize(); // serializes the form data
      console.log(data);
      $.ajax({
        type: 'POST',
        url: '/tweets',
        data: data
      }).done(function(data) {
        console.log('data sent to server');
        console.log(data);

      });
    }
    
  });

  $.ajax({
    url: '/tweets',
    method: 'GET',
  }).then((tweets) => {
    renderTweets(tweets);

  });


});
 
