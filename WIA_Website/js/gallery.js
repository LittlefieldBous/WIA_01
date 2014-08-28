window.onload = function() {
	
	$(".lightbox_trigger").click(function(e){
			
			//Prevent default action (make them not clickable)
			e.preventDefault(); //if this wasnt here one could click on it
			
			//Get the clicked links href
			var image_href = $(this).attr("href");
			//console.log(image_href);
			
			//Setup the lightbox if it doesnt exist or use the lightbox if it DOES exist
			
			if($("#lightbox").length>0){
					//Lightbox DIV is already created, so then we can use it
					
					//Place the clicked href into our lightbox div img tag
					$("#content").html('<img src="'+image_href+'"/>');
					
					$("#lightbox").fadeIn(1000);
					$("#togglebtn").hide();
					

					
				
				}else{
					//First Time lightbox DIV will not exist, so let make it
					
					var lightbox=
						'<div id="lightbox">' + //checking for lightbox
						'<p>Click To Close</p>'+ //text inside the lightbox to close it.
						'<div id="content">' + 
						//Insert the clicked link href into an img
						'<img src="' + image_href + '" />'+
						'</div>' + //end of content
						'</div>'; //end of lightbox
					
					//Insert the lightbox HTML into our page
					
					$("body").append(lightbox);
					
					$("#lightbox").hide();
					$("#lightbox").fadeIn(1000);
					
					
					
					}
		
		
		});
	
	
	//Setup our to click to close //use live since it's going into the DOM
	$("#lightbox").live('click', function(){
		
			$("#lightbox").fadeOut(1000);
		
		});
	

}