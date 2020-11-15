function printg(){
	
	// alert(111);
	window.print();
	
	
}


// https://xwsir.cn/2369.html
	// document.oncontextmenu = function (e) {
		// var e = e || window.event;
		// alert('禁止使用鼠标右键');
		// e.preventDefault(); // 阻止默认事件
		// e.returnValue = false;
		// return false;
	// };
	window.onkeydown = function (e) {
		// 屏蔽ctrl+c 复制
		// if (e.ctrlKey && e.keyCode == 67) {
			// alert('禁止使用ctrl+c');
			// e.preventDefault();
			// e.returnValue = false;
			// return false;
		// }
		// 屏蔽ctrl+p 打印
		if (e.ctrlKey && e.keyCode == 80) {
			// alert('禁止使用ctrl+p');
			printg();
			e.preventDefault();
			e.returnValue = false;
			return false;
			
		}
		// 屏蔽ctrl+s 保存
		// if (e.ctrlKey && e.keyCode == 83) {
			// alert('禁止使用ctrl+s');
			// e.preventDefault();
			// e.returnValue = false;
			// return false;
		// }
		// 禁止通过F12打开控制台
		// var e = event || window.event || arguments.callee.caller.arguments[0];
		// if (e && e.keyCode == 123) {
			// alert('禁止使用控制台');
			// e.returnValue = false;
			// return (false);
		// }
	};