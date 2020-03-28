import { Component, OnInit } from '@angular/core';
import { defaults as defaultControls , ZoomToExtent} from 'ol/control';
import { defaults as defaultInteractions, DragRotateAndZoom } from 'ol/interaction';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import GeoJSON from 'ol/format/GeoJSON';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

import {Fill, Stroke, Style, Text} from 'ol/style';

// Import Functions in Curly brackets
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';

@Component({
  selector: 'app-map3',
  templateUrl: './map3.component.html',
  styleUrls: ['./map3.component.scss']
})
export class Map3Component implements OnInit {

  map;
  highlight: any;
  featureOverlay: VectorLayer;

  constructor() { }

  ngOnInit() {
    this.initilizeMap();
  }

  initilizeMap() {
    
    // Define Style
    var style = new Style({
      fill: new Fill({
        color: 'rgba(255, 255, 255, 0.6)'
      }),
      stroke: new Stroke({
        color: '#319FD3',
        width: 1
      }),
      text: new Text({
        font: '12px Calibri,sans-serif',
        fill: new Fill({
          color: '#000'
        }),
        stroke: new Stroke({
          color: '#fff',
          width: 3
        })
      })
    });
    
    // Create a Vector Layer
    var vectorLayer = new VectorLayer({
      source: new VectorSource({
        url: '../../assets/pipe1.geojson',
        format: new GeoJSON()
      }),
      style: function(feature) {
        style.getText().setText(feature.get('LABEL'));
        return style;
      }
    });
    
    // Create the MAP
    this.map = new Map({
      interactions: defaultInteractions().extend([
        new DragRotateAndZoom()
      ]),
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        }),
        vectorLayer
      ],
      view: new View({
        center: fromLonLat([79.356796, 14.805284]),
        zoom: 12
      }),
      controls: defaultControls().extend([
        new ZoomToExtent({
          extent: [
            813079.7791264898, 5929220.284081122,
            848966.9639063801, 5936863.986909639
          ]
        })
      ])
    });

    
       
  }

  // Event when clicked on MAP
  clickMap(e) {
    // The map requires the pixel coordinates of the mouse event
    // I packeged it in an array and procided it
    var pixel = [ e.layerX , e.layerY ];
    this.displayFeatureInfo(pixel);
  }
  
  // Event when mouse moves on MAP
  moveMap(e) {
    // The map requires the pixel coordinates of the mouse event
    // I packeged it in an array and procided it
    var pixel = [ e.layerX , e.layerY ];
    this.displayFeatureInfo(pixel);
  }
  
   

  displayFeatureInfo(pixel) {

    var feature = this.map.forEachFeatureAtPixel(pixel, function(feature) {
          return feature;
        });
    
    var info = document.getElementById('info');

    if (feature) {
      info.innerHTML = 'PIPE NAME' + ': ' + feature.get('LABEL');
    } else {
      info.innerHTML = '&nbsp;';
    }
    
    // Highlight Stylinh
    var highlightStyle = new Style({
      stroke: new Stroke({
        color: '#f00',
        width: 5
      }),
      fill: new Fill({
        color: 'rgba(255,0,0,0.1)'
      }),
      text: new Text({
        font: '20px Calibri,sans-serif',
        fill: new Fill({
          color: 'rgba(255,255,255)'
        }),
        stroke: new Stroke({
          color: '#f00',
          width: 3
        })
      })
    });
    
    // Create a new layer once we get a feature | create only once
    if(!this.featureOverlay && feature){
        this.featureOverlay = new VectorLayer({
        source: new VectorSource(),
        map: this.map,
        style: function(feature) {
          highlightStyle.getText().setText(feature.get('LABEL'));
          return highlightStyle;
        }
      });
    }
    

    console.log("featureOverlay",this.featureOverlay);

    if (feature !== this.highlight) {
      if (this.highlight) {
        this.featureOverlay.getSource().removeFeature(this.highlight);
      }
      if (feature) {
        this.featureOverlay.getSource().addFeature(feature);
      }
      this.highlight = feature;
    }

    console.log("after",this.highlight);
    
  }

}
