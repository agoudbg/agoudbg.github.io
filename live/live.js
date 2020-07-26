var open=0;
var channels;
//设置读取内容
$.ajax({
	type:'get',
	url:"links.html",//这里是baiurl
	success:function(channels,heads,status){
	 alert(channels);
	}
});
a=channels.match(/{.}/)[1];
var str = "aaabbbcccdddeeefff";
str = str.match(/aaa(\S*)fff/)[1];
alert(str);//结果bbbcccdddeee
alert(a); 
type=document.getElementById("alltype");
type.style.setProperty('background-color','grey');
type.style.setProperty('color','white');
type.style.setProperty('font-weight','bold');

var goto=Request("id");
if (goto!="")find(goto);
	
window.onresize = 
function cw(){
	changewidth();
}
function changetab(c){
	
	type=document.getElementsByClassName("preview_type");
	a=0;
	while (a<3){
		if(window.matchMedia('(prefers-color-scheme: dark)').matches){
			type[a].style.setProperty('background-color','#3B3B3B');
			type[a].style.setProperty('color','white');
		}else{
			type[a].style.setProperty('background-color','#F7F7F7');
			type[a].style.setProperty('color','black');
		}
		type[a].style.setProperty('font-weight','normal');
		
		a++;
	}
	type=document.getElementById(c);
	type.style.setProperty('background-color','grey');
	type.style.setProperty('color','white');
	type.style.setProperty('font-weight','bold');
	if (c=="alltype") search("no");
	else search(","+c+",");
}
function search(words){
	
	//preview_main.innerHTML="<h2>your str";
}
function find(id) {
	open=1;
	var id,name,photo,scrnum,introduce;
	
	
	history.replaceState("","","?id="+id)
	changewidth();
}
function closewin() {
	detail.style.setProperty('left','100%');
	dheader_sharesvg.style.cssText="display:none;";
	open=0;
	history.replaceState("","","?id=")
	changewidth();
} 
function changewidth(){
	if (open==1){
		if (window.innerWidth>630){
			
			detail.style.cssText="display:inline"
			dheader_backsvg.style.cssText="display:none";
		}
		
		else 
		{
			detail.style.cssText="left:0;";
			dheader_backsvg.style.cssText="display:inline";
		}
	dheader_sharesvg.style.cssText="display:inline";
	
	}
	else
	{
		detail.style.cssText="left:100%;";
		dheader_sharesvg.style.cssText="display:none;";
	}
} 

function play(url) {
	
	playin.innerHTML='<iframe id="b6" width="100%"  height="100%" marginwidth=0 marginheight=0 frameborder="no" border="0" allowfullscreen="true" src="http://agoudbg.gitee.io/dbt/player.html?id=32" ></iframe> 			'
	player.style.setProperty("display","inline");

}

function closeplayer() {
	
	playin.innerHTML='<p>播放器已关闭</p> 			'
	player.style.setProperty("display","none");

}
//Make the DIV element draggagle:
dragElement(document.getElementById(("player")));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function Request(strName){
	var strHref = location.href;
	var intPos = strHref.indexOf("?");
	var strRight = strHref.substr(intPos + 1);
	var arrTmp = strRight.split("&");
	for(var i = 0; i < arrTmp.length; i++) {
		var arrTemp = arrTmp[i].split("=");
		if(arrTemp[0].toUpperCase() == strName.toUpperCase()) 
			return arrTemp[1];
	}
	return "";
}