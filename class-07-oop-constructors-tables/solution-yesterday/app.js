// Partial solution to Day 6 assignment
'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var firstAndPike = {
  locationName: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  randomCustPerHour: [],
  totalCookiesSoldEachHour: [],
  totalDailyCookieSales: 0,
  calcRandomCustPerHour: function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour);
    }
    // return console.log('Random hourly customers have been calculated');
  },
  calcTotalCookiesSoldEachHour: function() {
    this.calcRandomCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldEachHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCookiesPerCust));
      this.totalDailyCookieSales += this.totalCookiesSoldEachHour[i];
    }
  },
  render: function() {
    this.calcTotalCookiesSoldEachHour();
    var firstAndPikeUL = document.getElementById('firstandpikeUL');
    for (var i = 0; i < hours.length; i++) {
      // create an element
      var liEl = document.createElement('li');
      // give it content
      // 6am: 16 cookies
      liEl.textContent = hours[i] + ': ' + this.totalCookiesSoldEachHour[i] + ' cookies';
      // append it to the DOM
      firstAndPikeUL.appendChild(liEl);
    }
    liEl = document.createElement('li');
    // Total: 657 cookies
    liEl.textContent = 'Total: ' + this.totalDailyCookieSales + ' cookies';
    firstAndPikeUL.appendChild(liEl);
  }
};

firstAndPike.render();
