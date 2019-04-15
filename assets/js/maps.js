  function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 10,
                center: {
                    lat: 52.912497,
                    lng: -0.643753
                }
            });
            var labels = "Top Farm";
            var locations = [{
                
                lat:  52.8421196,
                lng: -0.8115969
            }];
            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels
                });
            });
            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }