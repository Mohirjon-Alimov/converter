
var elUsd = document.querySelector("#currency-value");
var elSum = document.querySelector("#currency-value2");
var elBtn = document.querySelector(".change");
var currName = document.querySelector(".currency-name");
var currName2 = document.querySelector(".currency-name2");
var currency1 = document.querySelector(".currency1");
var currency2 = document.querySelector(".currency2");
var elBtn2 = document.querySelector(".convert");
var elList = document.querySelector(".list");


elSum.disabled = true;

currName.textContent = `usd`;
currName2.textContent = `uzs`;


var SumUsd = 11400;


elBtn2.addEventListener("click", function(evt) {
  evt.preventDefault();

  if(currName.textContent = `usd`) {
    var allValue = elUsd.value * SumUsd;
    elSum.value = allValue;
  }

  var newLi = document.createElement("li");
  var newP = document.createElement("p");

  newP.textContent = `current value:  ${allValue}`;
  newLi.appendChild(newP);
  elList.appendChild(newLi);


})


elBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  
  currName.textContent = `uzs`;
  currName2.textContent = `usd`;

  elBtn2.addEventListener("click", function(evt) {
    evt.preventDefault();
  
    if(currName.textContent = `uzs`) {
      var allValue = elUsd.value / SumUsd;
      elSum.value = allValue;
    }
    

    var newLi = document.createElement("li");
    var newP = document.createElement("p");
  
    newP.textContent = `current value:  ${allValue}`;
    newLi.appendChild(newP);
    elList.appendChild(newLi);


  
  
  
  })
  
})  
