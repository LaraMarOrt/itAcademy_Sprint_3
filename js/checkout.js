
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Creamos las Expresiones Regulares
	const regfName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	const regfEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
	const regfAddress = /^.{3,}$/;
	const regfLastN = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	const regfPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=\S+$).{4,8}$/;
	const regfPhone = /[0-9]{9}/;

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	var alertSucess = document.getElementById("alertSucess");
	var alertDanger = document.getElementById("alertDanger");

		
	alertDanger.classList.add("d-none");
	alertSucess.classList.add("d-none");
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || !regfName.test(fName.value)){
		error++;
	}

	if(fEmail.value == "" || !regfEmail.test(fEmail.value)){
		error++;
	}
	
	if(fAddress.value == "" || !regfAddress.test(fAddress.value)){
		error++;
	}

	if(fLastN.value == "" || !regfLastN.test(fLastN.value)){
		error++;
	}

	if(fPassword.value == "" || !regfPassword.test(fPassword.value)){
		error++;
	}

	if(fPhone.value == "" || !regfPhone.test(fPhone.value)){
		error++;
	}
	 
	if(error>0){

		alertDanger.classList.remove("d-none");

	}else{

		alertSucess.classList.remove("d-none");
	}

}

