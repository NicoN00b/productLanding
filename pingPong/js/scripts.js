var pingPong = function(userNum) {

  var submitResult = [];

  for (var i = 1; i <= userNum; i++) {
    if ((i % 15) === 0) {
    submitResult.push('ping pong');
    } else if ((i % 5) === 0) {
    submitResult.push('pong');
    } else if ((i % 3) === 0) {
    submitResult.push('ping');
    } else {
    submitResult.push(i);
    }
  }
  return submitResult;
};

$(document).ready(function() {
  $('form#pingpong').submit(function(event) {
    $('ul').empty();
    var userNum = parseInt($('input#userNum').val());
    var resultPing = pingPong(userNum);

    for (var i = 0; i < resultPing.length; i++ ) {
      $('.resultPing').append('<li>' + resultPing[i] + '</li>')
    };
  event.preventDefault();
  });
});
