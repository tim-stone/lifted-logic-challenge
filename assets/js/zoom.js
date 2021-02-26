var zoomIn;
var timer = setInterval(initZoom, 10000); // sets the interval for the initZoom function

function noDelayZoom() {

    zoomIn = document.getElementById('zoom'); {

        (zoomIn.classList.contains('zoom-out'))
        zoomIn.classList.remove('zoom-out');
        zoomIn.classList.add('zoom-in')
    }

} // runs the zoom effect one time on page load

function initZoom() {

    zoomIn = document.getElementById('zoom'); {

        if (zoomIn.classList.contains('zoom-out')) {
            zoomIn.classList.remove('zoom-out');
            zoomIn.classList.add('zoom-in')
        } else(zoomIn.classList.toggle('zoom-out'))

    };
} // runs the zoom effect repeatedly after initial run by noDelayZoom function

window.onload = noDelayZoom;
initZoom;
