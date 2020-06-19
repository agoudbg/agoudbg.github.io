
	// 获取弹窗

	var twotao = document.getElementById('2tao');
	var app = document.getElementById('app');
	var lb = document.getElementById('lb');
	var zdy = document.getElementById('zdy');
	var dbt = document.getElementById('dbt');
	var spk = document.getElementById('spk');


	// 获取 <span> 元素，用于关闭弹窗  另外这个地方估计可以简单一点吧。。但先这样上了
	var span = document.getElementsByClassName("close")[0];
	var span2 = document.getElementsByClassName("close")[1];
	var span3 = document.getElementsByClassName("close")[2];
	var span4 = document.getElementsByClassName("close")[3];
	var span5 = document.getElementsByClassName("close")[4];
	var span6 = document.getElementsByClassName("close")[5];
	var span7 = document.getElementsByClassName("close")[6];
	var span8 = document.getElementsByClassName("close")[7];


	// 点击按钮打开弹窗
	open_2tao.onclick = function() {twotao.style.display = "block";	}
	open_app.onclick = function() {app.style.display = "block";	}
	open_lb.onclick = function() {lb.style.display = "block";	}
	open_zdy.onclick = function() {zdy.style.display = "block";	}
	open_dbt.onclick = function() {dbt.style.display = "block";	}
	open_spk.onclick = function() {spk.style.display = "block";	}
	open_zb.onclick = function() {zb.style.display = "block";	}
	open_xwsc.onclick = function() {xwsc.style.display = "block";	}


	// 点击 <span> (x), 关闭弹窗
	span.onclick = function() {
		twotao.style.display = "none";
	}
	span2.onclick = function() {
		app.style.display = "none";
	}
	span3.onclick = function() {
		xwsc.style.display = "none";
	}
	span4.onclick = function() {
		lb.style.display = "none";
	}
	span5.onclick = function() {
		zdy.style.display = "none";
	}
	span6.onclick = function() {
		dbt.style.display = "none";
	}
	span7.onclick = function() {
		spk.style.display = "none";
	}
	span8.onclick = function() {
		zb.style.display = "none";
	}




	// 在用户点击其他地方时，关闭弹窗
	window.onclick = function(event) {
		if (event.target == modal) {
			twotao.style.display = "none";
			app.style.display = "none";
		}
	}
