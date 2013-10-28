/* 
 * UC 笔试的涉及的知识点：
 *
 * 基础知识：
 * 1. 数据结构（二叉树，二分法）；
 * * 2^n-1、2^(n-1)
 *
 * 2. 数据库（模糊查询 '%'）；
 * * select sno from student where sname like '%伟%';
 *
 * 3. 计算机操作系统（并发性、死锁）；
 * * 并发性：两个进程在同一时间间隔内运行；并行性：两个进程在同一时刻运行；
 * * 死锁：两个进程互相申请对方占有的资源就会产生死锁；
 *
 * 4. 计算机网络（DNS、TCP/IP）；
 * * DNS 可以将 domain 映射为 IP 地址
 *
 * 前端考点：
 * 1. 值/引用类型；
 * var a = 1,
 *     obj = { b : 2 },
 *     fn = function() {};
 *     fn.c = 3;
 *
 * function test(x, y, z) {
 *     x = 4 ;
 *     y.b = 6;
 *     z.c = 8;
 *     return z;  
 * }
 *
 * test(a, obj, fn);
 * alert(a + obj.b + fn.c);
 * 结果?  a?  obj.b?  fun.c?
 *
 * 2. 瀑布流；
 * demo UCI.html
 * 
 * 3. 移动端的转屏；
 * demo UCIII.html
 *
 * 4. 字数统计；
 * demo UCII.html
 *
 * 5. ajax 运用；
 * no demo
 * 
 * UC 面试考查内容：
 *
 * 1. CSS部分：
 * * * 清除浮动
 *
 * * * 垂直居中
 * 
 * 2. Javascript 部分：
 * * * 变量提升
 *
 * var a = 1;
 * function a() {}
 * console.log(a);
 * 求 a 的结果?
 *
 * var a = 1;
 * var a = function() {};
 * console.log(a);
 * 求 a 的结果?
 *
 * * * 闭包 * 概念 * 内存泄露 
 *
 * function conStr(el, str) {
 *    el.onclick = function() {
 *	      alert(str);
 *	  }
 * }
 * conStr(document.getElementById(''),'Vtmer');
 * conStr(document.getElementById(''),'Web');
 *
 * * * Sea.js CMD 概念 
 */

 function handle() {
 	var el = document.createElement('a');
 	var linkHref = ['index.html#4','index.html#5','index.html#5'];
 	var objStyle = {'position':'fixed','right':'10%','bottom':'10%',
 						'display':'block','text-align':'center','line-height':'24px',
 							'width':'54px','height':'24px','backgroundColor':'#bbb',
 								'color':'#fff'};
 	if (document.body.dataType) {
 		var ind = document.body.dataType;
 	} else {
 		var ind = document.body.getAttribute('dataType');
 	}
 	el.textContent = 'BACK';
 	el.href = linkHref[ind];
 	for(key in objStyle) {
 		el.style[key] = objStyle[key];
 	}
 	document.body.appendChild(el);
 }

 window.onload = handle;