var socket = io.connect("http://localhost:8000");
function getEventTarget(e){
	e = e||window.event;
	return e.target || e.srcElement;
}
function getData(a) {return a.getAttribute('data');}
document.getElementById('controls').onmousedown = function(e) {
    
	var target = getEventTarget(e)
	if(target.nodeName=='BUTTON') {
		instructions = {type: getData(target.parentNode), action: getData(target)}
		socket.emit('move', instructions);
	}
};
document.getElementById('controls').onmouseup = function(e) {
	var target = getEventTarget(e);
	while (target.nodeName == 'BUTTON') {
		target = target.parentNode;
	}
	if (target.getAttribute('data') == 'flight'){
		socket.emit('stop');
	}
};