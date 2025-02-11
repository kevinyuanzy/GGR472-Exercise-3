mapboxgl.accessToken = 'pk.eyJ1Ijoia2V2aW55dWFuenkiLCJhIjoiY201eHprYXU0MGZwejJsb242Y3Nza25oYyJ9.h05hqdnqlx2BwgwbQNuKCg'; // Add default public map token from your Mapbox account to allow you to access MapBox API.

const map = new mapboxgl.Map({
    container: 'exercise4ky', // map container ID
    style: 'mapbox://styles/kevinyuanzy/cm6ieu7cc008d01s92fh53ma2', // style URL
    center: [-79.441925, 43.676396], // starting position [lng, lat]
    zoom: 10.85, // starting zoom level
});

map.on('load', () => {

    // Add a data source containing GeoJSON data
    map.addSource('uoft-data', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Sidney Smith Hall"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.39865237301687,
                            43.662343395037766
                        ],
                        "type": "Point"
                    }
                }
            ]
        }
    });

    map.addLayer({
        'id': 'uoft-pnt',
        'type': 'circle',
        'source': 'uoft-data',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#B42222'
        }

    });

});

   // Add a data source from a GeoJSON file
   map.addSource('buildings-data', {
    type: 'geojson',
    data: 'https://raw.githubusercontent.com/kevinyuanzy/GGR472-Exercise-3/main/buildings.geojson' // Your URL to your buildings.geojson file
});

map.addLayer({
    'id': 'buildings-point',
    'type': 'circle',
    'source': 'buildings-data',
    'paint': {
        'circle-radius': 5,
        'circle-color': '#007cbf'
    }
});

 // Add a data source from a Mapbox tileset
 map.addSource('...', { // Create your own source ID
    'type': 'vector',
    'url': 'mapbox://kevinyuanzy.412yr986' // Update to your mapbox tileset ID
});

map.addLayer({
    'id': '...', // Create your own layer ID
    'type': 'fill', // Note this is different to point data
    'source': '...', // Must match source ID from addSource Method
    'paint': {
        'fill-color': '#888888', // Test alternative colours and style properties
        'fill-opacity': 0.4,
        'fill-outline-color': 'black'
    },
    'source-layer': '...' // Tileset NAME (diff to ID), get this from mapbox tileset page
},
    'uoft-buildings' // Drawing order - places layer below points
    // Here the addlayer method takes 2 arguments (the layer as an object and a string for another layer's name). If the other layer already exists, the new layer will be drawn before that one
);
