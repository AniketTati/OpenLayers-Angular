import { Component , AfterViewInit } from '@angular/core';
import { defaults as defaultControls , ZoomToExtent} from 'ol/control';
import { defaults as defaultInteractions, DragRotateAndZoom } from 'ol/interaction';

import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
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
    // Init MAP
    this.map = new Map({
      // Add ZOOM DRAG ROTATE
      interactions: defaultInteractions().extend([
        new DragRotateAndZoom()
      ]),
      target: 'map',
      // ADD TILE LAYER
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: fromLonLat([4.35247, 50.84673]),
        rotation: -Math.PI / 8,
        zoom: 7
      }),
      // Button to ser Extent
      controls: defaultControls().extend([
        new ZoomToExtent({
          extent: [
            813079.7791264898, 5929220.284081122,
            848966.9639063801, 5936863.986909639
          ]
        })
      ])
    });

    // Add a vector later with a point marker
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
