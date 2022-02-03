
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

  $(".error").hide(); // Hide error message (if any)
  
  

  const renderTweets = function(tweets) {
    $('#tweets-container').empty();
    let arraySize = tweets.length - 1;
    for (let tweetIndex = arraySize; tweetIndex > 0; tweetIndex--) { // loops through tweets
      const $tweet = createTweetElement(tweets[tweetIndex]); // calls createTweetElement for each tweet
      $('#tweets-container').append($tweet); // takes return value and appends it to the tweets container
    }
    addListeners(); // ask to a tutor about this - I don´t have to rubish the old listeners?
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
    
      if ($(".error").is(":visible")) {
        $(".error").hide();
      } else {
        $(".error").show();
      }
    } else {
      const data = $("#new-tweet-form").serialize(); // serializes the form data
      if (data === "" || data === "text=") {
        alert('You have not entered a tweet');
      } else {
        console.log(data);
        $.ajax({
          type: 'POST',
          url: '/tweets',
          data: data
        }).done(function(data) {
          console.log('data sent to server');
          console.log(data);
          loadTweets();
          $('#new-tweet-form').trigger('reset'); // clears the form
          $('#char-count').html(140); // resets the character count
        
        });

      }
    }
    
  });

  //Inside your client.js file and within the document ready function, define a function called loadTweets that is responsible for fetching tweets from the http://localhost:8080/tweets page.

  const loadTweets = function() {

    $.ajax({
      url: '/tweets',
      method: 'GET',
    }).then((tweets) => {
      renderTweets(tweets);

    });
  };

  loadTweets();

});
 
