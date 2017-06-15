$(document).ready(function() {
	
 $("img").click(function(){

 		if($(".after").css("opacity")==0){ // the .css(XXX) lets js talk to css
 			$(".before").fadeTo(1000,0);
	  		$(".after").fadeTo(1000,1);
		  } else {
		  	$(".after").fadeTo(1000,0);
		  	$(".before").fadeTo(1000,1);
	  }
 });
});


// 1. click on image
// 2. before image fades out
// 3. after image fades i