// Main Animations and JS functions
$(document).ready(function(){

	
});
	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre`");
	var f=new Date();
	var dateShow = document.getElementById("dateField");
	dateShow.innerHTML = f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
	
