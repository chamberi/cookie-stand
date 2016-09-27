'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allLocations = [];

// create MakeLocation object contructor function
function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this. maxCustPerHour = maxCustPerHour;
  this.avgCookieSoldPerHour = avgCookieSoldPerHour;
  this.randCustByHour = [];
  this.cookiesSoldByHour = [];
  this.totalCookies = 0;
  allLocations.push(this);
  this.calcRandCustByHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  };
  this.calcCookiesSoldByHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[i]));
      console.log(this.cookiesSoldByHour[i]);
      this.totalCookies += this.cookiesSoldByHour[i];
    }
  };
  this.calcRandCustByHour();
  this.calcCookiesSoldByHour();
}

// First and Pike Location
new MakeLocation('First and Pike', 23, 65, 6.3);
new MakeLocation('SeaTac Airport', 3, 24, 1.2);
new MakeLocation('Seattle Center', 11, 38, 3.7);
new MakeLocation('Capitol Hill', 20, 38, 2.3);
new MakeLocation('Alki Beach', 2, 16, 4.6);

render: function() {

makeHeaderRow: function() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');

  for (var i = 0; i < hours.length; i++) {
    var ()
  }

  cookiestands.appendChild(trEl);
}


  var firstandpike = document.getElementById('firstandpike');
  var fandp = document.getElementById('fandp');

  var h3El = document.createElement('h3');
  h3El.textContent = this.name;
  fandp.appendChild(h3El);

  for (var k = 0; k < hours.length; k++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
    console.log(liEl);
    firstandpike.appendChild(liEl);
  }
  var liToEl = document.createElement('li');
  console.log(this.totalCookies);
  liToEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
  firstandpike.appendChild(liToEl);
};
firstAndPike.render();
