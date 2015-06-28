/*placeholder*/
function placeholderInit(){
	$('[placeholder]').placeholder();
}
/*placeholder end*/
/* showInput */
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
/* showInput end  */

/** ready/load/resize document **/

$(document).ready(function(){
	placeholderInit();
	showInput();
});