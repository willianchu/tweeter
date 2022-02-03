/*
* Client-side JS logic goes here
* jQuery is already loaded
* Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

// Test / driver code (temporary). Eventually will get this from the server.

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};

const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
}



const createTweetElement = function(tweet) {
  let $tweet = /* Your code for creating the tweet element */
  
  const $idImg = $('img').attr('src','/images/profile-hex.png'); // child 1
  const $name = $('<h3>').text('Willian Chu'); // child 2
  const $preId = $pre.append($idImg, $name); // parent header-id
  const $marker = $('<h4>').text('@WillianChu'); // child 3
  const $header = $('<header>').addClass('tweet-header').append($preId, $marker); 
  
  const $content = $('<p>').text('If I have seen further it is by standing on the shoulders of giants'); // child 4

  const iClock = $('<i>').addClass('fa fa-clock-o'); // child 5
  const icalendar = $('<i>').addClass('fa fa-calendar').text('4 days ago'); // child 6
  const $footerTime = $('<p>').append(iClock, icalendar); // parent footer-time

  const iflag = $('<i>').addClass('fa fa-flag'); // child 7
  const iretweet = $('<i>').addClass('fa fa-retweet'); // child 8
  const ilike = $('<i>').addClass('fa fa-heart'); // child 9

  const $footerIcons = $('p').append(iflag, iretweet, ilike); // parent footer-icons
  const $footer = $('<footer>').class('footer').append($footerIcons, $footerTime); // parent footer

  const $tweet = $('<article>').addClass('tweet'); // parent tweet

  $tweet.append($header, $content, $footer); // parent tweet

  // const $tweetsContainer = $('#tweets-container');

  // $tweetsContainer.append($tweet);
    
  return $tweet;
}

// renderTweets(data);
const $tweetsContainer = $('#tweets-container');

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
