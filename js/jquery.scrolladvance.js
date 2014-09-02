/* 

	  jQuery plugin scrollAdvance
	  
	  functions :
	  
	  $(this).scrollBottom();_______________________________returns the number of pixels that are hidden from view under the scrollable area. If the scroll bar is at the very bottom, or if the element is not scrollable, this number will be 0. 
	  $(this).scrollRight();________________________________returns the number of pixels that are hidden from view to the right of the scrollable area. If the scroll bar is at the very right, or if the element is not scrollable, this number will be 0.
	  $(this).scrollCenter();_______________________________returns the current coordinates of the center of the view. returns an object containing the properties x and y.
	  
	  $(this).scrollBottom(value [,options]);_______________set the vertical scroll position for the number of pixels that are hidden from view under of the scroll area is equal to value.
	  $(this).scrollRight(value [,options]);________________set the horizontal scroll position for the number of pixels that are hidden from view to the right of the scroll area is equal to value.	
	  $(this).scrollCenter(value,value [,options]);_________set the vertical and/or horizontal scroll for the current coordinates of the center of the view is equal to coordinates x and y put in parameter.
	  $(this).scrollCenter(target [,options]);______________set the vertical and/or horizontal scroll for the current coordinates of the center of the view is equal to center of the target.
	  
	  $(this).scrollTopLeft(target [,options]);_____________set the scroll position for the target is at the top left of the view.
	  $(this).scrollTopRight(target [,options]);____________set the scroll position for the target is at the top right of the view.
	  $(this).scrollBottomLeft(target [,options]);__________set the scroll position for the target is at the bottom left of the view.
	  $(this).scrollBottomRight(target [,options]);_________set the scroll position for the target is at the bottom right of the view.
	  
	  See (http://api.jquery.com/animate/) to know options of animation. options parameter must be a PlainObject type, a jQuery object for target parameter and a numeric number for value parameter.
	  
	  Needs the jQuery library. You can download it here : http://www.jquery.com/ - Version required >=1.6.0
	  
	  @author 	totodunet
	  @date		August 31, 2014
	  @version	1.0.0
	  
	  @website	http://totodu.net/
	  
	  @license
	  The MIT License (MIT)

		Copyright (c) 2014 - Totodunet (www.totodu.net)

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in
		all copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		THE SOFTWARE.
	  	  
*/

(function($)
{

	//scrollBottom()
	
	$.fn.scrollBottom=function(y,o){
	
		if(y==null){
			if($(this).is(document))
				return $(this).height()-$(this).scrollTop()-$(window).height();
			else
				return $(this).prop('scrollHeight')-$(this).prop('offsetHeight')-$(this).scrollTop();
		}
		else{
			//scrollBottom(y)
			if(o==null||!$.isPlainObject(o)){
				if($(this).is(document))
					$('html, body').scrollTop($(this).height()-$(window).height()-y);
				else
					$(this).scrollTop($(this).prop('scrollHeight')-$(this).prop('offsetHeight')-y);
			}
			//scrollBottom(y,options)
			else{
				if($(this).is(document))
					$('html, body').animate({scrollTop:$(this).height()-$(window).height()-y},o);
				else
					$(this).animate({scrollTop:$(this).prop('scrollHeight')-$(this).prop('offsetHeight')-y},o);
			}
		}
		return this;
		
	}
	
	//scrollRight()
	
	$.fn.scrollRight=function(x,o){
		
		if(x==null){
			if($(this).is(document))
				return $(this).width()-$(this).scrollLeft()-$(window).width();
			else
				return $(this).prop('scrollWidth')-$(this).prop('offsetWidth')-$(this).scrollLeft();
		}
		else{
			//scrollRight(x)
			if(o==null||!$.isPlainObject(o)){
				if($(this).is(document))
					$('html, body').scrollLeft($(this).width()-$(window).width()-x);
				else
					$(this).scrollLeft($(this).prop('scrollWidth')-$(this).prop('offsetWidth')-x);
			}
			//scrollRight(x,options)
			else{
				if($(this).is(document))
					$('html, body').animate({scrollLeft:$(this).width()-$(window).width()-x},o);
				else
					$(this).animate({scrollLeft:$(this).prop('scrollWidth')-$(this).prop('offsetWidth')-x},o);
			}
		}
		return this;
		
	}
	
	//scrollCenter()
	
	$.fn.scrollCenter=function(x,y,o){
		
		if(x==null){
			if($(this).is(document))
				return {x:Math.round($(this).scrollLeft()+($(window).width()/2)),y:Math.round($(this).scrollTop()+($(window).height()/2))};
			else
				return {x:Math.round($(this).scrollLeft()+($(this).prop('offsetWidth')/2)),y:Math.round($(this).scrollTop()+($(this).prop('offsetHeight')/2))};
		}
		else if(x!=parseInt(x)&&x!=parseFloat(x)){
			//scrollCenter(element)
			if(y==null||!$.isPlainObject(y))
				return $(this).scrollCenter(x.position().left+(x.width()/2),x.position().top+(x.height()/2));
			//scrollCenter(element,options)
			else if($.isPlainObject(y))
				$(this).scrollCenter(x.position().left+(x.width()/2),x.position().top+(x.height()/2),y);
		}
		else{
			//scrollCenter(x,y)
			if(o==null||!$.isPlainObject(o)){
				if($(this).is(document)){
					$('html, body').scrollLeft(x-Math.round($(window).width()/2));
					$('html, body').scrollTop(y-Math.round($(window).height()/2));
				}
				else{
					$(this).scrollLeft(x-Math.round($(this).prop('offsetWidth')/2));
					$(this).scrollTop(y-Math.round($(this).prop('offsetHeight')/2));
				}
			}
			//scrollCenter(x,y,options)
			else{
				if($(this).is(document))
					$('html, body').animate({scrollLeft:x-Math.round($(window).width()/2),scrollTop:y-Math.round($(window).height()/2)},o);
				else
					$(this).animate({scrollLeft:x-Math.round($(this).prop('offsetWidth')/2),scrollTop:y-Math.round($(this).prop('offsetHeight')/2)},o);
			}
		}
		return this;
		
	}
	
	//scrollTopRight()
	
	$.fn.scrollTopRight=function(t,o){
		
		//scrollTopRight(target)
		if(o==null||!$.isPlainObject(o)){
			if($(this).is(document)){
				$(this).scrollRight($(this).width()-t.position().left-t.width());
				$('html, body').scrollTop(t.position().top);
			}
			else{
				$(this).scrollRight($(this).width()-t.position().left-t.width());
				$(this).scrollTop(t.position().top);
			}
		}
		//scrollTopRight(target,options)
		else{
			if($(this).is(document))
				$('html, body').animate({scrollLeft:$(this).width()-$(window).width()-$(this).width()+t.position().left+t.width(),scrollTop:t.position().top},o);
			else
				$(this).animate({scrollLeft:$(this).prop('scrollWidth')-$(this).prop('offsetWidth')-$(this).width()+t.position().left+t.width(),scrollTop:t.position().top},o);
		}
		return this;
	}
	
	//scrollTopLeft()
	
	$.fn.scrollTopLeft=function(t,o){
		
		//scrollTopLeft(target)
		if(o==null||!$.isPlainObject(o)){
			if($(this).is(document)){
				$('html, body').scrollLeft(t.position().left);
				$('html, body').scrollTop(t.position().top);
			}
			else{
				$(this).scrollLeft(t.position().left);
				$(this).scrollTop(t.position().top);
			}
		}
		//scrollTopLeft(target,options)
		else{
			if($(this).is(document))
				$('html, body').animate({scrollLeft:t.position().left,scrollTop:t.position().top},o);
			else
				$(this).animate({scrollLeft:t.position().left,scrollTop:t.position().top},o);
		}
		return this;
	}
	
	//scrollBottomLeft()
	
	$.fn.scrollBottomLeft=function(t,o){
		
		//scrollBottomLeft(target)
		if(o==null||!$.isPlainObject(o)){
			if($(this).is(document))
				$('html, body').scrollLeft(t.position().left);
			else
				$(this).scrollLeft(t.position().left);
			$(this).scrollBottom($(this).height()-t.position().top-t.height());
		}
		//scrollBottomLeft(target,options)
		else{
			if($(this).is(document))
				$('html, body').animate({scrollLeft:t.position().left,scrollTop:$(this).height()-$(window).height()-$(this).height()+t.position().top+t.height()},o);
			else
				$(this).animate({scrollLeft:t.position().left,scrollTop:$(this).prop('scrollHeight')-$(this).prop('offsetHeight')-$(this).height()+t.position().top+t.height()},o);
		}
		return this;
	}
	
	//scrollBottomRight()
	
	$.fn.scrollBottomRight=function(t,o){
		
		//scrollBottomRight(target)
		if(o==null||!$.isPlainObject(o)){
			$(this).scrollRight($(this).width()-t.position().left-t.width());
			$(this).scrollBottom($(this).height()-t.position().top-t.height());
		}
		//scrollBottomRight(target,options)
		else{
			if($(this).is(document))
				$('html, body').animate({scrollLeft:$(this).width()-$(window).width()-$(this).width()+t.position().left+t.width(),scrollTop:$(this).height()-$(window).height()-$(this).height()+t.position().top+t.height()},o);
			else
				$(this).animate({scrollLeft:$(this).prop('scrollWidth')-$(this).prop('offsetWidth')-$(this).width()+t.position().left+t.width(),scrollTop:$(this).prop('scrollHeight')-$(this).prop('offsetHeight')-$(this).height()+t.position().top+t.height()},o);
		}
		return this;
	}
	
})(jQuery);
