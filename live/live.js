var open=0;
var single;
searched=0;
whatsea="";

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

var type=Request("type");
if (type!="")changetab(type);
window.onresize = 
function cw(){
	changewidth();
}
function changetab(c){
	
	type=document.getElementsByClassName("preview_type");
	a=0;
	while (a<4){
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
	searched=0;
	if (c=='alltype')search('');
	else search(","+c+",");
	history.replaceState("","","?type="+c)
}

function getdetail(id){
	var a=new RegExp("{"+id+",(\\S*)}","");
	single=channels.match(a);//[1];
	return single;
}

function search(words){
	
	if (words=='more'){
		words=whatsea;
		if (showmore.innerHTML=="已加载完成"){
		alert('哎呀 人家都说加载完了还要戳我 讨厌鬼(＞人＜)');
		showmore.innerHTML="(´･_･`)";
		return -1;
		}
	}
	else{
	whatsea=words;showmore.innerHTML="加载更多";}
	singlecount=0;
	if (searched==0){
		preview_main.innerHTML="";
		id=0;
	}
	searched+=250;
	for(id;id<=searched;id++)
	{
		things="";
		single=getdetail(id);
		if (single!=null)
			single=single[1];
		else continue;
		if (single=="stopsearch"){
			showmore.innerHTML="已加载完成";
			return 0;
		}
		var a=new RegExp(words+"\/i");
		if (single.indexOf(words)==-1)continue;
		singlecount++;

		//alert(single);
		things=single.split(",");
		preview_main.innerHTML+='<div class="preview_box" onclick="find('+id+')"><img src="'+things[1]+'" class="preview_img"><p class="preview_title">'+things[0]+'</p><p class="preview_little">'+things[2]+'个直播源</p><svg t="1595514904008" class="preview_go" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2122" width="200" height="200"><path d="M730.802325 593.75489 804.269733 525.91913 273.742891 0.511968 219.730267 54.012624 694.580589 524.191238 220.562215 969.987376 274.382851 1023.36004 730.994313 593.946878Z" p-id="2123" fill="#bfbfbf"></path></svg></div>';

	}
		if (singlecount==0){
		search('more');
		}

	//preview_main.innerHTML="<h2>your str";
}


function find(id) {
	open=1;
	//var id,name,photo,scrnum,introduce;
	details=getdetail(id);
	things=details[1].split(",");
	dheader_title.innerHTML=things[0];
	detail_img.src=things[1];
	detail_title.innerHTML=things[0];
	detail_int.innerHTML=things[3];
	detail_tag.innerHTML="";
	for(i=1;i<=things[4];i++){
		
		tag=things[i+4];
		tagplus='<p class="tag" >'+tag+'</p>';
		detail_tag.innerHTML+=tagplus;
	}
	detail_tag.innerHTML+='<p class="tag" >id: '+id+'</p>';
	
	detail_baike.href='https://www.baidu.com/s?wd='+things[0];
	countnum.innerHTML='（共'+things[2]+'个）';
	linksin.innerHTML="";
	for(i=1;i<=things[2];i++){
		
		linkname=things[2*i+8];
		linkurl=things[2*i+9];
		alllink='<div class="singlelink"><p class="introduce linklist">'+linkname+'</p><button class="play" onclick=play("1")><svg t="1595687531264" class="playicon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2074" width="12" height="12"><path d="M870.05628 437.593243L260.040791 19.178254l-0.284443 0.227554a70.59864 70.59864 0 0 0-119.06765 50.289443c0 21.105637-0.910216 62.634249 0 61.724033v774.935278c0 38.399744 31.459346 69.688424 70.371086 69.688424 18.943874 0 36.181092-7.395506 48.810341-19.512758L869.942503 538.172128c13.255023-12.686138 21.617634-30.492241 21.617633-50.232554v-0.227554c0-19.683424-8.248834-37.546416-21.503856-50.175666z" fill="#2c2c2c" p-id="2075"></path></svg></button><pre class="url" id="'+linkurl+'" onclick="copyLink(this);"data-clipboard-action="copy" data-clipboard-target="#linkurl">'+linkurl+'</pre></div>';
		linksin.innerHTML+=alllink;
	}
	
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
 function copyLink(a){

}
	
