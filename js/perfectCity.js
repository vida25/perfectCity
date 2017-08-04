;(function(document) {
  'use strict';

      let departureInput = document.querySelector('#departure');
      let destinationInput = document.querySelector('#destination');
      let calculateBtn = document.querySelector('#calculate');
      let resultOutput = document.querySelector('#output');

      // calculates the length of shortest way;
    function perfectCity(departure, destination) {
      if (departure[0] < destination[0]) {
        let t = departure;
        departure = destination;
        destination = t;
      }
        let dx1;
        let dx2;
        let dx12;
      if (Math.floor(departure[0]) === Math.floor(destination[0])) {
        dx1 = Math.ceil(departure[0]) - departure[0];
        dx2 = Math.ceil(destination[0]) - destination[0];
        dx12 = dx1 + dx2;
        if (dx12 > 1) {
          dx12 = 2 - dx12;
        }
      } else {
        dx1 = Math.ceil(departure[0]) - departure[0];
        dx2 = destination[0] - Math.floor(destination[0]);
        dx12 = dx1 + dx2;
      }

      let dx = Math.abs(Math.floor(destination[0]) - Math.floor(departure[0]));
      let dy = Math.abs(departure[1] - destination[1]);

      return  dx12 + dx + dy;
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