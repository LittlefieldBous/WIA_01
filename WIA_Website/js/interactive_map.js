// JavaScript Document
// Written by Chris Converse
// for Lynda.com

$(document).ready(function() {
// begin Ready

	//...................................................
	// When the form changes
	$('#mapForm').change(function() { //selects the mapForm div adds a change function
	
		var selectedCity = $('#mapForm option:selected').val(); //creates a variable calls a value method
		if (selectedCity == 'ALL'){ //if else statement/conditional
			$('a.dot').slideDown(1000);
		}else{
			$('a.dot[city = "'+selectedCity+'"]').slideDown(1000);
			$('a.dot[city != "'+selectedCity+'"]').slideUp(1000);
		}
		
	});
	
	//...................................................
	// When a dot is clicked
	$('a.dot').click(function(){

		$('a.dot').removeClass('selected'); //selected shifts our dot color
		$(this).addClass('selected');

		var marina = '.city_detail#' + $(this).attr('marina');//create variable marina
		var htmlCode = $(marina).html();

		$('.detail_container').fadeOut(500, function(){
			$('.detail_container .city_detail').html(htmlCode);
			$('.detail_container').fadeIn(500);
		});

	});

// end Ready
});