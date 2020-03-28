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

  constructor() { }

  ngOnInit() {
    this.initilizeMap();
  }

  initilizeMap() {

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
        center: fromLonLat([4.35247, 50.84673]),
        rotation: -Math.PI / 8,
        zoom: 7
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
}
