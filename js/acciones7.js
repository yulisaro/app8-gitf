// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){ //escuchador de eventos
	$('#izquierda').on("swipeleft",function(){ //Deslizar a la izquierda
		navigator.notification.alert("Deslizó hacia la izquierda",function(){"aplicación 7", "Ok"});//Aparece mensaje alert
	});// cierra swipe izquierda
	$('#derecha').on("swiperight",function(){ //Delizar derecha
		navigator.notification.confirm("¿Qué quieres hacer?",function(op){ //Aparece Mensaje de Confirmar
			switch(op) // Variable op para las opciones 
			{
				case 1:
				navigator.notification.beep(1); // Suena el dispositivo 
				break;
				
				case 2:
				navigator.notification.vibrate(3000); //Vibra el dispositivo
				break;
			}
		},"aplicación 7","Beepear,Vibrar,Cancelar");
		});
	},false);
});

