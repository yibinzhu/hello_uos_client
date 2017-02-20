$(function(){
	$(".allmenu").click(function() {
		$('body').addClass('open');
		$(".mGnb_bg").show();
		$("#mobileM").show();
	});
	$(".mymenu").click(function() {
		$('body').addClass('open');
		$(".mGnb_bg").show();
		$("#mobileMy").show();
	});
	$(".close").click(function() {
		$(".mGnb_bg").hide();
		$(".mGnb").hide();
		$('body').removeClass('open');
	});

	$(".search > a").click(function() {
		$(".search").toggleClass("on");
	});
	/* topMenu */
	$("#topMenu li a").click(function(){
		$("#topMenu > li > ul").hide();
		$(this).parent().children("ul").slideDown("normal");
	});
	$("#topMenu > li > ul").mouseleave(function(){
		$(this).hide();
	});
	$("#l1 a").focus(function(){
		$("#topMenu > li > ul").hide();
	});
	// 사용자별 빠른메뉴
	$(".useMenu > ul > li > a").click(function(){
		$(".useMenu > ul > li > ul").slideUp("normal");
		$(this).parent().find("ul").slideDown("normal");
	});
	$(".useMenu > ul > li > ul").mouseleave(function(){
		$(this).hide();
	});
	$("#useMenuClose").focus(function(){
		$(".useMenu > ul > li > ul").hide();
	});
	// 모바일 메뉴 
	$(".menu_box > li > a").click(function(){
		if ($(this).parent().attr("class") == "on") {
			$(this).parent().children("ul").hide();
			$(this).parent().removeClass("on");
		}
		else if($(this).attr("class") != "link") {
			$(".menu_box > li").removeClass("on");
			$(this).parent().addClass("on");
			$(".menu_box > li > ul").hide();
			$(this).parent().children("ul").slideDown('normal');
		}
		else {
			window.open($(this).attr("href"), '', '', '_blank');
		}
	});
	$("#mobileM .menu_box > li > ul > li > a").click(function(){
		if ($(this).parent().attr("class") == "on") {
			$(this).parent().children("ul").hide();
			$(this).parent().removeClass("on");
		}
		else if ($(this).parent().attr("class") == "cb on") {
			$(this).parent().children("ul").hide();
			$(this).parent().removeClass("on");
		}
		else if($(this).attr("class") != "link") {
			$(".menu_box > li > ul > li ").removeClass("on");
			$("#mobileM .menu_box > li > ul > li > a").parent().children("ul").hide();
			$(this).parent().children("ul").slideDown('normal');
			$(this).parent().addClass("on");
		}
		else {
			location.href = $(this).attr("href");
		}
	});
	/* leftMenu */
	$("#left ul li").children("a").click(function(){
		$("#left ul li").children("ul").slideUp("normal");
		$("#left ul li").removeClass("on");
		$(this).parent().addClass("on");
		$(this).parent().children("ul").slideDown("slow");
	});
	/* 상단 알림창  LJH 기능 추가중  오류로 인하여 제거후 inform_up.jsp 로 이동 
	$('.btn_toggle').toggle(function() {
		$(".top_banner_wrap").stop();
		$(".top_banner_wrap").slideUp();
		$(".top_bannerBtn_wrap").css("height","8px");
		$(".btn_toggle").css("margin-top","0px");
		$(".btn_toggle").css("background","url('/images/kor2016/common/btn_topbanner_open.png')");
		$(".btn_toggle").attr("title","배너열기");
	},function(){
		$(".top_banner_wrap").stop();
		$(".top_banner_wrap").slideDown();
		$(".top_bannerBtn_wrap").css("height","16px");
		$(".btn_toggle").css("margin-top","8px");
		$(".btn_toggle").css("background","url('/images/kor2016/common/btn_topbanner_close.png')");
		$(".btn_toggle").attr("title","배너닫기");
	});
	*/
	// 메인 탭 
	$('.tab_menu li a').click(function(){
		$('.tabCont > div').hide().eq($(this).parent().index()).show();
		$('.tab_menu li a').removeClass('active').eq($(this).parent().index()).addClass('active');
	});
	// 교수검색 상세 탭 
	$('.tabList02 li a').click(function(){
		$('.tabCont02 > div').addClass('hide').eq($(this).parent().index()).removeClass('hide');
		$('.tabList02 li a').parent().removeClass('on').eq($(this).parent().index()).addClass('on');
	});
	// 게시판 첨부파일
	$('.fileDown').click(function(){
		$('.fileLyaer').show();
	});
	$('.fileLyaer .close').click(function(){
		$('.fileLyaer').hide();
	});
	/* FAQ */
	$('.openA').click(function(){
		var num = $(this).parent().index()/2;
		if(document.getElementById('hide_tr'+num).className == 'listCont hide') {
			$('.listCont').addClass('hide');
			document.getElementById('hide_tr'+num).className = 'listCont';
			$(this).parent().addClass("open");
		}
		else {
			$('.listCont').addClass('hide');
			$(this).parent().removeClass("open");
		}
	});
	/* 설문조사 */
	$('.survey > li > a').click(function(){
		var num = $(this).parent().index()/2;
		if($('.survey > li.boxType01').eq(num).attr('class') == "boxType01 hide") {
			$('.survey > li.boxType01').addClass('hide').eq(num).removeClass('hide');
		}
		else $('.survey > li.boxType01').eq(num).addClass('hide');
	});
	$('.iconGoal').click(function(){
		var num = $(this).parent().parent().index()/2;
		if($('.survey > li.boxType01').eq(num).attr('class') == "boxType01 hide") {
			$('.survey > li.boxType01').addClass('hide').eq(num).removeClass('hide');
		}
		else $('.survey > li.boxType01').eq(num).addClass('hide');
	});
	/* tab */
	$('.tabList.type2 li a').click(function(){
		$('.tabCont > div').css('display','none').eq($(this).parent().index()).css('display','block');
		$('.tabList.type2 li a').parent().removeClass('on').eq($(this).parent().index()).addClass('on');
	});
	
});

function layerPopSetting(mass){
	if($(".dimm").length == 0){
		$("body").append("<div class='dimm' style='display:none' >")
	}
	var dimm = $(".dimm");
	var dimm2 = false;
	if(mass)
	for (var i=0; i<mass.length ; i++ )
	{
		var layerArr = mass[i];
		var btn = $(layerArr.btn);
		if(btn.length ==0) continue;
		btn.each(function(j){
			btn[j].layerArr = layerArr;
		}).live("click",function(e){
			var layerArr = this.layerArr;
			var This = this;
			if(!layerArr.addLayer){
				$(".layerPop").hide()
			}else{
				$(layerArr.layer).css({zIndex:110});
				$("body").append("<div class='dimm addLayer'>");
				dimm2 = $(".dimm.addLayer");
			}
			if(layerArr.openChkeck){
				if(layerArr.openChkeck()){
					openLayer(This.layerArr);
					e.preventDefault(); 
				}
			}else{
				openLayer(This.layerArr);
					e.preventDefault(); 
			}
		})
	}

	$(".layerPop a.close").each(function(){
		this.layerEl = $(this.parentNode.parentNode);
		this.parent = $(this.parentNode);
		this.parentNode.close = $(this);
	}).click(function(){
		if(dimm2)dimm2.remove();
		var layerEl = this.layerEl;
		layerEl.slideUp(function(){
			var showChk = true;
			$(".layerPop").each(function(){
				if(this.style.display != "none"){
					showChk = false;
				}
			});
			if(showChk) closeLayer(this);
		});
		return false;
	});

	function openLayer(layerArr){
		dimm.fadeIn(function(){
			var layerEl = $(layerArr.layer);
			var top =  (document.body.parentNode.clientHeight  /2-layerEl.height()/2)+ ($("html").scrollTop() +$("body").scrollTop())-200;
			layerEl.css({top:top})
			layerEl[0].callback = layerArr.closeCallback;
			layerEl.slideDown(function(){
				if(layerArr.openCallback) layerArr.openCallback();	
			});
		});
	}

	function closeLayer(layerEl){
		if(dimm2) dimm2.remove();
		dimm.fadeOut(function(){
			if(layerEl.callback) layerEl.callback();	
		});
	}

	return {
		hide : function(layerArr){
			if(!layerArr){
				$(".layerPop").each(function(){
					if(this.style.display != "none"){
						this.close.click();
					}
				});
			}else{
				
			}
		},
		open : function(layerArr){
			$(".layerPop").hide()
			openLayer(layerArr);
		}
	}
}
// 메인 탭
function topBtn(num,tot,obj) {
	
	
	var mainTabImgSrc = document.getElementById(obj+num).src;
	var mainTabImgClass = document.getElementById(obj+"Cont"+num).className;
	
	if ( mainTabImgSrc.indexOf("on.png") != -1 ) {
		
		if ( mainTabImgSrc.indexOf("on.png") == -1 ) {
			document.getElementById(obj+num).src = document.getElementById(obj+num).src.replace(".png","on.png");
		} else {
			document.getElementById(obj+num).src = document.getElementById(obj+num).src.replace("on.png",".png");
		}
		
		if ( mainTabImgClass == "hide" ) {
			document.getElementById(obj+"Cont"+num).className = "";
		} else {
			document.getElementById(obj+"Cont"+num).className = "hide";
		}

	} else {
		
		for(i=1;i<=tot;i++) {
			document.getElementById(obj+i).src = document.getElementById(obj+i).src.replace("on.png",".png");
			document.getElementById(obj+"Cont"+i).className = "hide";
		}
		document.getElementById(obj+num).src = document.getElementById(obj+num).src.replace(".png","on.png");
		document.getElementById(obj+"Cont"+num).className = "";
	}
	
}

function newsTab(num,tot,obj) {
	for(var i=1;i<=tot;i++) {
		document.getElementById(obj+i).src = document.getElementById(obj+i).src.replace("on.png",".png");
		document.getElementById(obj+"Cont"+i).className = "hide";
	}
	document.getElementById(obj+num).src = document.getElementById(obj+num).src.replace(".png","on.png");
	document.getElementById(obj+"Cont"+num).className = "";
}

// 기본 팝업
function popup(url,id,width,height) {
	window.open(url,id,"toolbar=no,location=no,status=no,menubar=no,scrollbars=no,left=0, top=0, resizable=no,width=" + width + "px,height=" + height + "px");
}

function popup2(url,id,width,height) {
	window.open(url,id,"toolbar=no,location=no,status=no,menubar=no,scrollbars=no,left=0, top=0, resizable=no,width=" + width + "px,height=" + height + "px");
}


//파일다운로드 type1
function fnFileDown (seq, fSeq) {
	
	jQuery("#dseq").val(seq);
	jQuery("#df_seq").val(fSeq);
	jQuery("#downForm").attr("action", "/common/FileDown.do").submit();
	
}

//파일다운로드 type2
function fnViewFileDown (file_path, file_upNm, file_orgNm) {
	
	jQuery("#file_path").val(file_path);
	jQuery("#file_upNm").val(file_upNm);
	jQuery("#file_orgNm").val(file_orgNm);
	
	jQuery("#downForm").attr("action", "/common/view/FileDown.do").submit();
	
}

//파일다운로드 type3
function fnDirFileDown (file_path, file_upNm, file_orgNm) {
	
	jQuery("#file_path").val(file_path);
	jQuery("#file_upNm").val(file_upNm);
	jQuery("#file_orgNm").val(file_orgNm);
	
	jQuery("#downForm").attr("action", "/common/dir/FileDown.do").submit();
	
}

function fnGetInternetExplorerVersion() {
	
	var rv = -1;
	if (navigator.appName == 'Microsoft Internet Explorer') {
		var ua = navigator.userAgent;
		var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
		rv = parseFloat(RegExp.$1);
	}
	
	if ( rv > -1 ) {
		
		if ( rv <= 8 ) {
			jQuery(".dimm").css("filter", "alpha(opacity=80)");
			jQuery(".dimm .addLayer").css("filter", "alpha(opacity=80)");
		}
		
	}
	
} 


//html 제거 정규식
function fnRemoveHtml(text)
{
	text = text.replace(/<br>/ig, "\n"); // <br>을 엔터로 변경
	text = text.replace(/&nbsp;/ig, " "); // 공백      
	// HTML 태그제거
	text = text.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");

	// shkim.add.
	text = text.replace(/<(no)?script[^>]*>.*?<\/(no)?script>/ig, "");
	text = text.replace(/<style[^>]*>.*<\/style>/ig, "");
	text = text.replace(/<(\"[^\"]*\"|\'[^\']*\'|[^\'\">])*>/ig, "");
	text = text.replace(/<\\w+\\s+[^<]*\\s*>/ig, "");
	text = text.replace(/&[^;]+;/ig, "");
	text = text.replace(/\\s\\s+/ig, "");

	return text;
} 

String.prototype.trim = function() { 
	return this.replace(/(^\s*)|(\s*$)/gi, ""); 
};
