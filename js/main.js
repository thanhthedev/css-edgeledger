// Initialize and add the map
function initMap() {
  const loc = { lat: -27.46977, lng: 153.025131 };
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}
