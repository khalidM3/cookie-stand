'use strict';
//
var storeTable = document.getElementById('StoreTable');
//
var hours = ['6AM', '7AM','8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
var allStores = [];

function Store(storeName, minCustomerPerHour, maxCustomerPerHour, averCookiePerCust) {
  this.storeName = storeName;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.averCookiePerCust = averCookiePerCust;
  allStores.push(this);
  this.total =
  this.randomCustomerPerHour = [];
  this.totalCookiesSoldEachHour = [];
  this.totalCookiesSoldEachDay = 0;
  this.randCustPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour)) + this.minCustomerPerHour;
  }
  this.genTotalCookies = function() {
    this.randCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldEachHour.push(Math.round(this.averCookiePerCust * this.randCustPerHour()));
      this.totalCookiesSoldEachDay += this.totalCookiesSoldEachHour[i];
      console.log('total cookies');
    }
  }
  this.render = function() {
    var trEl = document.createElement('tr');
    var st = document.createElement('td');
    st.textContent = this.storeName;
    trEl.appendChild(st);

    for(var i = 0; i < hours.length; i++) {

      var tdEl = document.createElement('td');
      tdEl.textContent = this.totalCookiesSoldEachHour[i];
      trEl.appendChild(tdEl);

    }

    var t = document.createElement('td');
    t.textContent = this.totalCookiesSoldEachDay;
    trEl.appendChild(t);

    storeTable.appendChild(trEl);


  }

  this.genTotalCookies();

}
  // create tr
  // create a th, give it content, add it to tr
  // create a th, give it content, add it to tr
  // create a th, give it content, add it to tr
  // add tr to the table
function makeTableHeader() {
  var trEl = document.createElement('tr');
  var vthEl = document.createElement('th');
  vthEl.textContent = ' ';
  trEl.appendChild(vthEl);

  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  var vthEl2 = document.createElement('th');
  vthEl2.textContent = 'Daily Location Total';
  trEl.appendChild(vthEl2);
  storeTable.appendChild(trEl);
}
makeTableHeader();




new Store('alki', 2, 16, 4.6);
new Store('capitolHill', 20, 38, 2.3);
new Store('seattleCentral', 11, 38, 3.7);
new Store('seaTacAir', 3, 24, 1.2);
new Store('firstPike', 23, 65, 6.3);

for (var i = 0; i < allStores.length; i += 1) {
  allStores[i].render();
}
function makeFooter() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Total';
  trEl.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    // for (var i = 0; i < allStores.length; i++) {
      // var totalBottom = allStores.this.totalCookiesSoldEachHour[i];
      // console.log(totalBottom);
    // }
    tdEl.textContent = '?';
    trEl.appendChild(tdEl);
  }
  storeTable.appendChild(trEl);
}
makeFooter();
