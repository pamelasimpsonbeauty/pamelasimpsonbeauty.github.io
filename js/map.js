function initMap() {
                var salonSerenity = { lat: 33.466264, lng: -117.700001};
                var map = new google.maps.Map(document.getElementById('map'), {
                    center: salonSerenity,
                    zoom: 16,
                    streetViewControl: false,
                    mapTypeControl: false,
                    styles: [
                    {"featureType": "all", "elementType": "labels","stylers": [{"visibility": "simplified"}]},
                    {"featureType": "administrative", "elementType": "labels", "stylers": [{"visibility": "simplified"},{"color": "#584b53"},{"saturation": "0"}]},
                    {"featureType": "administrative.neighborhood","elementType": "labels","stylers": [{"visibility": "off"}]},
                    {"featureType": "landscape","elementType": "all","stylers": [{"color": "#ffffff"}]},
                    {"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"}]},
                    {"featureType": "poi","elementType": "geometry","stylers": [{"visibility": "off"}]},
                    {"featureType": "road","elementType": "all","stylers": [{"visibility": "simplified"}]},
                    {"featureType": "road","elementType": "geometry","stylers": [{"color": "#f7ced7"},{"visibility": "simplified"},{"saturation": "0"}]},
                    {"featureType": "road","elementType": "geometry.fill","stylers": [{"color": "#f7c4d8"},{"saturation": "0"}]},
                    {"featureType": "road","elementType": "labels","stylers": [{"color": "#584b53"},{"visibility": "simplified"},{"saturation": "0"}]},
                    {"featureType": "road.highway","elementType": "all","stylers": [{"visibility": "simplified"}]},
                    {"featureType": "road.highway","elementType": "labels","stylers": [{"visibility": "off"}]},
                    {"featureType": "road.highway","elementType": "labels.text","stylers": [{"visibility": "off"}]},
                    {"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"visibility": "off"}]},
                    {"featureType": "road.highway","elementType": "labels.text.stroke","stylers": [{"color": "#810d0d"}]},
                    {"featureType": "transit","elementType": "all","stylers": [{"visibility": "off"}]},
                    {"featureType": "water","elementType": "geometry","stylers": [{"color": "#2f5554"}]},
                    {"featureType": "water","elementType": "geometry.fill","stylers": [{"color": "#89cff0"}]},
                    {"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#005588"},{"visibility": "simplified"}]}
                    ]
                });
                
                var contentString = 
                    '<div id="mapInfoWindow">'+
                        '<div id="siteNotice">'+'</div>'+
                        '<h2>Pamela Simpson Beauty Salon</h2>'+
                        '<div id="mapInfoWindowBodyContent">'+
                            '<p>is located inside <b>Salon Serenity<b></p>'+
                        '</div>'+
                    '</div>';
                var infowindow = new google.maps.InfoWindow({content: contentString});
                var markerIcon = "https://maps.google.com/mapfiles/ms/icons/pink-dot.png";
                var marker = new google.maps.Marker({position: salonSerenity, map: map, title: 'Pamela Simpson Beauty Salon', icon: markerIcon});
                marker.addListener('click', function() {infowindow.open(map, marker);});
            }