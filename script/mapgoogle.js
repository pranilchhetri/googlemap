function initMap(){
    var mapi;
  var elem= document.getElementById('map');
  var mapoptions= {center: {lat:45,lng:45},
  zoom: 15,
  disabledefaultUI : false,
  scrollwheel: true,
  draggable: true,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  maxZoom: 17
  };
    mapi = new google.maps.Map(elem, mapoptions);
    // var marker = new google.maps.Marker({position:pranilhome,map:map});
}