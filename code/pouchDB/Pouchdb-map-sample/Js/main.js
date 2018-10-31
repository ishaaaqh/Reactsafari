var couchTiles = 'http://tgtfix.com/db/cano2014/';
var pouchTiles = 'pouchtiles:cano2014';

var pouchTilesDB = new PouchDB(pouchTiles);

var mapbox = new ol.layer.Tile({
    source: new ol.source.TileJSON({
        url: 'http://api.tiles.mapbox.com/v3/angusp.ikd1c8eh.jsonp',
        // crossOrigin: 'anonymous'
    })
});

var cano2014 = new ol.layer.Tile({
    source: new ol.source.XYZ({
        minZoom: 1,
        maxZoom: 14,
        projection: 'EPSG:900913',
        crossOrigin: 'anonymous',
        tileLoadFunction: function (imageTile, src) {
            pouchTilesDB.getAttachment(src, 'tile.png', function (err, res) {
                if (err && err.error == 'not_found') return;
                if(!res) return;
                imageTile.getImage().src = window.URL.createObjectURL(res);
            });
        },
        tileUrlFunction: function (coordinate, projection) {
            if (coordinate === null) return undefined;

            // TMS Style URL
            var z = coordinate[0];
            var x = coordinate[1];
            var y = (1 << z) - coordinate[2] - 1;
            
            return [z, x, y].join('-');
        }
    })
});

var view = new ol.View({
    center: ol.proj.transform([148.66, -33.56], 'EPSG:4326', 'EPSG:3857'),
    zoom: 10
});

// creating the map
var map = new ol.Map({
    layers: [mapbox, cano2014],
    target: 'map',
    renderer: 'canvas',
    view: view
});

$(document).ready(function () {
    $('#replicate').on('click', function () {
        console.log('Starting replication');
        PouchDB.replicate(pouchTiles, {//couchTiles,
            continuous: false,
            attachments: true
        })
        .on('complete', function (info) {
            //map.addLayer(cano2014);
            console.log('Replication Complete', info);
        })
        .on('change', function (res) {
            console.log('Progress', parseInt((res.docs_written / 1117).toFixed(2) * 100) + '%');
        })
        .on('error', function(err) {
            console.log('Error has occured', err);
        });
    });

    $('#delete-database').on('click', function () {
        PouchDB.destroy(pouchTiles, function (err, info) {
            if (err) {
                console.log('Database destroy error', err);
                return;
            }
            console.log('Deleted', pouchTiles, 'database.');
        });
    });
});