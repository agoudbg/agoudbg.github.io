var open=0;
var single;


type=document.getElementById("alltype");
type.style.setProperty('background-color','grey');
type.style.setProperty('color','white');
type.style.setProperty('font-weight','bold');
//设置读取内容
function loadc(name) {
    let xhr = new XMLHttpRequest(),
        okStatus = document.location.protocol === "file:" ? 0 : 200;
    xhr.open('GET', name, false);
    xhr.overrideMimeType("text/html;charset=utf-8");//默认为utf-8
    xhr.send(null);
    return xhr.status === okStatus ? xhr.responseText : null;
}
let channels=loadc("link.html")

search("");

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
	preview_main.innerHTML='';
	if (c=='alltype')search('');
	else search(","+c+",");
}

function search(words){
	id=0;
	count=0;
	//preview_main.innerHTML="";
	for(id=1;;id++)
	{
		things="";
		var whattosearch=new RegExp("{"+id+",(\S*)}")
		//whattosearch = new RegExp(whattosearch,"id")
		var a=new RegExp("{"+id+",(\\S*)}","");
		single=channels.match(a);//[1];
		if (single!=null)
			single=channels.match(a)[1];
		else continue;
		if (single=="stopsearch")
			break;
		if (single.indexOf(words)==-1)continue;
		count++;
		//alert(single);
		things=single.split(",");
		preview_main.innerHTML+='<div class="preview_box" onclick="find('+id+')"><img src="'+things[1]+'" class="preview_img"><p class="preview_title">'+things[0]+'</p><p class="preview_little">'+things[2]+'个直播源</p><svg t="1595514904008" class="preview_go" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2122" width="200" height="200"><path d="M730.802325 593.75489 804.269733 525.91913 273.742891 0.511968 219.730267 54.012624 694.580589 524.191238 220.562215 969.987376 274.382851 1023.36004 730.994313 593.946878Z" p-id="2123" fill="#bfbfbf"></path></svg></div>';

	}
	
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

function copylink()
{
 document.execCommand(location.href); 
alert("啊哦，功能还在开发中~\n先直接复制这个网址吧！");
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
