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

	if(!('bam-id' in img.dataset)) {
		continue;
	}

	alert('image '+i+' had data-bam-id');
	var bamID = img.dataset.bamId; // data-bam-id gets converted to bamId supposedly

	var tmpButton = document.createElement('button');
	tmpButton.innerHTML = img.innerHTML;
	var imgNode = tmpButton.firstChild;
	alert("imgNode = "+imgNode);
	imgNode.setAttribute('display' ,'block');
	img.parentNode.insertBefore(imgNode, img.nextSibling);
}
}

(function() { replaceImagesWithBAMButtons();})();
