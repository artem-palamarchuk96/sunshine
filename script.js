
window.onload = function() {

	var model = [

	]

	var saveBtn = document.getElementById('saveBtn');
	var clearBtn = document.getElementById('clearBtn');
	var inputs = document.getElementsByTagName('input');

	if (localStorage.length == 0) {
		data = model;
	} else {
		data = JSON.parse(localStorage.getItem('data'));
		console.log(data)
		var output = document.getElementById('output');
		for (i = 0; i < data.length; i++) {
			output.innerHTML += "ИМЯ " + data[i].name + " Фамилия " + data[i].surname + "<br/>";
		}
		
	}

	saveBtn.onclick = function () {
		data.push({
			name: inputs[0].value,
			surname: inputs[1].value,
			patronymic: inputs[2].value});

		console.log(data);
		localStorage.setItem('data', JSON.stringify(data));
		
		output.innerHTML += "ИМЯ " + data[i].name + " Фамилия " + data[i].surname + "<br/>";
	}

	clearBtn.onclick = function() {
		output.innerHTML = "";
		localStorage.clear();
	}
}


// var addPerson = function (name, surname, patronymic) {
		
// 		data.push({
// 			name: name,
// 			surname: surname,
// 			patronymic: patronymic});

// 		console.log(data);
// 		localStorage.setItem('data', JSON.stringify(data));
// 	}

