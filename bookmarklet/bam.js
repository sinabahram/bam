/**
* @Author Sina Bahram (sina@sinabahram.com)
*/

/*
function injectMathJax() {
var mj = document.createElement('script');
mj.setAttribute('src', 'https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML');
document.body.appendChild(mj);
}
*/

function replaceImagesWithBAMButtons() {
var imgs = document.images;
for(var i=0; i<imgs.length; i++) {
	var img = imgs[i];
	alert('checking image: '+i);
	alert("image's dataset:"+JSON.stringify(img.dataset));

	if(!('bamId' in img.dataset)) {
		continue;
	}

	alert('image '+i+' had data-bam-id');
	var bamID = img.dataset.bamId; // data-bam-id gets converted to bamId supposedly

	var tmpButton = document.createElement('button');
	tmpButton.innerHTML = img.outerHTML;
	alert("tmpButton = "+tmpButton.outerHTML);
img.parentNode.insertBefore(tmpButton, img);
img.parentNode.removeChild(img);

//	var imgNode = tmpButton.firstChild;
//	alert("imgNode = "+imgNode);
}
}

(function() { replaceImagesWithBAMButtons();})();
