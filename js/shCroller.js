/** 
	Dependancies: jQuery 1.11
*/

function showScrollbar(){
    $('#timestamps').css('overflow-y', 'scroll');
}

function hideScrollbar(){
   $('#timestamps').css('overflow-y', 'hidden');
}

function detectHeight(){
   var height = $('#timestamps').prop('scrollHeight');
   
   if(height > 420){
     $('#timestamps').css('border-bottom', '2px dotted #e7e7e7');
   }
}
