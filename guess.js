var secretNumber = (Math.floor(Math.random() * 99) + 1);
var guessTooLow = 'Too low.'
var guessTooHigh = 'Too high.'
var guessCorrect = 'You got it! <a href=file:///Users/murphydbuffalo/Dropbox/launchacademy/guess_the_number_js/guess.html> Play Again </a>'
var notANumber = 'Please enter an integer between 1 and 100.'

/*function validNumberCheck(string, message){
	
}*/

//Call on('submit') on the FORM not the submit button or ID
//You are submitting a form, not a button
$('form').on('submit', function(event) {
  event.preventDefault();

	var $guess = parseInt( ($('#guess').val()), 10 );

  $('#guess').val('');

	if($guess < secretNumber){
		$('.messages p').html(guessTooLow);
	}
	else if($guess > secretNumber) {
		$('.messages p').html(guessTooHigh);
	}
	else if($guess === secretNumber){
		$('.messages p').html(guessCorrect);
	}
	if(parseInt($guess, 10) > 0 && parseInt($guess, 10) < 101 ){
  	$('.guesses ul').append('<li>' + $guess + '</li>');
  } else {
		$('.messages p').html(notANumber);
	}
});





