/** 

	Author: Niels Vermaut
	Dependancies: jQuery 1.11, stopwatch.js (https://gist.github.com/electricg/4372563)

*/

$(document).keypress(function(event){

   var keycode = (event.keyCode ? event.keyCode : event.which);
    
   if(keycode == '114'){
        if (confirm('Do you want to reset the timer?')) {
            reset();
            $('#timestamps').html('');
	    $('#timestamps').css('border-bottom','0');
        }
    }

    if(keycode == '98'){
            start();
    }

    if(keycode == '101'){
            stop();
    }

    if(keycode == '120'){
        exportTimestamps();
    }

    if(keycode == '110'){
        addTimestamp();
        console.log("Timestamp " + getTime());
    }

});

var timestamps = [];

function addTimestamp(){
    var time = getTime();
    var html = $("#timestamps").html();
    html += '<div class="timestamp">' + time + '</div>';
    $('#timestamps').html(html);
    timestamps.push({"timestamp": time, "title":"Add a title"});
    detectHeight();
}

function exportTimestamps(){  
    var myWindow = window.open("", "MsgWindow", "width=600, height=420");
    myWindow.document.write(JSON.stringify(timestamps));
}
