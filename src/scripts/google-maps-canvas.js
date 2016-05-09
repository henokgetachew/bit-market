/*
JS code for managing google maps.
*/

  function buildContentString(item) {
    return '<div id="content-"' + item.name + '>' +
            '<h1>' + item.name + '</h1>' +
            '<ul>' +
            ' <li>Opens: ' + item.opens + '</li>' +
            ' <li>Closes: ' + item.closes + '</li>' +
            ' <li>Customer Experience Rating: ' + item.customerexperiencerating + ' </li>' +
            ' <li><a href="#">List of Products</a></li>' +
            '</ul' +
            '</div>';
  }

  window.initMap = function() {
    var centerAtLocation = {};

    //Let's create the map.
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
    });

    //Let's get buyer's position.
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position) {
        centerAtLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(centerAtLocation);
      });
    }

    //Let's choose a different image to represent warehouse icons
    var image = {
      url: './img/warehouse_icon_red.png',
      size: new google.maps.Size(50, 50),
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(0, 50)
    };

    //Let's get stockists and map them
    $.getJSON({
      url: "http://localhost:3000/stockists",
      success: function(data){
        $.each(data, function(i,item){
          var marker = new google.maps.Marker({
            position: {lat: item.lat, lng: item.lng},
            map: map,
            icon: image,
            title: item.name
          });
          //Let's add the InfoWindow
          var contentString = buildContentString(item);
          var infoWindow = new google.maps.InfoWindow({content: contentString});
          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
        });
      }
    });
  }
