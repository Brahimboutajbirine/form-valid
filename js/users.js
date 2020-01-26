// form validation

const form = document.querySelector(".needs-validation");
form.addEventListener('submit', function(event){
	if (form.checkValidity() === false) {
		event.preventDefault();
		event.stopPropagation();
	}
	form.classList.add('was-validated');
});

const formTwo = document.querySelector(".view");
formTwo.addEventListener('submit', function(event){
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  formTwo.classList.add('was-validated');
});

const formThree = document.querySelector(".edit");
formThree.addEventListener('submit', function(event){
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  formThree.classList.add('was-validated');
});


const formFour = document.querySelector(".view");
formFour.addEventListener('submit', function(event){
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  formFour.classList.add('was-validated');
});
// search input


$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
