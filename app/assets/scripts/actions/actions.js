'use strict';
var Reflux = require('reflux');

var Actions = module.exports = Reflux.createActions({
  // Map actions.
  'mapMove': {},
  'mapSquareSelected': {},
  'mapSquareUnselected': {},

  'latestImageryLoaded': {},

  'resultsChange': {},

  // Results pane related actions.
  'resultItemView': {},
  'resultListView': {},
  'prevResult' : {},
  'nextResult' : {},
  'resultOver': {},
  'resultOut': {},
  
  // openModal(which)
  'openModal': {},

  // Go to the latest imagery.
  // Its coordinates are stored in the mapStore and can be got with
  // getLatestImagery().
  'goToLatest': {},

  'geocoderResult': {},
});