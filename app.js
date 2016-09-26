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
