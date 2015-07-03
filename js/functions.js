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
		var currentSearchBtn = $(this);
		var searchWrapper = currentSearchBtn.closest('.search-form').find('.input-wrapper');
		var serchField = searchWrapper.find('input');
		var duration = 400;
		if ( currentSearchBtn.closest('form').find('input').val().length && currentSearchBtn.parents('.search-form').find('.input-wrapper').is(':visible') ){
			currentSearchBtn.closest('form').submit();
		} else {
			searchWrapper
				.stop()
				.addClass('search-init')
				.animate({
					width: 300
				}, duration, function(){
					searchWrapper.find('input').val('');
					searchWrapper.find('input').trigger('focus');
				});
				serchField.stop().fadeIn(duration);
			var yourClick = true;
			$(document).on('click.EventSearch', function (e) {
				if ( !yourClick && $(e.target).closest($('.input-wrapper')).length  == 0 ) {
					searchWrapper
						.stop()
						.animate({
							width:0
						}, duration, function () {
							searchWrapper.removeClass('search-init');
						});
					serchField.stop().fadeOut(duration);
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
	var footerContHeight = footer.find('.footer-content').outerHeight();
	footer.height(footerContHeight);
	footer.css('margin-top', -footerContHeight);
	$('.spacer').css('height', footerContHeight);
}
/* footer at bottom end */

/*slick init*/
function slickInit(){
	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		centerPadding: 0,
		infinite: false,
		responsive: [
			{
				breakpoint: 979,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: false
				}
			},
			{
				breakpoint: 639,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: false
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
		speed: 500
	});
}
/*slick init end*/

/*fancybox*/
function fancyboxInit(){
	/*gallery photos*/
	if ($('.photo-gallery').length) {
		var photoGallry = $('.photo-gallery a');
		photoGallry.each(function () {
			$(this).attr('data-fancybox-group', 'photo-gallery')
		});
		photoGallry.fancybox({
			openEffect: 'none',
			closeEffect: 'none'
		});
	}
	/*popup*/
	var popup = $('.popup-open');
	if (popup.length) {
		popup.fancybox({
			wrapCSS: 'fancybox-popup',
			padding: 0,
			openEffect: 'none',
			closeEffect: 'none'
		});
	}
}
/*fancybox end*/

/*regions drop*/
function regionsDrop(){
	$('.select-regions > a').on('click', function (e) {
		e.stopPropagation();
		$(this).closest('.select-regions').find('.regions-drop').stop().slideToggle('fast', function () {
			var currentDrop = $(this);
			currentDrop.removeClass('active');
			if(currentDrop.is(':visible')){
				currentDrop.addClass('active');
			}
		});
		e.preventDefault();
	});

	$('.regions-drop').on('click', function (e) {
		e.stopPropagation();
	});

	$(document).on('click', function (e) {
		$('.regions-drop').slideUp();
	});
}
/*regions drop end*/

/* checkbox/radiobox */
function checkbox(){
	$('.def-ch').checkbox({
		cls:'jquery-checkbox'
	});
	$('.def-radio').checkbox({
		cls:'jquery-radiobox'
	});
}
/* checkbox/radiobox end */

/*form focus*/
function formFocus(){
	$('form').on('focus', 'input', function () {
		$('.form-line').removeClass('focusing');
		$(this).closest('.form-line').addClass('focusing');
	}).on('blur', 'input', function () {
		$('.form-line').removeClass('focusing');
	})
}
/*form focus end*/

/** ready/load/resize document **/

$(document).ready(function(){
	placeholderInit();
	showInput();
	slickInit();
	fancyboxInit();
	regionsDrop();
	checkbox();
	formFocus();
});
$(window).load(function(){
	footerBottom();
	equalHeightInit();
});
$(window).resize(function(){
	footerBottom();
	equalHeightInit();
});