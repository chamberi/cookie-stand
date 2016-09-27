'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// First and Pike Location
var firstAndPike = {
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  // methods

  // method for random  customers by hour
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },
  // method for cookies sold by hour
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
      this.totalCookies += this.cookiesSoldByHour[j];
    }
  },
  render: function() {
    var firstandpike = document.getElementById('firstandpike');
    var fandp = document.getElementById('fandp');

    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();

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
  }
};
firstAndPike.render();

// SeaTac Airport Location
var seaTacAirport = {
  name: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookieSoldPerHour: 1.2,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  // methods

  // method for random  customers by hour
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },
  // method for cookies sold by hour
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
      this.totalCookies += this.cookiesSoldByHour[j];
    }
  },
  render: function() {
    var seatac = document.getElementById('seatac');
    var ctac = document.getElementById('ctac');

    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();

    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    ctac.appendChild(h3El);

    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      seatac.appendChild(liEl);
    }
    var liToEl = document.createElement('li');
    console.log(this.totalCookies);
    liToEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    seatac.appendChild(liToEl);
  }
};
seaTacAirport.render();

// Seattle Center Location
var seattleCenter = {
  name: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookieSoldPerHour: 3.7,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  // methods

  // method for random  customers by hour
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },
  // method for cookies sold by hour
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
      this.totalCookies += this.cookiesSoldByHour[j];
    }
  },
  render: function() {
    var seattlecenter = document.getElementById('seattlecenter');
    var ccenter = document.getElementById('ccenter');

    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();

    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    ccenter.appendChild(h3El);

    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      seattlecenter.appendChild(liEl);
    }
    var liToEl = document.createElement('li');
    console.log(this.totalCookies);
    liToEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    seattlecenter.appendChild(liToEl);
  }
};
seattleCenter.render();


// Capitol Hill Location
var capHill = {
  name: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookieSoldPerHour: 2.3,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  // methods

  // method for random  customers by hour
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },
  // method for cookies sold by hour
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
      this.totalCookies += this.cookiesSoldByHour[j];
    }
  },
  render: function() {
    var caphill = document.getElementById('caphill');
    var chill = document.getElementById('chill');

    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();

    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    chill.appendChild(h3El);

    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      caphill.appendChild(liEl);
    }
    var liToEl = document.createElement('li');
    console.log(this.totalCookies);
    liToEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    caphill.appendChild(liToEl);
  }
};
capHill.render();

// Alki Beach Location
var alkiBeach = {
  name: 'Alki Beach',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookieSoldPerHour: 4.6,
  randCustByHour: [],
  cookiesSoldByHour: [],
  totalCookies: 0,
  // methods

  // method for random  customers by hour
  calcRandCustByHour: function() {
    for (var i = 0; i < hours.length; i++) {
      this.randCustByHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
      console.log(this.randCustByHour[i]);
    }
  },
  // method for cookies sold by hour
  calcCookiesSoldByHour: function() {
    for (var j = 0; j < hours.length; j++) {
      this.cookiesSoldByHour.push(Math.round(this.avgCookieSoldPerHour * this.randCustByHour[j]));
      console.log(this.cookiesSoldByHour[j]);
      this.totalCookies += this.cookiesSoldByHour[j];
    }
  },
  render: function() {
    var alki = document.getElementById('alki');
    var alchy = document.getElementById('alchy');

    this.calcRandCustByHour();
    this.calcCookiesSoldByHour();

    var h3El = document.createElement('h3');
    h3El.textContent = this.name;
    alchy.appendChild(h3El);

    for (var k = 0; k < hours.length; k++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[k] + ': ' + this.cookiesSoldByHour[k] + ' cookies';
      console.log(liEl);
      alki.appendChild(liEl);
    }
    var liToEl = document.createElement('li');
    console.log(this.totalCookies);
    liToEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    alki.appendChild(liToEl);
  }
};
alkiBeach.render();
