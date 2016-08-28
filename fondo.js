img = new Array();
var stat = 'src/img/'; 


index = 0; 
function altBg(){ 
dir('volcan');
dir('antigua');
dir('antigua2');
dir('rio_dulce');
dir('xela');
document.body.style.backgroundImage = 'url(' + img[index % img.length] + ')'; 
index++; 
} 
window.onload = function(){ 
document.getElementById('tUsuario').focus();
setInterval('altBg()', 5000); 
// 5000 milisegundos equivalente a 5 segundos; 
};

function dir(name){
	var path = name + '.jpg'; 
	img.push(path);
}

