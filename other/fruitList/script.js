var fruits = [
	"apple",
	"pinapple",
	"banana",
	"mango"
];



$(document).ready(function(){

	$('.button').click(function(){
		console.log('click detected');
		$('h1').toggleClass('reveal');
	});

	$(".element").click(function(){
		console.log("clicking element");
		$(this).toggleClass('play');
	});

  $('h2').click(function(){
		var sample = $(this).text();
		console.log(sample);
		$('.button').text(sample);
	})

$('#makelist').click(function(){
	console.log('clicked');

	for(var i=0; i< fruits.length; i++){
	console.log(fruits[i]);
	$('#fruitslist').append("<li> " + fruits[i] + "</li>");
	};

});

});
