function addArticle(titre, sstitre, contenu) {
	let articleTemplate = $('#articleTemplate').html();
	Mustache.parse(articleTemplate);
	let articleRendered=Mustache.render(articleTemplate, {
		Titre:titre,
		Sstitre:sstitre,
		Contenu:contenu
	});
	$("#articles").append(articleRendered);
}

function addArticlePicture1(titre, sstitre, contenu1, img, titreImage, contenu2) {
	let articleTemplate = $('#articleTemplatePicture1').html();
	Mustache.parse(articleTemplate);
	let articleRendered=Mustache.render(articleTemplate, {
		Titre:titre,
		Sstitre:sstitre,
		Contenu1:contenu1,
		image:img,
		TitreImage:titreImage,
		Contenu2:contenu2
	});
	$("#articles").append(articleRendered);
}

function endArticle() {
	let endTemplate = $('#EndArticleTemplate').html();
	Mustache.parse(endTemplate);
	let endRendered=Mustache.render(endTemplate, {});
	$("#articles").append(endRendered);
}

//main
$(document).ready(function() {
	$("#articles").empty();
	let Titres=["Raspberry"];
	let Sstitres=["Comment la connecter à un réseau wifi."];
	let Contenus1=["Pour connecter la Raspberry à un réseau wifi, il faut créer un fichier wpa_supplicant.conf à la racine de la partition boot. Ce fichier doit contenir ceci:"];
	let Images=["./img/wpa_sup.png"];//Mettre "NONE" si pas d'image pour le template
	let TitresImages=["wpa_supplicant.conf"];//Mettre "NONE" si pas d'image pour le template
	let Contenus2=["Pour se connecter ultérieurement en ssh à la Raspberry, il suffit de créer un fichier vide appelé 'ssh', également à la racine de la partition boot."];
	for(let i=0; i<Titres.length; i++) {
		if (Images[i]=="NONE")
			addArticle(Titres[i], Sstitres[i], Contenus1[i]);
		else
			addArticlePicture1(Titres[i], Sstitres[i], Contenus1[i], Images[i], TitresImages[i], Contenus2[i]);
	}
	endArticle();
});