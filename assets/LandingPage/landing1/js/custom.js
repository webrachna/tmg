// =============================================================================
// Function will run on both window ready and resize as well
// =============================================================================
function resizeUI() {

    var $windWidth = $(window).width();                         // Window width
				
	
}

function IsNumber(e) {
                if (navigator.appName != 'Microsoft Internet Explorer') { //alert(e.charCode); 
                    if (!((e.charCode >= 48 && e.charCode <= 57) || e.charCode == 0)) {
                        e.returnValue = false;
                        e.cancel = true;
                        e.preventDefault();
                        return false;
                    }
                }
                else {
                    if (!((e.keyCode >= 48 && e.keyCode <= 57) || e.keyCode == 0)) {
                        e.returnValue = false;
                    }
                }
            }
			

function fn_openForm(){
	document.getElementById("msg").innerHTML='';
		
		txtname.value='Full Name';
		txtemail.value='Email';
		txtphone.value='Phone';
		txtwebsite.value='Website';
		txtmessage.value='Write your message...';
	}
	
	function fn_ValidateForm(){
		
	
	var fname = document.getElementById('txtname').value;
                if (fname == null || fname == "" || fname == 'Full Name') {
                    alert('Please fill out your Name.');
                    txtname.focus();
                    return false;
                }

                var email = document.getElementById('txtemail').value;
                if (email == null || email == "" || email == 'Email') {
                    alert('Please fill out your Email.');
                    txtemail.focus();
                    return false;
                }
                var atpos = email.indexOf("@");
                var dotpos = email.lastIndexOf(".");
                if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
                    alert("Not a valid e-mail address");
                    return false;
                }

                var phone = document.getElementById('txtphone').value;
                if (phone == null || phone == "" || phone == 'Phone') {
                    alert('Please fill out your phone number.');
                    txtphone.focus();
                    return false;
                }
				
				var website = document.getElementById('txtwebsite').value;
                if (website == null || website == "" || website == 'Website') {
                    alert('Please fill out your web address');
                    txtwebsite.focus();
                    return false;
                }

                var message = document.getElementById('txtmessage').value;
                if (message == null || message == "" || message == 'Write your message...') {
                    alert('Please fill out your Message.');
                    txtmessage.focus();
                    return false;
                }
				
	
	
		fn_LoadXMLDoc();
		//alert('called');
		//fn_HideMessage();
	}

	function fn_LoadXMLDoc(){
		//fn_ShowProgress();

		var xmlhttp;
		if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
		}
		else {// code for IE6, IE5
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		//alert(xmlhttp);
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("msg").innerHTML = xmlhttp.responseText;
				//fn_HideProgress();
				//fn_ShowMessage();
				
					if((xmlhttp.responseText).indexOf("Thank") >=0 ){
						//alert('true');
						$('.lightBox, .backdrop').delay(3000).fadeOut('slow');
						return true;
					}
					else{
						
						//alert('false');						
						return false;
					}
			}
		}
		


		xmlhttp.open("POST", "SendEmail.aspx?fName=" + txtname.value + "&email=" + txtemail.value + "&phone=" + txtphone.value + "&website=" + txtwebsite.value + "&message=" + txtmessage.value + "", false);
		xmlhttp.send();
	}


 

// =============================================================================
// Below function will run only the document get ready to work.
// =============================================================================
;(function( $, window, document, undefined ){

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
						
			scrollTop : function(speed){
							return this.click(function () {
						        $body.animate({
						            scrollTop: 0
						        }, speed || 400, 'swing');
						    });
						},
						
			// Open Lightbox
			lightBox : function(){
							return this.click(function(e) {
								var thisBox = $(this).attr("name");
								//console.log(thisBox);
								$('.backdrop,.' + thisBox).fadeIn();
								$('.box').animate({
									'opacity': '1.00'
								}, 300, 'linear');
								$('.backdrop,.' + thisBox).css('display', 'block');
								
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
	
	
	/*
	****************************************************************
	=Custom Light Box
	****************************************************************
	*/
	
	$('.lightbox').elResponder('lightBox')
    $('.boxClose').click(function() {
        close_box();
    });

    function close_box() {
        $('.backdrop,.lightBox').fadeOut();
        
    }
	
	$(document).keyup(function(e) { 
        if (e.keyCode == 27) { // esc keycode
            $('#overlay, .lightBox').fadeOut();
        }
    });
	



  		
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