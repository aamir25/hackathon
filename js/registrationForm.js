// TEAM DATA
const data = {};

var noOfMembers = document.getElementById('noOfMembers');

var teamNames = document.getElementById('teamNames');
var teamPhones = document.getElementById('teamPhones');

//DEFINING EVENTS
noOfMembers.addEventListener('keyup', displayMembersForm);

//EVENT LISTENERS
function displayMembersForm(event) {
	if (event.target.value >= 5) {
		document.getElementById('membersError').innerHTML = 'Maximum 4 members per team.';
		return;
	}

	document.getElementById('membersError').innerHTML = '';
	data.noOfMembers = event.target.value;
	emptyNode(teamNames);
	emptyNode(teamPhones);
	createFormElements(event.target.value);
}

//HELPERS
function emptyNode(node) {
	let fc = node.firstChild;

	while( fc ) {
	    node.removeChild( fc );
	    fc = node.firstChild;
	}
}

function createFormElements(number) {
	//Names
	for (i=0;i<number;i++) {
		// Form group
		var formGroup = document.createElement('div');
		formGroup.setAttribute('class', 'form-group');

        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.setAttribute('class', 'form-control');
        input.setAttribute('id', 'member' + i);
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'member' + (i+1) + ' name *');
        input.setAttribute('required', '');
        input.setAttribute('data-validation-required-message', 'Please enter member' + (i+1) + ' name.');

        // <p> for errors
        var pError = document.createElement('p');
        pError.setAttribute('class', 'help-block text-danger');

        // appending to div
        formGroup.appendChild(input);
        formGroup.appendChild(pError);
	    
        //appending to teamNamesDiv
	    teamNames.appendChild(formGroup);
    }

    //Phone Numbers
	for (i=0;i<number;i++) {
		// Form group
		var formGroup = document.createElement('div');
		formGroup.setAttribute('class', 'form-group');

        // Create an <input> element, set its type and name attributes
        var input = document.createElement("input");
        input.setAttribute('class', 'form-control');
        input.setAttribute('id', 'member' + i + 'Phone');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'member' + (i+1) + ' Phone *');
        input.setAttribute('required', '');
        input.setAttribute('data-validation-required-message', 'Please enter member' + (i+1) + ' phone.');

        // <p> for errors
        var pError = document.createElement('p');
        pError.setAttribute('class', 'help-block text-danger');

        // appending to div
        formGroup.appendChild(input);
        formGroup.appendChild(pError);
	    
        //appending to teamPhoneDiv
	    teamPhones.appendChild(formGroup);
    }
}