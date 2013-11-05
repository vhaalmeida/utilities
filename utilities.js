/*
utilities.js
autor: Victor Almeida
email: vh@vhlab.com.br
summary: basic functions to speed up development
*/

var utilities = {
	//get parameters of a querystring
	//use location.search as source to get a parameter from an URL
	//e.g. getParameter('xpto',location.search) returns xpto's value
	getParameter : function(name, source) {
		return decodeURI(
			(RegExp(name + '=' + '(.+?)(&|$)').exec(source)||[,null])[1]
		);
	}
	,
	//remove accents of a string and replace space to hyphen
	//e.g. getParameter('ááÉÓ Xtò') returns 'aaEO-Xto'
	removeAccent : function(str) {
		accent = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ ";
		no_accent = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC-";
		var newStr ="";
		for (var i = 0; i < str.length; i++) {
			if (accent.indexOf(str.charAt(i)) != -1) {
				newStr += no_accent.substr(accent.search(str.substr(i,1)),1);
			} else {
				newStr += str.substr(i,1);
			}
		}
		return newStr;
	} 
	,
	//add classes to html tag to crossbrowser
	htmlClasses : function(){
		var e="unknownBrowser";if($.browser.msie){e="msie msie"+parseInt($.browser.version,10)}else if($.browser.webkit){var t=navigator.userAgent.toLowerCase();if(t.indexOf("chrome")===-1){e="safari"}else{e="chrome"}}else if($.browser.mozilla){e="mozilla"}else if($.browser.opera){e="opera"}else if($.browser.camino){e="camino"}$("html").addClass(e);var n="unknownOs";if(navigator.appVersion.indexOf("Win")!=-1){n="windows"}else if(navigator.appVersion.indexOf("Mac")!=-1){n="mac"}else if(navigator.appVersion.indexOf("X11")!=-1){n="unix"}else if(navigator.appVersion.indexOf("Linux")!=-1){n="linux"}$("html").addClass(n);
	}
	,
	vtex: {
		//Coloca a Ref do nome do produto entre span
		splitProductRef: function(){
			if($('.productName').length > 0){
				var nome = $('.productName').html().split('Ref.');
				$('.productName').html('');
				if(nome[1] == undefined){
					$('.productName').append('<span class="name">'+nome[0]+'</span><span class="ref">Ref. '+$('.value-field.Referencia-Cor').html()+'</span>');
				}else{
					$('.productName').append('<span class="name">'+nome[0]+'</span><span class="ref">Ref. '+nome[1]+'</span>');
				}
				}
			
		}
		,
		//Coloca a Ref do nome de cada produto de uma prateleira entre span
		splitPrateleiraRef: function(){
			if($('.prateleira li[layout]:not(".ajax-formated")').length > 0){
				$('.prateleira li[layout]:not(".ajax-formated")').each(function(){
					var productName = $(this).find('h3 a').html();
					if(productName.indexOf('Ref.') != -1)
					{
						var productNameSplited = productName.split('Ref.');
						$(this).find('h3 a').html('<span class="name">'+productNameSplited[0]+'</span><span class="ref">Ref. '+productNameSplited[1]+'</span>');
					}
					$(this).addClass('ajax-formated');
			   });
			}
			
		}
	}
}
