/*placeholder*/
function placeholderInit(){
	$('[placeholder]').placeholder();
}
/*placeholder end*/
/*showInput */
function showInput(){
	var searchForm = $('.search-form');
	if(!searchForm.length){ return; }
	searchForm.on('click', '.btn-search', function(e){
		if ( $(this).closest('form').find('input').val().length && $(this).parents('.search-form').find('.input-wrapper').is(':visible') ){
			$(this).closest('form').submit();
		} else {
			var searchWrapper = searchForm.find('.input-wrapper');
			searchWrapper
				.stop()
				.show(0)
				.animate({
					width: 200
				}, 200, function(){
					searchWrapper.find('input').val('');
					searchWrapper.find('input').trigger('focus');
				});
			var yourClick = true;
			$(document).on('click.EventSearch', function (e) {
				if ( !yourClick && $(e.target).closest($('.input-wrapper')).length  == 0 ) {
					searchWrapper.stop().animate({
						width:0
					}, 200, function(){
						searchWrapper.hide(0);
					});
					$(document).unbind('click.EventSearch');
				}
				yourClick = false;
			});
			e.preventDefault();
		}
	});
}
/*showInput end*/

/*equalHeight*/
function equalHeightInit() {
	/*categories list*/
	var parentWrapper = $('.categories');
	var amountSizeCategories = parentWrapper.children('li').length;
	parentWrapper.find('.product-title').equalHeight({
		amount: amountSizeCategories,
		//useParent: true,
		//parent: parentWrapper,
		resize: true
	});
	/*hits list*/
	var hitsList = $('.hits');
	var amountSizeHits = hitsList.children('li').length;
	hitsList.find('.product-title').equalHeight({
		amount: amountSizeHits,
		//useParent: true,
		//parent: hitsList,
		resize: true
	});
	/*goods list*/
	var goodsList = $('.goods');
	var amountSizeGoods = goodsList.children('li').length;
	goodsList.find('.product-title').equalHeight({
		amount: amountSizeGoods,
		//useParent: true,
		//parent: goodsList,
		resize: true
	});
	goodsList.find('.product-brands-list').equalHeight({
		amount: amountSizeGoods,
		//useParent: true,
		//parent: goodsList,
		resize: true
	});
	/*actions list*/
	var actionsList = $('.actions-list');
	var amountSizeActions = actionsList.children('li').length;
	actionsList.find('.product-title').equalHeight({
		amount: amountSizeActions,
		resize: true
	});
}
/*equalHeight end*/

/* footer at bottom */
function footerBottom(){
	var footer = $('.footer');
	var footerOuterHeight = footer.outerHeight();
	var footerHeight = footer.height();
	footer.css({
		'margin-top': -footerOuterHeight,
		'height': footerHeight,
		'min-height': footerHeight
	});
	$('.spacer').css({
		'height': footerOuterHeight
	});
}
/* footer at bottom end */

/** ready/load/resize document **/

$(document).ready(function(){
	placeholderInit();
	showInput();
});
$(window).load(function(){
	footerBottom();
	equalHeightInit();
})
;$(window).resize(function(){
	footerBottom();
});