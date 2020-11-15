function loadc(name) {
    let xhr = new XMLHttpRequest(),
        okStatus = document.location.protocol === "file:" ? 0 : 200;
    xhr.open('GET', name, false);
    xhr.overrideMimeType("text/html;charset=utf-8");//默认为utf-8
    xhr.send(null);
    return xhr.status === okStatus ? xhr.responseText : null;
}
c=loadc("/header.html");
hcont.innerHTML=c;
c=loadc("/footer.html");
fcont.innerHTML=c;
			var sit=0;
			function go() {
				if(sit==0){
					document.getElementById("map-box").style.visibility = "visible";
					document.getElementById("cover").style.visibility = "visible";
					sit=1;
				}
				else{
					document.getElementById("map-box").style.visibility = "hidden";
					document.getElementById("cover").style.visibility = "hidden";
					sit=0;
				}
			}
			function stop(){
				document.getElementById("map-box").style.visibility = "hidden";
				document.getElementById("cover").style.visibility = "hidden";
				sit=0;
			}
			window.onresize=function() {
				if (document.body.clientWidth > 700)
					document.getElementById("map-box").style.visibility = "visible";
				else {
					document.getElementById("map-box").style.visibility = "hidden";
					document.getElementById("cover").style.visibility = "hidden";

				}
					
			}
			