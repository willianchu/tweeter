/* eslint-disable no-undef */
// Test / driver code (temporary). Eventually will get this from the server.
console.log('client.js is running');

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1000113959088
  }
];



$(()=> {
  const renderTweets = function(tweets) {
    for (const tweetIndex in tweets) { // loops through tweets
      const $tweet = createTweetElement(tweets[tweetIndex]); // calls createTweetElement for each tweet
      $('#tweets-container').append($tweet); // takes return value and appends it to the tweets container
    }
  };

  const createTweetElement = function(tweetData) {
    // let $tweet = /* Your code for creating the tweet element */
    
    const $idImg = $('img').attr('src',`${tweetData.user.avatars}`); // child 1
    const $name = $('<h3>').text(`${tweetData.user.name}`); // child 2
    const $preId = $('<pre>').append($idImg, $name); // parent header-id

    const $marker = $('<h4>').text(`${tweetData.user.handle}`); // child 3
    const $header = $('<header>').addClass('tweet-header').append($preId, $marker); 
    
    const $content = $('<p>').addClass('tweet-content').text(`${tweetData.content.text}`); // child 4
    
    const iflag = $('<i>').addClass('fa fa-flag'); // child 7
    const iretweet = $('<i>').addClass('fa fa-retweet'); // child 8
    const ilike = $('<i>').addClass('fa fa-heart'); // child 9
    const $footerIcons = $('<p>').addClass('footer-social').append(iflag, iretweet, ilike); // parent footer-icons

    const iClock = $('<i>').addClass('fa fa-clock-o'); // child 5
    const icalendar = $('<i>').addClass('fa fa-calendar').text(` ${timeago.format(tweetData.created_at)}`); // child 6

    const $footerTime = $('<p>').addClass('footer-time').append(iClock, icalendar); // parent footer-time

    const $footer = $('<footer>').addClass('tweet-footer').append($footerTime).append($footerIcons); // parent footer

    const $tweet = $('<article>').addClass('tweet'); // parent tweet

    $tweet.append($header, $content, $footer); // parent tweet

    const $tweetsContainer = $('#tweets-container');

    $tweetsContainer.append($tweet);
      
    return $tweet;
  };

  $('#new-tweet-form').on('submit', function(event) {
    event.preventDefault(); // prevents page from reloading
    console.log( "the form has submmited");
    
  });

  renderTweets(data);

});