(function(window,google,mapster){

mapster.MAP_OPTIONS={
    center: {lat:45,lng:45},
    zoom: 15,
    disabledefaultUI : false,
    scrollwheel: true,
    draggable: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    maxZoom: 17
};
}(window,google,window.Mapster|| (window.Mapster={})));