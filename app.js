'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var firstandpike = document.getElementById('firstandpike');
var fandp = document.getElementById('fandp');
var totalCookies = 0;

var firstAndPike = {
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookieSoldPerHour: 6.3,
  randCustByHour: [],
  cookiesSoldByHour: [],

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
      totalCookies += this.cookiesSoldByHour[j];
    }
  }
};
firstAndPike.calcRandCustByHour();
firstAndPike.calcCookiesSoldByHour();

var h3El = document.createElement('h3');
h3El.textContent = firstAndPike.name;
fandp.appendChild(h3El);

for (var k = 0; k < hours.length; k++) {
  var liEl = document.createElement('li');
  liEl.textContent = hours[k] + ': ' + firstAndPike.cookiesSoldByHour[k] + ' cookies';
  console.log(liEl);
  firstandpike.appendChild(liEl);
}
var liToEl = document.createElement('li');
console.log(totalCookies);
liToEl.textContent = 'Total: ' + totalCookies + ' cookies';
firstandpike.appendChild(liToEl);
