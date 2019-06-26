import * as L from 'leaflet/src/Leaflet' 

export function makeMap(id){
    var mymap = L.map(id).setView([51.505, -0.09], 13);
    return mymap;
}
