'use strict';
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +                             NOTES                                                    +
// +  create tr                                                                           +
// +  create a th, give it content, add it to tr                                          +
// +  create a th, give it content, add it to tr                                          +
// +  create a th, give it content, add it to tr                                          +
// +  add tr to the table                                                                 +
// +                                                                                      +
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                     UNIVERSAL VARIABLES
//
var storeTable = document.getElementById('StoreTable');
var hours = ['6AM', '7AM','8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];
var allStores = [];
var ck = [];
var storeForm = document.getElementById('StoreGenerator');
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                        THE OBJECT CONSTRUCTER
//
function Store(storeName, minCustomerPerHour, maxCustomerPerHour, averCookiePerCust) {
  this.storeName = storeName;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.averCookiePerCust = averCookiePerCust;
  allStores.push(this);
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
      // console.log('total cookies');
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
      // console.log(this.totalCookiesSoldEachHour[0]+ this.totalCookiesSoldEachHour[1]);
      trEl.appendChild(tdEl);

    }

    var t = document.createElement('td');
    t.textContent = this.totalCookiesSoldEachDay;
    trEl.appendChild(t);

    storeTable.appendChild(trEl);
  }

  this.genTotalCookies();

}
//                  THE END OF OBJECT CONSTRUCTER
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                   MAKES THE TABLE HEADER

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



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                      STORES ALREADY CREATED
new Store('alki', 2, 16, 4.6);
new Store('capitolHill', 20, 38, 2.3);
new Store('seattleCentral', 11, 38, 3.7);
new Store('seaTacAir', 3, 24, 1.2);
new Store('firstPike', 23, 65, 6.3);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                 MAKES THE TABLE INNER CONTENT

function makeAllStores() {
  for (var i = 0; i < allStores.length; i += 1) {
    allStores[i].render();
  }
  for (var i = 0; i < hours.length; i++) {

    var totalp = 0;

    for (var j = 0; j < allStores.length; j++) {
      totalp += allStores[j].totalCookiesSoldEachHour[i];

    }

    ck.push(totalp);
    // console.log(totalp);
  }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                     MAKES THE TABLE FOOTER

function makeFooter() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Total';
  trEl.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = ck[i];
    trEl.appendChild(tdEl);
  }
  var total =0;
  for(i=0;i<ck.length;i++) {
    total += ck[i];
  }
  // console.log(total, "final total");
  var tdElLast = document.createElement('td');
  tdElLast.textContent = total;
  trEl.appendChild(tdElLast);
  storeTable.appendChild(trEl);
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                         THE STORES EVENT LISTENER
// listens for a submit event from the form is StoreForm and then pushes it to the
//handleStoreForm event handler

storeForm.addEventListener('submit',handleStoreForm);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                 THE STORES EVENT HANDLER
// this handles all the info from the table after the event listener recieves input

function handleStoreForm(event) {
  // this built in function prevents the browser from refreshing the page every submition
  event.preventDefault();
  // if the form input entries false then alert a message
  if (!event.target.storename.value || !event.target.minimum.value ||!event.target.maximum.value || !event.target.average.value) {
    alert('Fields cannot be empty!');

  } else {
    var newStore  = new Store(event.target.storename.value, event.target.minimum.value, event.target.maximum.value, event.target.average.value);
    storeTable.innerHTML = ''; // clears the whole old table made at the very bottom
    // the 'null' clears the form input boxes from the previes entry
    event.target.storename.value = null;
    event.target.minimum.value = null;
    event.target.maximum.value = null;
    event.target.average.value = null;
    //             CALL ALL FUNCTIONS FOR THE NEW TABLE
    //callS all functions  after clearing the old table called the first time
    makeTableHeader();
    makeAllStores();
    makeFooter();
  }
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                  CALL ALL FUNCTIONS FOR THE FIRST TABLE
makeTableHeader();
makeAllStores();
makeFooter();
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                               THE END
