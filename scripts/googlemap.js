// Initialize and add the map
      function initMap() {
        // The location of coffee shop
        const location = { lat: 43.811544280331766, lng: 18.314991313862574 };
        // The map, centered at Uluru
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: location,
        });
        // The marker, positioned at Uluru
        const marker = new google.maps.Marker({
          position: location,
          map: map,
        });
        map.setZoom(map.getZoom() + 11);
      }