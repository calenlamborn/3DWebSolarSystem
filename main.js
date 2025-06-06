$(document).ready(function () {
    const camera = document.querySelector('#camera');

    // Function to focus on a specific planet
    function focusOnPlanet(planetPosition) {
        camera.setAttribute('animation', {
            property: 'position',
            to: planetPosition,
            dur: 1000 // Adjust the duration as needed
        });
    }

    // Button click event handlers
    $('#focusMercury').on('click', function () {
        focusOnPlanet('1 1 -55');
    });

    $('#focusVenus').on('click', function () {
        focusOnPlanet('1 1 -70');
    });

    $('#focusEarth').on('click', function () {
        focusOnPlanet('1 1 -85'); 
      })
    })