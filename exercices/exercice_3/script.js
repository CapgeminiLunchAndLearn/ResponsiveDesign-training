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
}