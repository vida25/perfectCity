;(function(document) {
  'use strict';

      let departureInput = document.querySelector('#departure');
      let destinationInput = document.querySelector('#destination');
      let calculateBtn = document.querySelector('#calculate');
      let resultOutput = document.querySelector('#output');

      // calculates the length of shortest way;
    function perfectCity(departure, destination) {
      let result = 0;
      if (departure[i] < destination[i]) {
        let t = departure;
        departure = destination;
        destination = t;
      }
      for (var i = 0; i < 2; i++) {
          let d1;
          let d2;
          let d12;
        if (Math.floor(departure[i]) === Math.floor(destination[i])) {
          d1 = Math.ceil(departure[i]) - departure[i];
          d2 = Math.ceil(destination[i]) - destination[i];
          d12 = d1 + d2;
          if (d12 > 1) {
            d12 = 2 - d12;
          }
        } else {
          d1 = Math.ceil(departure[i]) - departure[i];
          d2 = destination[i] - Math.floor(destination[i]);
          d12 = d1 + d2;
        }

        let d = Math.abs(Math.floor(destination[i]) - Math.floor(departure[i]));
        result += (d + d12);
      }
      return result;
    }

    function getCoordinates(elem) {
      return elem.value.split(/,+|:+|;+|\s+/ig).map( a => +a );
    }


  calculateBtn.addEventListener('click', () => {
      let departure = getCoordinates(departureInput);
      let destination = getCoordinates(destinationInput);
      let result = perfectCity(departure, destination);
      resultOutput.innerHTML = `<strong>The length of the shortest route = ${result.toFixed(2)}</strong>`;
  }, false);

})(document);