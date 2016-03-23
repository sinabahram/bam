// TODO: don't use global variable
function getAltFormat(id, format_to_get) {
    $.get("https://mathmlcloud.org/equation/" + id, function(data, status) {
		for (var i = 0; i < data.components.length; i++) {
			if (data.components[i].format == format_to_get) {
				if (format_to_get == 'mml') {
					var mml_e = document.createElement('math');  // Create with DOM
					mml_e.innerHTML = data.components[i].source;
					mml_e.setAttribute('id', id);
					$('img[data-bam-id="' + id + '"]').after(mml_e);
					MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
					$('img[data-bam-id="' + id + '"]').remove()
				}
				if (format_to_get == 'png') {
					var img_e = document.createElement('div');  // Create with DOM
					img_e.innerHTML = data.components[i].source;
					img_e.setAttribute('id', id);
					$('div[data-bam-id="' + id + '"]').after(img_e);
					$('div[data-bam-id="' + id + '"]').remove();
				}
			}
		}
    });
}
