//signup.js 
// add your JavaScript code to this file

$(function() {
	var stateSelect = $('#state');
	var option;

	var idx;
	var state;
	for (idx = 0; idx < usStates.length; ++idx) {
		state = usStates[idx];
		option = $(document.createElement('option'));
		option.attr('value', state.abbreviation);
		option.html(state.name);
		stateSelect.append(option);
	}

	$('.signup-form').submit(function() {
		var signupForm = $(this);
		// var addr1Input = signupForm.find('input[name="addr-1"');
		var addr1Value = signupForm.find('input[name="addr-1"]').val();

		if (addr1Value.length > 0) {
			var zipValue = signupForm.find('input[name="zip"]').val();

			if (zipValue.length == 0) {
				alert('You have to type your zip if you entered an address.');
				return false;
			}
		}
	});

	$('.cancel-signup').click(function() {
		window.location = 'http://www.google.com';

	});



});