'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allLocations = [];
var totalTotal = 0;
var storeForm = document.getElementById('store-form');

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

// call constructors
function makeStands() {
  new MakeLocation('First and Pike', 23, 65, 6.3);
  new MakeLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeLocation('Seattle Center', 11, 38, 3.7);
  new MakeLocation('Capitol Hill', 20, 38, 2.3);
  new MakeLocation('Alki Beach', 2, 16, 4.6);
};

// This function is the event handler for the submission of new store
function handleStoreAdd(event) {

  // console.log('log of the event object', event);
  // console.log('log of the event.target', event.target);
  // console.log('log of the event.target.storename', event.target.storename);
  // console.log('log of the event.target.storename.value', event.target.storename.value);

  event.preventDefault(); //gotta have it for this purpose. prevents page reload on a 'submit' event

  if (!event.target.storename.value || !event.target.mincust.value || !event.target.maxcust.value || !event.target.avgcook.value) {
    return alert('Fields cannot be empty!');
  }

  var newStoreName = event.target.storename.value;
  var newStoreMinCust = parseInt(event.target.mincust.value);
  var newStoreMaxCust = parseInt(event.target.maxcust.value);
  var newStoreAvgCook = parseInt(event.target.avgcook.value);

  new MakeLocation(newStoreName, newStoreMinCust, newStoreMaxCust, newStoreAvgCook);

  event.target.storename.value = null;
  event.target.mincust.value = null;
  event.target.maxcust.value = null;
  event.target.avgcook.value = null;

  render();
};

// make header row
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

// make data rows

function makeOneDataRow(j) {
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

// make totals row
function makeTotalsRow() {
  var cookiestands = document.getElementById('cookiestands');
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Totals';
  trEl.appendChild(tdEl);

  for (var i = 0; i < hours.length; i++) {
    var totalCookiesByHour = 0;
    for (var j = 0; j < allLocations.length; j++) {
      totalCookiesByHour += allLocations[j].cookiesSoldByHour[i];

    }
    tdEl = document.createElement('td');
    tdEl.textContent = totalCookiesByHour;
    trEl.appendChild(tdEl);
    totalTotal += totalCookiesByHour;
  }
  tdEl = document.createElement('td');
  tdEl.textContent = totalTotal;
  trEl.appendChild(tdEl);

  cookiestands.appendChild(trEl);
};

function render() {
  totalTotal = 0;
  cookiestands.innerHTML = '';
  makeHeaderRow();
  for (var j = 0; j < allLocations.length; j++) {
    makeOneDataRow(j);
  }
  makeTotalsRow();
}

// calling functions
makeStands();
render();

// Event listener for new store submission form
storeForm.addEventListener('submit', handleStoreAdd);
