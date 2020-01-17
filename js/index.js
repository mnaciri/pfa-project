let titre=[];
let sstitre=[];
let contenu=[];

function fillTitre() {
	titre.push("Introduction");
	titre.push("Contexte:");
	titre.push("Contexte:");
}

function fillSstitre() {
	sstitre.push("Objectif de notre projet");
	sstitre.push("Introduction");
	sstitre.push("ITS-G5 vs C-V2X");
}

function fillContenu() {
	contenu.push("Le projet consiste en la production d’un démonstrateur de véhicules connectés. Il s’agit en l’occurrence de simuler le fonctionnement des communications inter-véhicules en implémentant un système miniature composé d’une station émettrice en mesure d’échanger des informations avec un ensemble de véhicules. En outre, les principaux objectifs du démonstrateur sont: permettre à un véhicule de rouler de manière autonome en suivant une ligne ou en respectant une trajectoire tout en évitant les obstacles, permettre à plusieurs véhicules d’échanger des informations internes ainsi que des informations sur l’environnement, permettre à plusieurs véhicules de rouler en convoi (platooning)");
	contenu.push("Le développement de systèmes de transport intelligents coopératifs (C-ITS) propose d’établir un ensemble de méthodes s’appuyant sur les technologies de télécommunications dans l’optique de mettre en corrélation plusieurs véhicules afin qu’ils puissent s’échanger librement un certain nombre de données. Ces échanges se manifesteraient par des communications entre véhicules (V2V), entre un véhicule et une infrastructure (V2I), entre un véhicule et un piéton (V2P) et, de manière plus générale, entre un véhicule et toute entité susceptible d’avoir un rôle important dans le maintien, voire dans l’accroissement de la sécurité routière (V2X). Le concept étant encore relativement jeune, l’implémentation de tels systèmes est encore débattu, mais deux technologies semblent se démarquer et sont en concurrence pour en devenir le prochain standard.")
	contenu.push("L’ITS-G5 offre la possibilité d’une communication directe entre véhicules par le biais d’une technologie fondée sur le standard IEEE 802.11p, qui ouvre le Wifi aux ITS depuis plusieurs années. En opposition à l’ITS-G5 est envisagée la solution C-V2X, plus récente, qui propose en plus d’utiliser les réseaux cellulaires des opérateurs mobiles afin de faire communiquer les véhicules entre eux. Cette solution exploite pour le moment la 4G (on parle de LTE-V2X), mais devrait progressivement faire la transition vers la 5G (5G-V2X). L’avantage du 802.11p est sa latence. En effet, le 802.11p se situe sur une plage de fréquences en dehors du scope du 802.11 standard (autour des 5.9 GHz). Ces caractéristiques du 802.11p réduisent la portée du signal mais confèrent une meilleure latence afin que les données soient reçues le plus rapidement possible.");
	//contenu.push("");
}

function emptyArticle() {
	$("#articles").empty();
}

function addUniqueArticle(i) {
	let articleTemplate = $('#articleTemplate').html();
	Mustache.parse(articleTemplate);
	let articleRendered=Mustache.render(articleTemplate, {
		Titre:titre[i],
		Sstitre:sstitre[i],
		Contenu:contenu[i]
	});
	$("#articles").append(articleRendered);
}

function addEndArticle() {
	let endTemplate = $('#EndArticleTemplate').html();
	Mustache.parse(endTemplate);
	let endRendered=Mustache.render(endTemplate, {});
	$("#articles").append(endRendered);
}

function addAllArticles() {
	fillTitre();
	fillSstitre();
	fillContenu();
	emptyArticle();
	for(let i=0; i<titre.length; i++) {
		addUniqueArticle(i);
	}
	addEndArticle();
}

//main
$(document).ready(function() {
	addAllArticles();
});