import { Component , AfterViewInit } from '@angular/core';
import { defaults as defaultControls } from 'ol/control';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import ZoomToExtent from 'ol/control/ZoomToExtent';
import layerVector from 'ol/layer/Vector';
import sourceVector from 'ol/source/Vector';
import geomPoint from 'ol/geom/Point';

// Import Functions in Curly brackets
import { Feature } from 'ol'
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit  {

  constructor() { }

  map: Map;

  ngAfterViewInit() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: fromLonLat([4.35247, 50.84673]),
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

    var layer = new layerVector({
        source: new sourceVector({
            features: [
                new Feature({
                    geometry: new geomPoint(fromLonLat([4.35247, 50.84673]))
                })
            ]
        })
    });
    this.map.addLayer(layer);

  }

}
