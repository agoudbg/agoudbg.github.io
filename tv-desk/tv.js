// 获取弹窗
var modal = document.getElementById('myModal');

// 打开弹窗的按钮对象
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("go");

// 获取 <span> 元素，用于关闭弹窗 that closes the modal
var span = document.getElementsByClassName("close")[0];

// 点击按钮打开弹窗
btn.onclick = function() {
	modal.style.display = "block";
}

btn2.onclick = function() {
	window.open("https://229.junbo.wang");   
}


// 点击 <span> (x), 关闭弹窗
span.onclick = function() {
	modal.style.display = "none";
}

// 在用户点击其他地方时，关闭弹窗
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

/*改变原始宽度（0）*/
function openNav() {
	document.getElementById("mySidenav").style.width = "200px";
}
/*恢复原始宽度0*/
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}


	 window.onload = function () {
	 
	  oBox.ondragenter = function(){
	  return false;
	  };
	  oBox.ondragover = function(){
	   return false;
	  };
	  oBox.ondragleave = function(){
	   return false;
	  };
	  oBox.ondrop = function(ev){
	   return false;
	   
	  };
	 };
if(navigator.userAgent.indexOf("Android")>0 || navigator.userAgent.indexOf("ios")>0 || navigator.userAgent.indexOf("iPhone")>0 || navigator.userAgent.indexOf("iPad")>0 || navigator.userAgent.indexOf("windows phone")>0){window.location.href="sorry.html";}

	alert("实验性功能：\n将一个http直播流文字拖拽到某个窗格来在该窗格打开该直播流。");
