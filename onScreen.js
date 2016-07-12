	$.fn.extend({
    	    onScreen: function(location){
    	    	var 	scrollTop = $(window).scrollTop(),
        		offset = $(this).offset().top,
        		distance = (offset - scrollTop);
        		
        	  switch(location){
          		case 'bottom': location = 1; break;
          		case 'top': location = window.innerHeight; break;
          		default: location = 2;
        	  }
        	
          	if(distance <= (window.innerHeight / location )) 
          		return true;
          	else 
          		return false;
    	    }
	});
