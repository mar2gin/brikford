/**
 --- WIDGETS CONTAINS ---
 1. Placeholder
 2. equalHeight
 */

/**--- 1. Placeholder ---*/
/*Placeholder. https://github.com/mathiasbynens/jquery-placeholder, http://mths.be/placeholder v2.0.8*/
(function(m,g,d){function r(b){var a={},c=/^jQuery\d+$/;d.each(b.attributes,function(b,d){d.specified&&!c.test(d.name)&&(a[d.name]=d.value)});return a}function h(b,a){var c=d(this);if(this.value==c.attr("placeholder")&&c.hasClass("placeholder"))if(c.data("placeholder-password")){c=c.hide().next().show().attr("id",c.removeAttr("id").data("placeholder-id"));if(!0===b)return c[0].value=a;c.focus()}else this.value="",c.removeClass("placeholder"),this==n()&&this.select()}function l(){var b,a=d(this),c= this.id;if(""==this.value){if("password"==this.type){if(!a.data("placeholder-textinput")){try{b=a.clone().attr({type:"text"})}catch(e){b=d("<input>").attr(d.extend(r(this),{type:"text"}))}b.removeAttr("name").data({"placeholder-password":a,"placeholder-id":c}).bind("focus.placeholder",h);a.data({"placeholder-textinput":b,"placeholder-id":c}).before(b)}a=a.removeAttr("id").hide().prev().attr("id",c).show()}a.addClass("placeholder");a[0].value=a.attr("placeholder")}else a.removeClass("placeholder")} function n(){try{return g.activeElement}catch(b){}}var f="[object OperaMini]"==Object.prototype.toString.call(m.operamini),k="placeholder"in g.createElement("input")&&!f,f="placeholder"in g.createElement("textarea")&&!f,e=d.fn,p=d.valHooks,q=d.propHooks;k&&f?(e=e.placeholder=function(){return this},e.input=e.textarea=!0):(e=e.placeholder=function(){this.filter((k?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":h,"blur.placeholder":l}).data("placeholder-enabled", !0).trigger("blur.placeholder");return this},e.input=k,e.textarea=f,e={get:function(b){var a=d(b),c=a.data("placeholder-password");return c?c[0].value:a.data("placeholder-enabled")&&a.hasClass("placeholder")?"":b.value},set:function(b,a){var c=d(b),e=c.data("placeholder-password");if(e)return e[0].value=a;if(!c.data("placeholder-enabled"))return b.value=a;""==a?(b.value=a,b!=n()&&l.call(b)):c.hasClass("placeholder")?h.call(b,!0,a)||(b.value=a):b.value=a;return c}},k||(p.input=e,q.value=e),f||(p.textarea= e, q.value=e),d(function(){d(g).delegate("form","submit.placeholder",function(){var b=d(".placeholder",this).each(h);setTimeout(function(){b.each(l)},10)})}),d(m).bind("beforeunload.placeholder",function(){d(".placeholder").each(function(){this.value=""})}))})(this,document,jQuery);
/**--- 1. Placeholder end ---*/

/**--- 2. equalHeight ---*/
/*
 Плагин equalHeight v1.0.0
 Описание: Предназначен для посчета большей высоты рядом стоящих элементов и присвоения этой высоты.
 Компания: DemingPro.com
 Разработчик: Александр Ляшенко

 Вызов плагина: $(object).equalHeight();
 Опции: amount - кол-во блоков между которыми будет считаться максимальная высота (default: 2)

 Compressed code of equalHeight v1.0.0:
 */
(function(e){e.fn.equalHeight=function(t){var t=e.extend({amount:2,useParent:false,parent:null,resize:false},t);var n=e(this);n.removeAttr("style");if(t.useParent==true){if(t.parent==null){var r=e(this).parent().outerWidth()}else{var r=t.parent.outerWidth()}var i=e(this).outerWidth(true);t.amount=parseInt(r/i);newAmount=t.amount}var s=this;if(t.resize==true&&t.useParent==true){e(window).resize(function(){n.removeAttr("style");if(t.useParent==true){if(t.parent==null){var r=s.parent().outerWidth()}else{var r=t.parent.outerWidth()}var i=s.outerWidth(true);t.amount=parseInt(r/i)}return s.each(function(r){if(r%t.amount===0){var i=r+1;var s=e(this);var o=s.index();var u=[];var a=[s];for(var f=1;f<t.amount;f++){var l=e(n[r+f]);a.push(l)}for(var c=0;c<t.amount;c++){u.push(a[c].height())}var h=Math.max.apply(Math,u);e(a).each(function(t){var n=e(this);n.css("height",h)})}})})}return this.each(function(r){if(r%t.amount===0){var i=r+1;var s=e(this);var o=s.index();var u=[];var a=[s];for(var f=1;f<t.amount;f++){var l=e(n[r+f]);a.push(l)}for(var c=0;c<t.amount;c++){u.push(a[c].height())}var h=Math.max.apply(Math,u);e(a).each(function(t){var n=e(this);n.css("height",h)})}})}})(jQuery);
/**--- 2. equalHeight end ---*/