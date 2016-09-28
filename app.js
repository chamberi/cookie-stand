'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allLocations = [];
var totalCookiesByHour = 0;

// create MakeLocation object contructor function
function MakeLocation(name, minCustPerHour, maxCustPerHour, avgCookieSoldPerHour) {
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
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

function makeStands() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capitol Hill', 20, 38, 2.3);
  new MakeLocation('Alki Beach', 2, 16, 4.6);
};
makeStands();


function makeHeaderRow() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  cookiestands.appendChild(trEl);
};
makeHeaderRow();

for (var j = 0; j < allLocations.length; j++) {
  function makeOneDataRow() {
    var cookiestands = document.getElementById('cookiestands');
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = allLocations[j].name;
    trEl.appendChild(tdEl);
    //
    for (var i = 0; i < hours.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = allLocations[j].cookiesSoldByHour[i];
      trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = allLocations[j].totalCookies;
    trEl.appendChild(tdEl);
    cookiestands.appendChild(trEl);
  };
  makeOneDataRow();
};

function makeTotalsRow() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);
//


  for (var i = 0; i < hours.length; i++) {
    totalCookiesByHour = 0;
    for (j = 0; j < allLocations.length; j++) {
      totalCookiesByHour += allLocations[j].cookiesSoldByHour[i];
    }
    tdEl = document.createElement('td');
    tdEl.textContent = totalCookiesByHour;
    trEl.appendChild(tdEl);
  }
  // tdEl = document.createElement()
  //   for (var i = 0; i < hours.length; i++) {
  //     tdEl = document.createElement('td');
  //     tdEl.textContent = allLocations[j].totalCookies[i];
  //     trEl.appendChild(tdEl);
  //   }
  // }
  cookiestands.appendChild(trEl);
};
makeTotalsRow();

//   var firstandpike = document.getElementById('firstandpike');
//   var fandp = document.getElementById('fandp');
//
//   var h3El = document.createElement('h3');
//   h3El.textContent = this.name;
//   fandp.appendChild(h3El);
//
//   for (var k = 0; k < hours.length; k++) {
//     var liEl = document.createElement('li');
//     liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
//     console.log(liEl);
//     firstandpike.appendChild(liEl);
//   }
//   var liToEl = document.createElement('li');
//   console.log(this.totalCookies);
//   liToEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
//   firstandpike.appendChild(liToEl);
// };
// firstAndPike.render();
