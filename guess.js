var name = prompt('Welcome! What\'s your name?');

var secretNumber = (Math.floor(Math.random() * 100) + 1);

if(name.length > 0) {
	alert('Hi, ' + name + '.')

	for(var input = prompt('Please guess a number between 1 and 100.'); input != secretNumber; input = prompt('Guess again!')){
		if(input < secretNumber){
			alert('Too low!')
		}
		else if(input > secretNumber) {
			alert('Too high!')
		}
	}

  alert('You got it!');
}

