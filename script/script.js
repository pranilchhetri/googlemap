(function (window,google,mapster){
    var map;
  var elem= document.getElementById('map');
  var mapoptions= mapster.MAP_OPTIONS;
    map = new google.maps.Map(elem, mapoptions);
    var marker = new google.maps.Marker({position:{lat:45,lng:45},map:map});
}(window,google,window.Mapster || (window.Mapster={})));

    