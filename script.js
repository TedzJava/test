var turn = 0; // tour du joueur
var ok = []; // pour les id des inputs deja pris
// j'ai du numeroter les valeurs de 0 a 9 pour ne pas entrer en collision avec undefined===undefined dans checkFinish();
var okS = [1,2,3,4,5,6,7,8,9]; // pour les symboles déjà entrés

function finishGame(){
	// tourner dans les inputs ayant un id entre 1 et 9 et les désactiver pour ne plus pouvoir y cliquer
	for(let i = 1; i <= 9; i++){
		document.getElementById(i).disabled = true;
	}
}

function checkFinish(){
	// si le tableau est totalement rempli
	if(ok.length == 9){ alert("Game Finished !"); finishGame();}
	// 1=2=3	1=4=7
	if(okS[1] === okS[2] && okS[1] === okS[3]){ alert("Bravo au joueur de Symbole " + okS[1] + " qui a gagné la partie !"); finishGame();}
	if(okS[1] === okS[4] && okS[1] === okS[7]){ alert("Bravo au joueur de Symbole " + okS[1] + " qui a gagné la partie !"); finishGame();}
	// 7=8=9	3=6=9
	if(okS[9] === okS[7] && okS[9] === okS[8]){ alert("Bravo au joueur de Symbole " + okS[9] + " qui a gagné la partie !"); finishGame();}
	if(okS[9] === okS[3] && okS[9] === okS[6]){ alert("Bravo au joueur de Symbole " + okS[9] + " qui a gagné la partie !"); finishGame();}
	// 4=5=6	2=5=8	1=5=9	3=5=7
	if(okS[5] === okS[4] && okS[5] === okS[6]){ alert("Bravo au joueur de Symbole " + okS[5] + " qui a gagné la partie !"); finishGame();}
	if(okS[5] === okS[2] && okS[5] === okS[8]){ alert("Bravo au joueur de Symbole " + okS[5] + " qui a gagné la partie !"); finishGame();}
	if(okS[5] === okS[1] && okS[5] === okS[9]){ alert("Bravo au joueur de Symbole " + okS[5] + " qui a gagné la partie !"); finishGame();}
	if(okS[5] === okS[3] && okS[5] === okS[7]){ alert("Bravo au joueur de Symbole " + okS[5] + " qui a gagné la partie !"); finishGame();}
}

function setSymb(value){
	// ajouter au tableau l'id du input pressé
	ok[ok.length] = value;
	// ajuster la valeur
	input = document.getElementById(value);
	// si le tour est paire, c'est le tour du O, impaire = tour du X
	if(turn++ % 2 == 0) { input.setAttribute('src', './img/o.png'); okS[value] = "O"; }
	else{ input.setAttribute('src', './img/x.png'); okS[value] = "X"; }
	// desactiver le boutton déjà utilisé
	document.getElementById(ok[ok.length - 1]).disabled = true;
	// si le tableau est entièrement rempli, alerter la fin du jeu 
	checkFinish();
}