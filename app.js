$(function () {
	fizzer(parseInt(prompt("Please enter a number")));
});

function fizzer (val) {
	for (var i = 1; i <= val; i++)
	{
		if (i % 15 === 0)
			$('body').append("<p>FizzBuzz</p>");
		else if (i % 3 === 0)
			$('body').append("<p>Fizz</p>");
		else if (i % 5 === 0)
			$('body').append("<p>Buzz</p>");
		else
			$('body').append("<p>"+i+"</p>");
	}
}