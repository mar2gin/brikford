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
		var currentForm = currentSearchBtn.closest('.search-form');
		var searchWrapper = currentForm.find('.input-wrapper');
		var searchField = searchWrapper.find('input');
		var dur = 300;
		if ( currentSearchBtn.closest('form').find('input').val().length && currentSearchBtn.parents('.search-form').find('.input-wrapper').is(':visible') ){
			currentSearchBtn.closest('form').submit();
		} else {
			var maxWidth = searchWrapper.data('max-width');
			var minWidth = searchWrapper.data('min-width');
			currentForm.addClass('search-init')
			searchWrapper
				.stop()
				.animate({
					width: maxWidth
				}, dur, function(){
					searchWrapper.find('input').val('');
					searchWrapper.find('input').trigger('focus');
				});
				searchField.stop().fadeIn(dur);
			var yourClick = true;
			$(document).on('click.EventSearch', function (e) {
				if ( !yourClick && $(e.target).closest($('.input-wrapper')).length  == 0 ) {
					currentForm.removeClass('search-init');
					searchWrapper
						.stop()
						.animate({
							width:minWidth
						});
					searchField.stop().fadeOut(dur);
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
		$('.regions-drop').slideUp('fast');
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

/*open/close drop menu*/
function dropMenu(){
	var menuCategory = $('.menu');
	if(!menuCategory.length){return;}
	var dur = 300;
	$('.nav-catalog > a').on('click', function (e) {
		e.stopPropagation();
		if ($(window).width() > 979) { return; }
		equalDrop($('.menu-list'),$('.menu-list > li > ul'),$('.menu-list > li > ul > li > ul'));
		var current = $(this);
		current.wrapInner('<span class="text-inner" />');
		current
			.closest('.nav-catalog')
			.toggleClass('active')
			.closest('.wrapper')
			.find('.menu').toggleClass('active');
		var changeText = current.find('.text-inner');
		if(current.closest('.nav-catalog').hasClass('active')){
			changeText.text('Закрыть');
		} else {
			changeText.text('Каталог');
		}
		var regionDrop = $('.regions-drop');
		if(regionDrop.is(':visible')){
			regionDrop.slideUp(dur);
		}
		e.preventDefault();
	});
	menuCategory.on('click', function (e) {
		e.stopPropagation();
	});

	$(document).on('click', function (e) {
		resizeCleaner();
	});
}
/*open/close drop menu end*/

/*nav drop dynamic styling*/
function equalDrop(firstDrop, secondDrop, thirdDrop) {
	var firstDropHeight = firstDrop.height();
	var secondDropHeight = secondDrop.height();
	var thirdDropHeight = thirdDrop.height();
	if (thirdDropHeight > secondDropHeight) {
		secondDropHeight = thirdDropHeight;
		secondDrop.height(thirdDropHeight);
	} else {
		thirdDrop.height(secondDropHeight);
	}
	if (secondDropHeight > firstDropHeight) {
		firstDrop.height(secondDropHeight);
	} else {
		secondDrop.height(firstDropHeight);
	}
	secondDrop.css('margin-top', - firstDrop.children('li.active').offset().top + firstDrop.offset().top);
	thirdDrop.css('margin-top', - secondDrop.children('li.active').offset().top + secondDrop.offset().top);
}

/*nav drop dynamic styling end*/

/*resize cleaner*/
function resizeCleaner() {
	var menu = $('.menu');
	if (!menu.hasClass('active')) { return; }
	var current = $('.nav-catalog > a');
	current.closest('.nav-catalog').removeClass('active');
	var changeText = current.find('.text-inner');
	changeText.fadeOut('fast', function () {
		changeText.text('Каталог');
		changeText.fadeIn('fast');
	});
	menu.removeClass('active');
	menu.find('ul').each(function () {
		var attrStyle = $(this).attr('style');
		if (typeof attrStyle !== typeof undefined && attrStyle !== false) {
			$(this).attr('style', '');
		}
	});
}
/*resize cleaner*/


/** ready/load/resize document **/

$(document).ready(function(){
	placeholderInit();
	showInput();
	slickInit();
	fancyboxInit();
	regionsDrop();
	checkbox();
	formFocus();
	dropMenu();
});
$(window).load(function(){
	footerBottom();
	equalHeightInit();
});
$(window).resize(function(){
	footerBottom();
	equalHeightInit();
	resizeCleaner();
});