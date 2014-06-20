var secretNumber = (Math.floor(Math.random() * 99) + 1);

$('#submit').on('click', function(event) {
  event.preventDefault();
	var $guess = $('#guess').val();
	$('.guesses ul').append('<li>' + $guess + '</li>');
})

/*function getInput() {
	prompt('Please guess a number between 1 and 100.');
}


	for(var input = getInput(); input != secretNumber; input = prompt('Guess again!')){
		if(input < secretNumber){
			alert('Too low!');
		}
		else if(input > secretNumber) {
			alert('Too high!');
		}
	}

alert('You got it!');*/




