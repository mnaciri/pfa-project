function addArticle() {
	$("#articles").empty();
	let articleTemplate = $('#articleTemplate').html();
	Mustache.parse(articleTemplate);
	let articleRendered=Mustache.render(articleTemplate, {
		Titre:"Introduction:",
		Sstitre:"Notre Projet",
		Contenu:"Le but de notre projet est de faire communiquer en WIFI plusieurs véhicules autonomes afin de les faire circuler en convois. Pour cela, nous souhaitons utiliser le protocole 802.11p qui est adapté à la communication entre véhicules."
	});
	$("#articles").append(articleRendered);

	let endTemplate = $('#EndArticleTemplate').html();
	Mustache.parse(endTemplate);
	let endRendered=Mustache.render(endTemplate, {});
	$("#articles").append(endRendered);
}

//main
$(document).ready(function() {
	addArticle();
});