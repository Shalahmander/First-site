$(function() {
	(function() {
		var day = new Date();
		var hour = day.getHours();
		var welcome;
		if (hour > 5) { 
			welcome = 'Good morning, '; 
		}
		if (hour > 12) { 
			welcome = 'Good afternoon, ';
		}
		if (hour > 18) { 
			welcome = 'Good evening, '; 
		}
		else { welcome = 'Hello, '; }
		$('.jumbotron').append('<div>' + welcome + ' my friend!<br> This is my site!<div>');
	}());

	$('body').scrollspy({ target: '#navbar-example' })
});