var _OBJECT_URL;



document.querySelector('#download-button').addEventListener('click', function() {
	var request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', function(e) {
    	if(request.readyState == 2 && request.status == 200) {
    		console.log('download is starting')
    	}
    	else if(request.readyState == 3) {
    		console.log('download is under progress')
    	}
    	else if(request.readyState == 4) {
    		console.log('download is finished')

        }
    });
    
    request.addEventListener('progress', function(e) {
        var percent_complete = (e.loaded / e.total)*100;
        // console.log(percent_complete);
        console.log(Math.round(percent_complete));
        var div =document.getElementById("result");
        // console.log(div);
        div.innerHTML='<p>'+Math.round(percent_complete)+'</p>';
        var width = Math.round(percent_complete);              
    });
    
    request.responseType = 'arraybuffer';
    
    request.open('get', 'https://s3aws.blob.core.windows.net/output/dev-thejaswini/output/3351/textured/textured_model/25/geomodel.gltf'); 
    
    request.send(); 
});
           