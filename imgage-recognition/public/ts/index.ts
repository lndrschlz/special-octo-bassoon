interface JQuery {
    //ajaxSubmit(function):void;
}


function uploadImage() {
	
	console.log("[uploadImage()]");
	
	//var imgFile = new File();
	let imgFile = (<HTMLInputElement>document.getElementById('imgUploader')).files[0];

	console.log(imgFile)

	$.ajax({
	    type: "POST",
	    contentType: "image/png",
	    url: "/api/Upload",
	    data: JSON.stringify(imgFile)
	})
	.done(function(response){
	    console.log(response)
	})
	.fail(function(xhr, textStatus, errorThrown){
		console.log("ERROR: ",xhr.responseText)
		return xhr.responseText;
	});
/*	$(document).ready(function() { 
	    $('#uploadForm').submit(function() {
	        $("#status").empty().text("File is uploading...");
	        $(this).ajaxSubmit({
	            error: function(xhr) {
	        		status('Error: ' + xhr.status);
	            },

	            success: function(response) {
	        		$("#status").empty().text(response);
	                console.log(response);
	            }
		    });
		        //Very important line, it disable the page refresh.
		    return false;
	    });    
	}); */
	return ;
}

function createObject() {
	// request to create a new object on the server
/*	$.ajax({
	    type: "GET",
	    contentType: "application/json",
	    url: "/add",
	})
	.done(function(response){
	    console.log(response)
		log("# object created");
		log(JSON.stringify(response))
	})
	.fail(function(xhr, textStatus, errorThrown){
		console.log("ERROR: ",xhr.responseText)
		return xhr.responseText;
	});*/
    return ;
}


