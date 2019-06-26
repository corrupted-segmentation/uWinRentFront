<script>
    import House from './side/House.svelte' 
    import Map from './map/Map.svelte'
</script>

<style>
    #house{
        width: 400px;
        background-color: #008dff;
    }

    #house, #map{
        height: 100%;
        overflow: auto;
        float: left;
        
    
    }

    #map{
        width: calc(100% - 400px);
        /*padding-left: 400px;*/
        background: gray;
        display: inline-block;
    }
    
</style>

<div id="house">
    <House/>
</div>
<div id="map">
    <Map/>
</div>
