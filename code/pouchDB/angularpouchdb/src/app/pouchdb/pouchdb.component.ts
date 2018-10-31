import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import {OSM, TileArcGISRest} from 'ol/source.js';
import PouchDB from 'pouchdb-browser';
 import TileJSON from 'ol/source/TileJSON.js';


@Component({
  selector: 'app-pouchdb',
  templateUrl: './pouchdb.component.html',
  styleUrls: ['./pouchdb.component.css']
})
export class PouchdbComponent implements OnInit {

  constructor() { }
  generateMap(){
  	// var database;
  	// var TilesDB = new PouchDB(database);
  	// console.log("db created");

  	 var url = 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/' +
          'Specialty/ESRI_StateCityHighway_USA/MapServer';
          var layer1 = new TileLayer({
          	source: new OSM()
		  });
          var layer2 = new TileLayer({
		    extent: [-13884991, 2870341, -7455066, 6338219],
		    source: new TileArcGISRest({
		    url: url
          })
        });
      var layers = [layer1, layer2];
      var map = new Map({
        layers: layers,
        target: 'map',
        view: new View({
          center: [-10997148, 4569099],
          zoom: 4
        })
      });
      map.once('postrender', function(event) {
   console.log("map rendered");
   
});

  }

  ngOnInit() {
  	this.generateMap()
  	console.log("created in");
  }


}
