function addArticle() {
	$("#articles").empty();
	let articleTemplate = $('#articleTemplate').html();
	Mustache.parse(articleTemplate);
	let articleRendered=Mustache.render(articleTemplate, {
		Titre:"Bonjour",
		Sstitre:"Je m'appelle",
		Contenu:"Mehdi"
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