var hours = ['6AM', '7AM','8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
//alki
//
//
var Alki = {
  //minimum customer per hour
  minCustomerPerHour: 2,
  //maximum customer per hour
  maxCustomerPerHour: 16,
  averCookiePerCust: 4.6,
  randomCustomerPerHour :[],
  totalCookiesSoldEachHour :[],
  totalCookiesSoldEachDay:0,

  randCustPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour)) + this.minCustomerPerHour;
  },
  genTotalCookies: function() {
    this.randCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldEachHour.push(Math.round(this.averCookiePerCust * this.randCustPerHour()));
      this.totalCookiesSoldEachDay += this.totalCookiesSoldEachHour[i];
      console.log('total cookies');
    }
  },
  render: function() {
    this.genTotalCookies();
    var alkiId = document.getElementById('alki');
    console.log('hello');
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] +' '+ this.totalCookiesSoldEachHour[i] + '' +' cookies';
      alkiId.appendChild(liEl);
    }
    var liLast = document.createElement('li');
    liLast.textContent = 'Total '+ this.totalCookiesSoldEachDay + ' cookies';
    alkiId.appendChild(liLast);
  }

}
Alki.render();
//capitol hill
var capitolHill = {
  //minimum customer per hour
  minCustomerPerHour: 2,
  //maximum customer per hour
  maxCustomerPerHour: 16,
  averCookiePerCust: 4.6,
  randomCustomerPerHour :[],
  totalCookiesSoldEachHour :[],
  totalCookiesSoldEachDay:0,

  randCustPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour)) + this.minCustomerPerHour;
  },
  genTotalCookies: function() {
    this.randCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldEachHour.push(Math.round(this.averCookiePerCust * this.randCustPerHour()));
      this.totalCookiesSoldEachDay += this.totalCookiesSoldEachHour[i];
      console.log('total cookies');
    }
  },
  render: function() {
    this.genTotalCookies();
    var capitol = document.getElementById('CapitolHill');
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] +' '+ this.totalCookiesSoldEachHour[i] + '' +' cookies';
      capitol.appendChild(liEl);
    }
    var liLast = document.createElement('li');
    liLast.textContent = 'Total '+ this.totalCookiesSoldEachDay + ' cookies';
    capitol.appendChild(liLast);
  }

}
capitolHill.render();

var seattleCentral = {
  //minimum customer per hour
  minCustomerPerHour: 20,
  //maximum customer per hour
  maxCustomerPerHour: 38,
  averCookiePerCust: 2.3,
  randomCustomerPerHour :[],
  totalCookiesSoldEachHour :[],
  totalCookiesSoldEachDay:0,

  randCustPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour)) + this.minCustomerPerHour;
  },
  genTotalCookies: function() {
    this.randCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldEachHour.push(Math.round(this.averCookiePerCust * this.randCustPerHour()));
      this.totalCookiesSoldEachDay += this.totalCookiesSoldEachHour[i];
      console.log('total cookies');
    }
  },
  render: function() {
    this.genTotalCookies();
    var seattleC = document.getElementById('SeattleCentral');
    console.log('hello');
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] +' '+ this.totalCookiesSoldEachHour[i] + '' +' cookies';
      seattleC.appendChild(liEl);
    }
    var liLast = document.createElement('li');
    liLast.textContent = 'Total '+ this.totalCookiesSoldEachDay + ' cookies';
    seattleC.appendChild(liLast);
  }

}
seattleCentral.render();


var seaTacAir = {
  //minimum customer per hour
  minCustomerPerHour: 20,
  //maximum customer per hour
  maxCustomerPerHour: 38,
  averCookiePerCust: 2.3,
  randomCustomerPerHour :[],
  totalCookiesSoldEachHour :[],
  totalCookiesSoldEachDay:0,

  randCustPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour)) + this.minCustomerPerHour;
  },
  genTotalCookies: function() {
    this.randCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldEachHour.push(Math.round(this.averCookiePerCust * this.randCustPerHour()));
      this.totalCookiesSoldEachDay += this.totalCookiesSoldEachHour[i];
      console.log('total cookies');
    }
  },
  render: function() {
    this.genTotalCookies();
    var sea = document.getElementById('SeaTac');
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] +' '+ this.totalCookiesSoldEachHour[i] + '' +' cookies';
      sea.appendChild(liEl);
    }
    var liLast = document.createElement('li');
    liLast.textContent = 'Total '+ this.totalCookiesSoldEachDay + ' cookies';
    sea.appendChild(liLast);
  }

}
seaTacAir.render();
//1st and pike
var firstPike = {
  //minimum customer per hour
  minCustomerPerHour: 20,
  //maximum customer per hour
  maxCustomerPerHour: 38,
  averCookiePerCust: 2.3,
  randomCustomerPerHour :[],
  totalCookiesSoldEachHour :[],
  totalCookiesSoldEachDay:0,

  randCustPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomerPerHour - this.minCustomerPerHour)) + this.minCustomerPerHour;
  },
  genTotalCookies: function() {
    this.randCustPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookiesSoldEachHour.push(Math.round(this.averCookiePerCust * this.randCustPerHour()));
      this.totalCookiesSoldEachDay += this.totalCookiesSoldEachHour[i];
      console.log('total cookies');
    }
  },
  render: function() {
    this.genTotalCookies();
    var first = document.getElementById('Pike');
    for(var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] +' '+ this.totalCookiesSoldEachHour[i] + '' +' cookies';
      first.appendChild(liEl);
    }
    var liLast = document.createElement('li');
    liLast.textContent = 'Total '+ this.totalCookiesSoldEachDay + ' cookies';
    first.appendChild(liLast);
  }

}
firstPike.render();
