# OpenLayers
This Project Showcases some basic implemetation of Openlayer Functionality in 
Angular version 6.2.1.

The 'MAP' component initialises a Map and renders it in HTML.

Installing Openlayers :-

npm install ol --save 

This is the latest one . The other package with name openlayers is discontinued.

USAGE WARNING :-
While importing elements of Openlayers in Angular

IMPORT DELECRATIONS as
import Map from 'ol/Map';

Whereas IMPORT FUNCTIONS as
import { fromLonLat } from 'ol/proj';

Incase you get a WARNING while importing . You can try changing and check.
Else you can View the Sourec Code to see what the element is


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
