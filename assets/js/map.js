function initMap() {

    var map, iconLifted, marker;

    //Map Setup
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 38.97051951397841, lng: -94.70441650518683},
      zoom: 15,
      disableDefaultUI: true,
      mapId: '7ab02cc620cf5d2b'
    });

    //Icon Style
    iconLifted = 'assets/img/icons/pngs/location_pin.png';

    //Marker
    marker = new google.maps.Marker({
        position: {lat: 38.97051951397841, lng: -94.70441650518683},
        map: map,
        icon: iconLifted
    });
}
