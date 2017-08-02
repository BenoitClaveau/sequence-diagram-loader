var code = document.querySelector("code");
code.style = "display: none";

var font = document.createElement('script');
font.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.28/webfontloader.js');

var raphael = document.createElement('script');
raphael.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.7/raphael.min.js');

var underscore = document.createElement('script');
underscore.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js');

var sequence = document.createElement('script');
sequence.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/js-sequence-diagrams/1.0.6/sequence-diagram-min.js');
sequence.onload = function() {
	var div = document.createElement("div")
	div.id = "diagram";
	document.body.appendChild(div);
	Diagram.parse(code.innerText).drawSVG("diagram", {theme: 'hand'});
}
document.body.appendChild(font);
document.body.appendChild(raphael);
document.body.appendChild(underscore);
document.body.appendChild(sequence);
