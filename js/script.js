var oErweima = document.getElementById('erweima');
var oErcha = document.getElementById('ercha');
var oHf = document.getElementById('hf');
var oHuafei = document.getElementById('huafei');
var oYin = document.getElementById('yin')

oErcha.onclick = function(){
	oErweima.style.display = 'none';
}
oHf.onclick = function(){
	oHuafei.style.display = 'block';
}
oYin.onclick = function(){
	oHuafei.style.display = 'none';
}