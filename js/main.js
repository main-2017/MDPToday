// Main Animations and JS functions
$(document).ready(function(){

	$.ajax({
    // la URL para la petición
    url : 'http://dataservice.accuweather.com/currentconditions/v1/7893?apikey=nperqMePULASOq3yg594AZvSGib1OHdi%20&language=es-ar&details=true',
 
    // la información a enviar
    // (también es posible utilizar una cadena de datos)
    data : null,
 
    // especifica si será una petición POST o GET
    type : 'GET',
 
    // el tipo de información que se espera de respuesta
    dataType : 'json',
 
    // código a ejecutar si la petición es satisfactoria;
    // la respuesta es pasada como argumento a la función
    success : function(json) {
        var temp = (json[0].Temperature.Metric.Value);
        $('#current-temp').text(temp + '˚');
        console.log(json[0].TemperatureSummary.Past12HourRange.Minimum.Metric.Value);
    },
 
    // código a ejecutar si la petición falla;
    // son pasados como argumentos a la función
    // el objeto de la petición en crudo y código de estatus de la petición
    error : function(xhr, status) {
        console.log('Disculpe, existió un problema');
    },
 
    // código a ejecutar sin importar si la petición falló o no
    complete : function(obj) {
        
    }
});


});
	var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre`");
	var f=new Date();
	var dateShow = document.getElementById("dateField");
	dateShow.innerHTML = f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
	
$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		$('.weather-btn').css({ "height": "100%"});
		$('#navbarSupportedContent').css({"right":"27%","bottom":"17%"});
		$('.img-logo').attr("src","img/logos/logo-35.png");
		$('.img-logo').css({"height":"35px","margin":"0% 10%"});

		
	} else {
		$('.weather-btn').css({ "height": "50%"});
		$('#navbarSupportedContent').css({"right":"1%","bottom":"1%"});
		$('.img-logo').attr("src","img/logos/logoslogan-08.png");
		$('.img-logo').css({"height":"60px","margin":"3% 10%"});
	}
	
});