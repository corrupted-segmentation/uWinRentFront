import * as L from 'leaflet/src/Leaflet' 

export class Marker {

    constructor(lat, lon){
        this.lat = lat;
        this.lon = lon;
    }

    add(map){
        this.marker = L.marker([this.lat, this.long]).addTo(map);
    }
}
