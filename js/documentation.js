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
	let Titres=["Raspberry", "Interface v1"];
	let Sstitres=["Comment la connecter à un réseau wifi.", "Envoi de commandes SSH depuis l'application"];
	let Contenus1=[
        "Pour connecter la Raspberry à un réseau wifi, il faut créer un fichier <code>wpa_supplicant.conf</code> à la racine de la partition boot. Ce fichier doit contenir le code suivant :",
        `Avant d'envisager de faire communiquer les véhicules avec les RoadSide Unit par le biais d'envois de trames en Broadcast, les interactions primaires entre l'application principale et un véhicule ont été testées en établissant une connexion SSH de façon à ce que l'utilisateur puisse envoyer au véhicule des commandes simples : avancer à une certaine vitesse, tourner à un certain angle et s'arrêter. <br>
        On suppose par la suite que la carte Raspberry Pi qui compose la voiture de test dispose à sa racine de trois scripts <code>set_speed.py</code>, <code>set_angle.py</code> et <code>set_stop.py</code>. Les deux premiers prennent en argument par ligne de commande la vitesse et l'angle respectivement. <br>
        Python dispose du paquetage Fabric pour pouvoir gérer des connexions SSH directement dans le code. Le script <code>ssh.py</code> (présent sur la machine sur laquelle s'exécute l'application principale) implémente une fonction <code>ssh_connect_to_vehicle()</code> qui établit la connexion en instanciant un objet <code>fabric.Connection</code> et en lui passant en paramètre du constructeur les informations relatives à la session SSH sur le point d'être établie : l'IP de l'hôte (\"10.1.143.73\" dans le cas de notre véhicule de test), l'utilisateur (\"pi\") et le mot de passe (\"PFA_V2X\", toujours dans le cas de notre véhicule de test). L'envoi de commandes au véhicules se fait ensuite par l'appel à la méthode <code>run</code> sur cet objet <code>Connection</code>. Ainsi, dans la première version de l'interface, l'utilisateur définit la vitesse souhaitée, l'angle des roues et appuie sur le bouton \"Appliquer\". Le paquetage tkinter qui gère les éléments graphiques de l'application permet de mapper des évènements à l'exécution de fonctions. En l'occurence, l'appui sur le bouton \"Appliquer\" l'exécution de la méthode param, qui elle-même appelle les méthodes <code>set_speed</code> et <code>set_angle</code> qui construisent la commande à exécuter sur le véhicule (<code>python3 set_speed <speed></code> et <code>python3 set_angle <angle></code>, respectivement) et l'appliquent grâce à la méthode run décrite précédemment. Le script correspondant sur le véhicule est donc exécuté. L'appui sur le bouton \"Stop\" réagit de façon similaire, mais en appelant successivement les fonctions stopper, stop pour générer l'envoi de la commande <code>python3 stop.py</code>. <br>
        La connexion semble s'interrompre proprement à la fin de l'exécution du script de l'application même sans l'avoir explicité.` 
    ];
	let Images=["./img/wpa_sup.png", "NONE"];//Mettre "NONE" si pas d'image pour le template
	let TitresImages=["wpa_supplicant.conf", "NONE"];//Mettre "NONE" si pas d'image pour le template
	let Contenus2=["Pour se connecter ultérieurement en ssh à la Raspberry, il suffit de créer un fichier vide <code>ssh</code>, également à la racine de la partition boot.", ""];
	for(let i=0; i<Titres.length; i++) {
		if (Images[i]=="NONE")
			addArticle(Titres[i], Sstitres[i], Contenus1[i]);
		else
			addArticlePicture1(Titres[i], Sstitres[i], Contenus1[i], Images[i], TitresImages[i], Contenus2[i]);
	}
	endArticle();
});
