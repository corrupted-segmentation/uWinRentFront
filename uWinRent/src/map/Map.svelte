<script>
    import {makeMap} from './map.js';
    import {onMount} from 'svelte';

    onMount(() =>{
        var map = makeMap('mapid');
    })    
</script>

<style>

#mapid{
    height: 100%;
}
    
</style>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
   integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
   crossorigin=""/>

<div id="mapid">
    
</div>
