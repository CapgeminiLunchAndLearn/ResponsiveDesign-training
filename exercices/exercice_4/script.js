// Fonction appelée lors du chargement de la page
$(window).ready(function(){
	writeWidthSize();
});

// Fonction appelée lors du redimensionnement de la page
$(window).resize(function(){
    writeWidthSize();
});

// Fonction qui récupère la largeur de la fenêtre et l'injecte dans la page
function writeWidthSize(){
	var width = window.innerWidth;
	$('#largeur_fenetre').html(width);
	
	if(width >= 1200){
		$('#type_fenetre').html('lg');		
	} else if(width >= 992){
		$('#type_fenetre').html('md');		
	} else if (width >= 768){
		$('#type_fenetre').html('sm');		
	} else {
		$('#type_fenetre').html('xs');		
	}
}