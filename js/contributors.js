function addArticle(nom, prenom, mail, img) {
	let articleTemplate = $('#articleTemplate').html();
	Mustache.parse(articleTemplate);
	let articleRendered=Mustache.render(articleTemplate, {
		Titre:nom,
		Sstitre:prenom,
		Contenu:mail,
		image:img
	});
	$("#articles").append(articleRendered);
}

function endArticle() {
	let endTemplate = $('#EndArticleTemplate').html();
	Mustache.parse(endTemplate);
	let endRendered=Mustache.render(endTemplate, {});
	$("#articles").append(endRendered);
}

function separateArticle() {
	let separateTemplate = $('#separateArticleTemplate').html();
	Mustache.parse(separateTemplate);
	let separateRendered=Mustache.render(separateTemplate, {});
	$("#articles").append(separateRendered);
}

//main
$(document).ready(function() {
	$("#articles").empty();
	let noms=["CHIA", "GEYNET", "DISDIER", "MIRANDE", "JAFFRAIN", "CHANCOGNE", "NACIRI"];
	let prenoms=["Aissam", "Raphaël", "Alexandre", "Julien", "Amaury", "Mael", "Mehdi"];
	let mails=["aissam.chia@bordeaux-inp.fr", "rgeynet@enseirb-matmeca.fr", "alexandre.disdier@bordeaux-inp.fr", "julien.mirande@bordeaux-inp.fr", "amaury.jaffrain@bordeaux-inp.fr", "mael.chancogne@bordeaux-inp.fr", "mehdi.naciri@bordeaux-inp.fr"];
	let images=["./img/aissam.jpg", "./img/avatar-homme.png", "./img/avatar-homme.png", "./img/avatar-homme.png", "./img/avatar-homme.png", "./img/mael.jpg", "./img/avatar-homme.png"]
	for(let i=0; i<noms.length; i++) {
		addArticle(noms[i], prenoms[i], mails[i], images[i]);
		if (i<noms.length-1)
			separateArticle();
		else
			endArticle();
	}
});