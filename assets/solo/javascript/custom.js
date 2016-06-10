// =============================================================================
// Function will run on both window ready and resize as well
// =============================================================================
function resizeUI() {

    var $windWidth = $(window).width();                         // Window width
				
	
}

$(function() {

//Start for Opening details
var anc = window.location.href.split('#')[1];
$('#' + anc + '.switchgroup').show();
	  
//Start Left Navigation Animation
var sidebar = $('#menu');
var sidebarWidth = $(sidebar).width();
var width 		= eval('-' + sidebarWidth);

sidebar.animate({left:width}, 300);


	$('.respMenu a').click(function(){
	$(sidebar).animate({left:'0'});
	});

	$(document).click(function (e){
		if (!sidebar.is(e.target) // if the target of the click isn't the container...
			&& sidebar.has(e.target).length === 0) // ... nor a descendant of the container
		{
			sidebar.animate({left: width});
		}	  
	});



if($(window).width() > 1023){
	function getViewportHeight(){
		var height=window.innerHeight;
		var mode=document.compatMode;
			if((mode||!$.support.boxModel)){
				height=(mode=='CSS1Compat')?document.documentElement.clientHeight:document.body.clientHeight;
				}
	return height;}
	
$(window).scroll(function(){
	var vpH=getViewportHeight(),
		scrolltop=(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop),
		elems=[];$.each($.cache,function(){
			if(this.events&&this.events.inview){
				elems.push(this.handle.elem);
				}
		});
			if(elems.length){
				$(elems).each(function(){
					var $el=$(this),
						top=$el.offset().top,
						height=$el.height(),
						inview=$el.data('inview')||false;
					if(scrolltop>(top+height)||scrolltop+vpH<top){
						if(inview){$el.data('inview',false);$el.trigger('inview',[false]);}
					}else if(scrolltop<(top+height)){
						if(!inview){$el.data('inview',true);$el.trigger('inview',[true]);}
						}
					});
			}
			
	$('.bannerContentBlock, .executive-team').each(function () {
        if (($(this).offset().top - $(window).scrollTop()) < 350) {
            $(this).stop().fadeTo(500, 1);
        } else {
            $(this).stop().fadeTo(500, 0);
        }
    });
	
	
	});
	
}




});



$(document).ready(function(){
/*if($(window).width() > 320){
$('#menu').css({'max-height':'100%'});
}*/


var $window=$(window);
var aboutBG=$('#about');
var whatWeDoBG=$('#whatWeDo');
var techPlatformBg=$('#techPlatform');
var $ourClientsBG=$('#ourClients');
var networkPartnersBG=$('#networkPartners');
var $ourTeamBG=$('#ourTeam');
var contactUsBG=$('#contactUs');
var windowHeight=$window.height();



function ortChange(){
	windowHeight=$window.height();
	navigationHeight = windowHeight - 60;
	$('#menu ul').height(navigationHeight);
	
}


if($(window).width() > 1023){
	$('.whatWeDoPointers li').each(function(index, elem){
	$(this).css({
			marginLeft: '-'+ 48*index + 'px'
			});
		
	});


$(aboutBG).find('figure.bannerImg > img').css({
	display:'none'
	});
$(whatWeDoBG).find('figure.bannerImg > img').css({
	display:'none'
	});
$(techPlatformBg).find('figure.bannerImg > img').css({
	display:'none'
	});
$(networkPartnersBG).find('figure.bannerImg > img').css({
	display:'none'
	});
$(contactUsBG).find('figure.bannerImg > img').css({
	display:'none'
	});

$(aboutBG).addClass('aboutBg');
$(whatWeDoBG).addClass('whatWeDoBg');
$(techPlatformBg).addClass('techPlatformBg');
$(networkPartnersBG).addClass('networkPartnersBG');
$(contactUsBG).addClass('contactUsBG');




	
$('#about, #whatWeDo, #techPlatform, #ourClients, #networkPartners, #ourTeam, #contactUs').bind('inview',function(event,visible){
		if(visible==true){
			$(this).addClass("inview");
		}else{
			$(this).removeClass("inview");
			}
		});

function newPos(x,windowHeight,pos,adjuster,inertia){
	return x+"% "+(-((windowHeight+pos)-adjuster)*inertia)+"px";
	}

function Move(){
	var pos=$window.scrollTop();
	if(aboutBG.hasClass("inview")){
		aboutBG.css({'backgroundPosition':newPos(50,windowHeight,pos,730,0.3)
		});
	}
	if(whatWeDoBG.hasClass("inview")){
		whatWeDoBG.css({'backgroundPosition':newPos(50,windowHeight,pos,1300,0.3)
		});
	}
	if(techPlatformBg.hasClass("inview")){
		techPlatformBg.css({'backgroundPosition':newPos(50,windowHeight,pos,2600,0.3)
		});
	}
	if($ourClientsBG.hasClass("inview")){
		$ourClientsBG.css({'backgroundPosition':newPos(50,windowHeight,pos,3000,0.3)
		});
	}
	if(networkPartnersBG.hasClass("inview")){
		networkPartnersBG.css({'backgroundPosition':newPos(50,windowHeight,pos,4000,0.3)
		});
	}
	if($ourTeamBG.hasClass("inview")){
		$ourTeamBG.css({'backgroundPosition':newPos(50,windowHeight,pos,4500,0.3)
		});
	}
	if(contactUsBG.hasClass("inview")){
		contactUsBG.css({'backgroundPosition':newPos(50,windowHeight,pos,5750,0.3)
		});
	}
}

$window.bind('scroll',function(){Move();});




}

if($(window).width() < 1023){
	$('.mainSlidePanel').find('h1');
	if($(this).parent('div').has('figure')){
		$('.mainSlidePanel h1').css({
			lineHeight:'135px',
			marginTop:	'0px'
			
			});
	$('.contentBlock h1').css({
		position:	'relative',
		lineHeight:	'36px',
		marginTop:	'0'
		});
	}

$('#nav a').on('click', function(){
	$('#menu').animate({'left':'-200px'});
	});

ortChange();

// Find matches
var mql = window.matchMedia("(orientation: portrait)");

// If there are matches, we're in portrait
if(mql.matches) {
	//alert('Portrait orientation');
	ortChange();
} else {
	//alert('Landscape orientation');
	ortChange();
}

// Add a media query change listener
mql.addListener(function(m) {

	if(m.matches) {
		ortChange();
		//alert('Changed to portrait');
	}
	else {
		ortChange()
		//alert('Changed to landscape');
	}
});

// Listen for orientation changes
window.addEventListener("orientationchange", function() {
	// Announce the new orientation number
	//alert('>>> '+window.orientation);
}, false);

	
}





	
$('#platformCapButton').click(function(){ 
     $('#platformCap').fadeIn('slow');
     $('#techPlatform').fadeOut('slow');
});
$('#techPlatformButton').click(function(){      
     $('#techPlatform').fadeIn('slow');
     $('#platformCap').fadeOut('slow');
});



	

/*
****************************************************************
=Custom Light Box
****************************************************************
*/
$('.openPopup').on('click', function(e){

if( $('#view-post-overlay, #post-wrapper').length < 2 ){
$('<div id="view-post-overlay"></div><div id="post-wrapper"></div>').prependTo('body').fadeIn('slow');
} else {
$('<div id="view-post-overlay"></div><div id="post-wrapper"></div>').fadeIn('slow');
}

//alert('hi');
$('#post-wrapper').css({'top': $(window).scrollTop() + 60 + 'px'});

var pageName = $(this).attr('href');
if(pageName !== '#'){
$('#post-wrapper').empty();
$('#post-wrapper').load(pageName);
}
e.preventDefault();


});


$('.closePopup a').bind("click", function(){
	$('#view-post-overlay, #post-wrapper').empty().remove().fadeOut();
	});


$(document).keyup(function(e) { 
	if (e.keyCode == 27) { // esc keycode
		$('#view-post-overlay, #post-wrapper').empty().remove().fadeOut();
	}
});




/*
****************************************************************
Scroll Top
****************************************************************
*/
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('#goTop').fadeIn();
	} else {
		$('#goTop').fadeOut();
	}
});
$('#goTop').elResponder('scrollTop')                                                      // scroll body to 0px on click.
/* =End Scroll Top */
	
	
	
});



// =============================================================================
// Below function will run only the document get ready to work.
// =============================================================================
(function( $, window, document, undefined ){

    // Default variables
    var $windWidth = $(window).width(),                                    // Grab the Current Window Width.
		$windHeight = $(window).height(),                                  // Grab the Current Window Height.
		$menu = $('#menu'),                                                // Find menu div.
		$closeMenu = $('.closMenu'),                                       // Defined Close Link for Responsive Navigation.
		xWidth = $menu.outerWidth() + $closeMenu.outerWidth(),             // Menu horizontal prosition.
		$body = $('body, html');
	
	
		// Changed the Default Set Animation speed
   		$.fx.speeds._default = 400;                                        // Self defined default speed of jquery.
    	$.fx.speeds.fast = 200;                                            // Self defined fast speed.
		
		// services function
    	resizeUI();                                                        // resize functions.
		





		/*
		******************************************
		Plugins Method
		******************************************
		*/
		var UIMethods = {
						
			// open external links in blank window
			externalLinks : function(){
							return this.filter(function () {
						        return this.hostname && this.hostname !== location.hostname;
						    });
						},
						
			
			// Prevent Defualt function for anchor tags				
			prevDefault : function () {
							return this.click(function (e) {
								e.preventDefault();
							})
    					},
			
			
			// Input and Textarea - toggling the default value
			toggleInputValue : function (speed, easing, callback) {
							return this.each(function () {
								$(this).focus(function () {
									if (this.value === this.defaultValue) {
										this.value = '';
									}
								}).blur(function () {
									if (this.value === '') {
										this.value = this.defaultValue;
									}
								})
							});
						},
						
			// Showing Menu on Devices
			showRespNav : function(speed){
							return this.on('click', function (e) {
						        $menu.animate({
						            right: '0'
						        }, speed || 400);        
					    	});
						},
			
			// Close Menu on Devices
			hideRespNav : function(speed){
							return this.on('click', function (e) {
								if ( $(e.target).is('a') ) {    
							        xWidth = (xWidth < 0) ? xWidth : xWidth * -1;
							        //xWidth = -Math.abs(xWidth)
							        $menu.animate({
							            right: xWidth
							        }, speed || 400);
								}
						    });
						},
			
			// scroll body to 0px on click
			scrollTop : function(speed){
							return this.click(function () {
						        $body.animate({
						            scrollTop: 0
						        }, speed || 400, 'swing');
						    });
						}
			
			
			
		};
		
		// Method calling logic
		$.fn.elResponder = function( method ) {
			
			// Method calling logic
			if ( UIMethods[method] ) {
				return UIMethods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
			} else if ( typeof method === 'object' || ! method ) {
				return UIMethods.init.apply( this, arguments );
			} else {
				$.error( 'Method ' +  method + ' does not exist on jQuery.elResponder' );
			}    

		};

// =============================================================================
// Called The Plugins Methods
// =============================================================================
	
    $('input[type="text"], input[type="password"], textarea').elResponder('toggleInputValue');                // Input and Textarea - toggling the default value.
    $('a[href="#"]').elResponder('prevDefault');                                                              // Some of default actions defined for anchor tag.
	$('.respMenu a').elResponder('showRespNav', 300);	                                        // Showing Menu on Devices.
    $closeMenu.find('a').elResponder('hideRespNav', 300);	                                    // Close Menu on Devices.
	

	
  		
})( jQuery, window, document );


// ============================================================================= 
// = Below function will run only the window get resized.
// = iPad, iPhone and iPod window Resize issue Resolved by stoping window resize function run twice.
// =============================================================================

$(window).on('resize', function (){
	resizeUI();                                                                                // resize functions
})


// ============================================================================= 
// = Page Smooth Scroll Plugin.
// =============================================================================
;(function($,window, document, undefined){
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    //.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 400);
        });
      }
    }
  });
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
 
})($, window, document);


// ============================================================================
// Stop Window resize because it runs two time.
// ============================================================================
if(/iPhone|iPod/i.test(navigator.userAgent)){ $(window).unbind('resize'); }