import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  	
  
  constructor() { }
  	// public width:number = 0;
  download(){
  	let request = new XMLHttpRequest();
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
        let percent_complete = (e.loaded / e.total)*100;       
        console.log(Math.round(percent_complete));        
      let width= Math.round(percent_complete);              
    });
  	request.responseType = 'arraybuffer';
    
    request.open('get', 'https://s3aws.blob.core.windows.net/output/dev-thejaswini/output/3351/textured/textured_model/25/geomodel.gltf'); 
    
    request.send(); 


  }


  ngOnInit() {
  }

    

}
