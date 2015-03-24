function jezik(koji) {

	if (koji==0) var vidljivost_jezika=["block", "none", "none", "none"];		//kada klikenm za jezik ubaci vrijednost koja napravi array
	else if (koji==1) var vidljivost_jezika=["none", "block", "none", "none"];
	else if (koji==2) var vidljivost_jezika=["none", "none", "block", "none"];
	else if (koji==3) var vidljivost_jezika=["none", "none", "none", "block"];

	var elems = document.getElementsByClassName('hrvatski');
		for(var i = 0; i < elems.length; i++) {
		elems[i].style.display = vidljivost_jezika[0];}

	var elems = document.getElementsByClassName('njemacki');	//getElementsByClassName, elements množina zato jer ima vise onih koji...
		for(var i = 0; i < elems.length; i++) {			//... imaju istu klasu. "var elems" je array koji izvrti sve elemente s tom klasom
		elems[i].style.display = vidljivost_jezika[1];}

	var elems = document.getElementsByClassName('engleski');
		for(var i = 0; i < elems.length; i++) {
		elems[i].style.display = vidljivost_jezika[2];}

	var elems = document.getElementsByClassName('francuski');
		for(var i = 0; i < elems.length; i++) {
		elems[i].style.display = vidljivost_jezika[3];}
}

function izgled() {

	var width = window.innerWidth; 


	if (width<1234) {	document.styleSheets.item(1).disabled=true;
				document.styleSheets.item(0).disabled=false;	}		//ako mobitel onda onda ugasi css za komp
	else {	document.styleSheets.item(0).disabled=true;
		document.styleSheets.item(1).disabled=false;	}


}

/*Kada se promijeni nesto u html input type color onda se pokrene funkcija s odgovarajucim atributom. var colo je array koji prima sve sto ima klasu claboja iz htmla. Ovisno koji je atribut stisnut for loop promijeni sve input type color koji imaju klasu claboja (svi "i" dobiju vrijednost iz colo[koju] ). Napravio se i var okvir koji je array s jednom pozcijiom jer je u htmlu samo jedan okvir (mora biti array jer koristim getElementsByClassName). styl.borderColor za taj jedan okvir dobije vrijednost od svih 4 input typa koji imaju istu vrijednost kao i onaj input koji sam mijenjao.*/

function mjenjajboju(koju) {

	var colo = document.getElementsByClassName("claboja");
	var okvir = document.getElementsByClassName('rub');
	var linkovi= document.getElementsByClassName('plink');

	for (var i = 0; i < colo.length; i++) {
		if (koju==0)  colo[i].value=colo[0].value;
		else if (koju==1) colo[i].value=colo[1].value;
		else if (koju==2) colo[i].value=colo[2].value;
		else if (koju==3) colo[i].value=colo[3].value;

		okvir[0].style.borderColor = colo[i].value;

	}
	for (var i=0; i<linkovi.length; i++) {
		linkovi[i].style.color=colo[0].value;
	}
}

function promijenframe (noviframe) {
	var width = window.innerWidth; 
	var height = window.innerHeight;

	document.getElementById('frame').style.background = "white";

	if (width>height) {
		if (noviframe==0) {
			document.getElementById('frame').src = "MojAnalogniSat.html";
			document.getElementById('frame').style.paddingLeft = "250px";
			document.getElementById('frame').style.paddingTop = "50px";
			document.getElementById('frame').style.width = "500px";
			document.getElementById('frame').style.height = "320px";}

		else if (noviframe==1) {
			document.getElementById('frame').src = "zmijamob.html";
			document.getElementById('frame').style.paddingLeft = "0px";
			document.getElementById('frame').style.paddingTop = "0px";
			document.getElementById('frame').style.width = "750px";
			document.getElementById('frame').style.height = "370px";}
	
		else if (noviframe==2) {
			var myWindow = window.open("", "InfiniteMario", "width=1250, height=750");
			myWindow.document.write('<iframe src="mario2/mario2.html" id="frame" scrolling="no" width="1200" height="700"></iframe>');
		}


	} else {
		if (noviframe==0) {
			document.getElementById('frame').src = "MojAnalogniSat.html";
			document.getElementById('frame').style.paddingLeft = "0px";
			document.getElementById('frame').style.paddingTop = "10px";
			document.getElementById('frame').style.width = "270px";
			document.getElementById('frame').style.height = "320px";}

		else if (noviframe==1) {
			var myWindow = window.open("", "Zmija", "width=850, height=500");
			myWindow.document.write('<iframe src="zmijamob.html" id="frame" scrolling="no" width="800" height="420"></iframe>');}
		else if (noviframe==2) {
			var myWindow = window.open("", "InfiniteMario", "width=100, height=100");
			myWindow.document.write('<p1>InfiniteMario ne radi na mobitelu </p1>');}
	}
}

/* "hes" (#) je u funkcije jer bi inace stalno rastao, a ovako bude samo jedna vrijednost u arrayu. "documet.URL" da punu adresu. for loop izvrti sve "i" pozcije i to koliko je dugačak URL. "substring" da slova od "i" pozcije do "i+1" i ako je to slovo "#" onda "push" ubaci u "hes" array sva slova od "i" do kraja URL-a. Ako je "hes" jednak jednom od napisanih onda se napravi array "vidljivost_str" koji je sastavljen od rijeci "none" i bolck. vidljivost za svaki "id" iz html-a se mijenja pomocu "getElementById" ovisn o arrayu  "vidljivost_str". requestAnimationFrame to ponovi 60 puta u sekundi. Sve to da ne moram imati više stranica na serveru, a da mi radi "back".*/

function stranica() {
	var hes=[];
	adr=document.URL;

	for (var i=0; i<adr.length; i++) { 
		    if (adr.substring(i,i+1)==="#")  hes.push(adr.substring(i,i+adr.length))  
	}

	if(hes=="#ostranici") var vidljivost_str=["none", "block", "none", "none"];
	else if(hes=="#js") var vidljivost_str=["none", "none", "block", "none"];
	else if(hes=="#ostalo") var vidljivost_str=["none", "none", "none", "block"];
	else var vidljivost_str=["block", "none", "none", "none"];

	document.getElementById('pocetna').style.display = vidljivost_str[0];
	document.getElementById('ostranici').style.display = vidljivost_str[1];
	document.getElementById('javascript').style.display = vidljivost_str[2];
	document.getElementById('ostalo').style.display = vidljivost_str[3];
}

function kreni() {
	setInterval(function(){	izgled();
					stranica(); }, 100);

}
