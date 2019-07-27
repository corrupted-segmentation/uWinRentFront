import * as L from 'leaflet/src/Leaflet' 
import {name, price} from '../store'


class Marker {

    constructor(lat, lon, name){
        this.lat = lat;
        this.lon = lon;
        this.name = name;
    }

    onClick(){
        name.change(this.name);
    }

    add(map){
        this.marker = L.marker([this.lat, this.lon]).addTo(map);
        this.marker.on('click', () => {this.onClick()});
    }

    remove(map){
        map.removeLayer(this.marker)
    }
}


export function makeMap(id){
    var mymap = L.map(id).setView([42.306, -83.067], 15);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicHJhaXJpciIsImEiOiJjanhkdzFlem4waWYxM3htbXNneGF1ZG5oIn0.cQBLSxaasBom95pejfIbIQ'
}).addTo(mymap);

    var mark = new Marker(42.306, -83.067, "Hello");
    mark.add(mymap);

    var mark2 = new Marker(42.306, -83.060, "itch");
    mark2.add(mymap);

    return mymap;
}
