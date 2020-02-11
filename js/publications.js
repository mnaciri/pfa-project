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
	let Titres=["Compte-rendu", "Compte-rendu", "Compte-rendu", "Compte-rendu"];
	let Sstitres=["Introduction et semaine du 13/01/20", "Semaine du 20/01/20", "Semaine du 27/01/20", "Semaine du 03/02/20"];
	let Contenus1=[
        "La première semaine de projet de génie logiciel du semestre 8 a fait l'objet d'une mise au point commune entre les sept membres du groupe quant à l'organisation et la répartition globale du travail. La distribution des tâches étant une question ayant déjà été largement abordée au cours du processus de rédaction du cahier des charges du premier semestre, il a été assez rapidement convenu que la production du démonstrateur pouvait être vue comme étant découpée en trois parties à priori indépendantes : <ol> <li>Le développement de l'interface de l'application permettant au client de manipuler le démonstrateur ;</li><li> Le développement des fonctionnalités de contrôle inhérentes à chacune des voitures (guidage, vitesse, tracking avec la caméra frontale...) ;</li><li> La mise en place de l'infrastructure de communication inter-véhicules comprenant l'implémentation simulée du protocole 802.11p.</li></ol>",
        "CR 20",
        "CR 27",
        "CR 03"
    ];
	let Images=["-", "NONE", "NONE", "NONE"]; //Mettre "NONE" si pas d'image pour le template, "-" si second paragraphe présent quand même
	let TitresImages=["-", "NONE", "NONE", "NONE"]; //Mettre "NONE" si pas d'image pour le template, "-" si second paragraphe présent quand même
	let Contenus2=[
        "Chacune de ces trois sous-tâches ont vu leur développement s'initier au semestre 7 dans le cadre du benchmarking des trois kits de véhicules nous ayant été proposés. Les tâches ont dès lors été naturellement réparties de la façon suivante : <ul><li>Partie IHM et application : Alexandre, Mehdi et Aïssam ;</li><li>Partie contrôle et tracking : Julien, Raphaël et Alexandre ;</li><li>Partie réseau : Mehdi, Maël et Amaury.</li></ul>", 
        "",
        "",
        ""
    ];
	for(let i=0; i<Titres.length; i++) {
		if (Images[i]=="NONE")
			addArticle(Titres[i], Sstitres[i], Contenus1[i]);
		else
			addArticlePicture1(Titres[i], Sstitres[i], Contenus1[i], Images[i], TitresImages[i], Contenus2[i]);
	}
	endArticle();
});
