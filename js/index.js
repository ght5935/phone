	
$(document).ready(function(){
  		 var ip = returnCitySN['cip'];
		var u = navigator.userAgent;
		var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		
		var browser = {
			versions: function() {
				var u = navigator.userAgent,
					app = navigator.appVersion;
				return { //移动终端浏览器版本信息
					trident: u.indexOf('Trident') > -1, //IE内核
					presto: u.indexOf('Presto') > -1, //opera内核
					webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
					gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
					mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
					ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
					android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
					iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
					iPad: u.indexOf('iPad') > -1, //是否iPad
					webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
				};
			}(),
			language: (navigator.browserLanguage || navigator.language).toLowerCase()
		}
		


		var AppleDom = document.getElementById('apple');
		var AndroidDom = document.getElementById('android');

		AppleDom.addEventListener('click', onAppleTouch, false);
		AndroidDom.addEventListener('click', onAndroidTouch, false);
		
		if(isiOS) {
			console.log('是否是iOS：' + isiOS);
			window.location.href = 'https://apps.apple.com/cn/app/%E6%8B%8D%E9%85%92/id908216380';
		}
		
		if(!!$('.zhao')){
			$('.zhao').remove()
		}
		function getNum (){
			var num;
			try{
				 num = u.split('Android')[1].split(';')[0];
			} catch {
				
			}
			return num;
		}
		function onAppleTouch(e){
			if (browser.versions.ios) {
                //是否在IOS浏览器打开
                console.log('iOs')
                window.location.href = 'https://apps.apple.com/cn/app/%E6%8B%8D%E9%85%92/id908216380';
	        } else {
	        	$(".box").append("<div class='zhao'></div>")
	        }
			
		}
		function onAndroidTouch(e){

			if(getNum() - 0 >= 9) {
				$(".box").append("<div class='zhao'></div>")
			}
	        if(browser.versions.android) {
	        	//是否在安卓浏览器打开
	        	window.location.href = 'https://www.snapwine.net/Pai9_3.7.2.apk';
	        } else {
	        	$(".box").append("<div class='zhao'></div>")
	        }
		}
  
  
  
  		$.ajax({
  			type: "GET",
  			url: "https://www.snapwine.net/ms/source/fstclick.php",
  			data: `ip=${ip}&type=xizhanping&dm=${u}&params=`,
  			success: function(msg) {
  				console.log("Data Saved: " + msg);
  			}
  		});
  		
  
  
});