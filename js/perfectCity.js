;(function(document) {
  'use strict';

      let departureInput = document.querySelector('#departure');
      let destinationInput = document.querySelector('#destination');
      let calculateBtn = document.querySelector('#calculate');
      let resultOutput = document.querySelector('#output');

      // calculates the length of shortest way;
    function perfectCity(departure, destination) {
      if (departure[0] == destination[0] && departure[1] == destination[1] ) {
        return 0;
      }
      let turn = true;
      let result = 0;
      for (var i = 0; i < 2; i++) {
          if (departure[i] < destination[i]) {
            let t = departure;
            departure = destination;
            destination = t;
          }
          let d1;
          let d2;
          let d12;
        if (Math.floor(departure[i]) === Math.floor(destination[i])) {
          if (Math.floor(departure[+turn]) === Math.floor(destination[+turn])) {
            d12 = Math.abs(destination[i] - departure[i]);
          } else {
            d1 = Math.ceil(departure[i]) - departure[i];
            d2 = Math.ceil(destination[i]) - destination[i];
            d12 = d1 + d2;
            if (d12 !== 0 && (d1 === 0 || d2 === 0)) {
              d12 = 1 - d12;
            } else if (d12 > 1)  {
              d12 = 2 - d12;
            }
          }
        } else {
          d12 = Math.abs(destination[i] - departure[i]);
        }
        result += d12;
        turn = !turn;
      }
      return result;
    }

    function getCoordinates(elem) {
      return elem.value.split(/,+|:+|;+|\s+/ig).map( a => Number(a) );
    }

    function checkCoordinates( ...arg ) {
      return arg.every( (coordinates) => {
        return coordinates.some( val => Number.isInteger(val) );
      });
    }


  calculateBtn.addEventListener('click', () => {
      let departure = getCoordinates(departureInput);
      let destination = getCoordinates(destinationInput);
      if ( !checkCoordinates(departure, destination) ) {
        alert("At least one of inputed values in each field should be of type integer. Please check the coordinates.");
        resultOutput.innerHTML = "";
        return;
      };
      let result = perfectCity(departure, destination);
      resultOutput.innerHTML = `<strong>The length of the shortest route = ${result.toFixed(2)}</strong>`;
  }, false);

})(document);