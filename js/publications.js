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
        "<p>La première semaine de projet de génie logiciel du semestre 8 a fait l'objet d'une mise au point commune entre les sept membres du groupe quant à l'organisation et la répartition globale du travail. La distribution des tâches étant une question ayant déjà été largement abordée au cours du processus de rédaction du cahier des charges du premier semestre, il a été assez rapidement convenu que la production du démonstrateur pouvait être vue comme étant découpée en trois parties à priori indépendantes : <ol> <li>Le développement de l'interface de l'application permettant au client de manipuler le démonstrateur ;</li><li> Le développement des fonctionnalités de contrôle inhérentes à chacune des voitures (guidage, vitesse, tracking avec la caméra frontale...) ;</li><li> La mise en place de l'infrastructure de communication inter-véhicules comprenant l'implémentation simulée du protocole 802.11p.</li></ol>Chacune de ces trois sous-tâches ont vu leur développement s'initier au semestre 7 dans le cadre du benchmarking des trois kits de véhicules nous ayant été proposés. Les tâches ont dès lors été naturellement réparties de la façon suivante : <ul><li>Partie IHM et application : Alexandre, Mehdi et Aïssam ;</li><li>Partie contrôle et tracking : Julien, Raphaël et Alexandre ;</li><li>Partie réseau : Mehdi, Aïssam, Maël et Amaury.</li></ul></p>",
        "<h3>Partie IHM</h3> <p>Nous devions sélectionner les outils nous permettant de développer l'application principale avec laquelle interagira le client pour manipuler le démonstrateur ainsi que les véhicules séparément. Une brêve étude de l'existant nous a amenés à porter notre choix sur Python 3 et son paquetage Tkinter, par commodité de développement, sachant que l'environnement de développement des cartes Raspberry Pi est facilement configurable dans ce même langage et que Tkinter est réputé pour produire rapidement des résultats en matière d'interface. Nous en tenons pour preuve le fait que nous avons d'ores et déjà produit une première version (bien qu'épurée) de l'interface contenant des sliders et des boutons destinés à réguler la vitesse ainsi que l'angle des roues avant d'un véhicule préselectionné. Le mappage de ces widgets vers des routines concrètes de commande constitue l'objectif de la semaine suivante. </p><h3>Partie contrôle et tracking</h3><p>En matière de tracking, le travail du semestre 8 s'inscrit dans la continuité de la prise en main de la bibliothèque de traitement d'images OpenCV. Nous nous sommes appropriés le code (fourni par le constructeur du véhicule) permettant de produire une sortie vidéo issue de la caméra frontale et accompagnée des coordonnées des lignes repérées à l'issue du traitement de chaque frame.</p> <h3>Partie réseau</h3> <p>Nous avons implémenté une première version qui se connecte en ssh à la voiture et lance un interpréteur Python. Le reste de notre programme s'occupe de renvoyer du texte correspondant au code permettant de contrôler la voiture. Ce texte retourné sur la sortie standard est redirigé vers l'entrée de l'interpréteur Python.</p>",
        "<h3>Partie IHM</h3><p>Les sliders et les boutons ajoutés la semaine précédente sont maintenant opérationnels : elles pointent sur des routines qui envoient des commandes SSH vers un véhicule en particulier (paquetage Fabric de Python >= 2). Les commandes sont de la forme <code>python3 <script.py> <paramètres></code> et supposent que les scripts en question ont été préalablement ajoutés sur le répertoire racine de la carte de la voiture. Le développement des autres widgets (carte des positions, console...) a également débuté, bien que ces derniers soient encore inopérants.</p> <h3>Partie contrôle et tracking</h3><p>Outre le tracking, il faut aussi implanter au sein de la carte Raspberry Pi de chaque voiture des scripts permettant d'effectuer des opérations élémentaires telles que le réglage de la vitesse des voitures ou celui de l'angle des roues avant. L'API fournie par le constructeur du véhicule permet à ces scripts de n'être composés que de quelques lignes seulement. L'ordre de marche d'une voiture, par exemple, se limite à l'instatiation d'un objet <code>picar.Backwheels</code> sur lequel sont appelées des méthodes de mutateur de vitesse ou d'arrêt. L'idée est d'exécuter par la suite ces routines par le biais d'une connexion SSH que l'application manipulée par le client aura préalablement initialisée.</p> <h3>Partie réseau</h3><p></p>",
        "<h3>Partie IHM</h3><p>L'interface a largement été enrichie. Un système d'onglets a été mis en place : pour le moment, un onglet principal comprend un bloc de widgets de contrôle du circuit, accompagné d'une console d'affichage de messages ainsi que d'une carte développée de façon à pouvoir facilement mettre à jour la position des véhicules ayant récemment émis leurs coordonnées. <br> Le second onglet comprend le module de contrôle individuel d'une voiture via SSH issue des résultats produits lors de la semaine précédente. <br> Enfin, un soin plus important a été porté sur le design et la pseudo charte graphique, de façon à améliorer l'ergonomie globale de l'application, à défaut d'être le point le plus important du projet.</p> <h3>Partie contrôle et tracking</h3><p>Les bases de OpenCV étant comprises, nous avons commencé à manipuler le code de traitement de la sortie vidéo de la caméra frontale pour en extraire les lignes repérées par la bibliothèque qui représentent une bande noire sur fond clair sur laquelle aura préalablement été posé le véhicule. Nous avons fait en sorte que l'angle des roues s'adapte au décalage de la voiture par rapport à cette bande, de façon à ce que celui-ci puisse suivre le circuit qu'elle définit. Un premier algorithme relativement trivial évalue le décalage de la voiture en fonction de l'écart entre le centre de l'image capturée avec la moyenne artihmétique des points composant la bande.</p> <h3>Partie réseau</h3><p>Dans cette version, la voiture communique avec l'IHM via la commande netcat. La voiture commence par se connecter au réseau en WI-FI, lance un netcat et créé un pipe nommé reliant la sortie du netcat avec l'entrée d'un interpréteur Python. L'IHM se connecte au port ouvert de la voiture avec le netcat et relie sa sortie standard avec l'entrée du netcat via un pipe nommé. Ainsi, on conserve le fonctionnement précédent: l'IHM écrit du code pour l'interpréteur Python de la voiture. On a donc troqué le protocole ssh pour le netcat.</p>"
    ];
	let Images=["NONE", "NONE", "NONE", "NONE"]; //Mettre "NONE" si pas d'image pour le template
	let TitresImages=["NONE", "NONE", "NONE", "NONE"]; //Mettre "NONE" si pas d'image pour le template
	let Contenus2=[
        "", 
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
