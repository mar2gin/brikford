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
	/* resources list */
	var parentWrapper = $('.categories');
	parentWrapper.find('.product-title').equalHeight({
		amount: 5,
		useParent: true,
		parent: parentWrapper,
		resize: true
	});
	var hitsList = $('.hits');
	hitsList.find('.product-title').equalHeight({
		amount: 5,
		useParent: true,
		parent: hitsList,
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
	equalHeightInit();
});
$(window).load(function(){
	footerBottom();
})
;$(window).resize(function(){
	footerBottom();
});