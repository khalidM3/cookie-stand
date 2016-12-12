'use strict';
var signOwner = document.getElementById('signownerin');
signOwner.addEventListener('submit',signIn);
var takerToPage = document.getElementById('div');

  function signIn(event) {
    event.preventDefault();

    var a = event.target.firstname.value;
    var b = event.target.lastname.value;
    var c = event.target.password.value;
    var d = event.target.codename.value;
      if (a == 'pat' && b == 'patterson' && c == 'patcook' && d == 'owner') {
        takerToPage.innerHTML = '<button><a href="sales.html">The owner page</a></button>';
        a = null;
        b = null;
        c = null;
        d = null;
      } else {
        alert('Sorry, your information is incorrect!');
        takerToPage.innerHTML = '<button><a href="index.html">Go to home page</a></button>'
      }
    }
