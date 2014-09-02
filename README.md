scrollAdvance
==============

It adds some useful functions for the scroll position in more scrollLeft() and scrollTop().

    $(document).ready(function(){
        $(document).scrollRight(0,{duration:4000,ease:'swing'});
    });
    
Set the scroll position at far right with an animation of 4 seconds duration.
    
functions
=========

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
    
jQuery required version >=1.6.0

demonstration and about
=======================
   
See a demonstration here : http://totodunet.github.io/jquery-scrolladvance/

If you're interested, thanks to fork me or/and contribute to the development of jquery-scrolladvanced!

published under the MIT License (http://opensource.org/licenses/MIT)

Totodunet,
http://totodu.net/
