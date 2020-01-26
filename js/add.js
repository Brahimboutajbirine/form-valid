var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var first = document.getElementById("first");
var second = document.getElementById("second");



const o = document.querySelector('.one');
o.addEventListener('submit', function(event){
	if (o.checkValidity() === false) {
		event.preventDefault();
		event.stopPropagation();
	}if (o.checkValidity() === true){
		event.preventDefault();
		event.stopPropagation();
		one.style.display = "none";
		two.style.display = "inline";
	}
		o.classList.add('was-validated');	
});

const t = document.querySelector('.two');
t.addEventListener('submit', function(event){
	if (t.checkValidity() === false) {
		event.preventDefault();
		event.stopPropagation();
	}if (t.checkValidity() === true){
		event.preventDefault();
		event.stopPropagation();
		one.style.display = "none";
		two.style.display = "none";
		three.style.display = "inline";
	}
		t.classList.add('was-validated');	
});

const tre = document.querySelector('.three');
tre.addEventListener('submit', function(event){
	if (tre.checkValidity() === false) {
		event.preventDefault();
		event.stopPropagation();
	}
		tre.classList.add('was-validated');	
});




