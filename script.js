var locations = []; // this array will hold your objects

// object constructor
function Region(state, revenue, locationCount) {
  this.stateName = state;
  this.stateRevenue = revenue;
  this.numLocations = locationCount;
  this.averageRevenue = function (){
    var avgRev = revenue / locationCount;
    return avgRev;
  }
}
// object instances
var il = new Region('IL', 5000, 12);
var mn = new Region('MN', 300, 3);
var nv = new Region('NV', 25000, 1);

// push object instances to locations array

locations.push(il, mn, nv);

// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
