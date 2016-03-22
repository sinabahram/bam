// javascript:function%20injectMathJax()%20{var%20mj%20=%20document.createElement(%27script%27);mj.setAttribute(%27src%27,%20%27https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML%27);document.body.appendChild(mj);}function%20replaceImagesWithBAMButtons()%20{var%20imgs%20=%20document.images;for(var%20i=0;%20i<imgs.length;%20i++)%20{var%20img%20=%20imgs[i];if(!(%27bam-id%27%20in%20img.dataset))%20{continue;}var%20bamID%20=%20img.dataset.bamId;%20//%20data-bam-id%20gets%20converted%20to%20bamId%20supposedlyvar%20tmpButton%20=%20document.createElement(%27button%27);tmpButton.innerHTML%20=%20img.innerHTML;var%20imgNode%20=%20tmpButton.firstChild;imgNode.setAttribute(%27display%27%20,%27block%27);img.parentNode.insertBefore(imgNode,%20img.nextSibling);}
/**
* @Author Sina Bahram (sina@sinabahram.com)
*/

function injectMathJax() {
var mj = document.createElement('script');
mj.setAttribute('src', 'https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML');
document.body.appendChild(mj);
}

function replaceImagesWithBAMButtons() {
var imgs = document.images;
for(var i=0; i<imgs.length; i++) {
	var img = imgs[i];
//	alert('checking image: '+i);
	if(!('bam-id' in img.dataset)) {
		continue;
	}

//	alert('image '+i+' had data-bam-id');
	var bamID = img.dataset.bamId; // data-bam-id gets converted to bamId supposedly

	var tmpButton = document.createElement('button');
	tmpButton.innerHTML = img.innerHTML;
	var imgNode = tmpButton.firstChild;
//	alert("imgNode = "+imgNode);
	imgNode.setAttribute('display' ,'block');
	img.parentNode.insertBefore(imgNode, img.nextSibling);
}
