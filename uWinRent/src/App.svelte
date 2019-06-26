<script>
    import House from './side/House.svelte' 
    import Map from './map/Map.svelte'
</script>

<style>
    #house{
        width: 400px;
        height: 100%;
        background-color: #008dff;
        display:inline-block;
    }
    
</style>

<div id="house">
    <House/>
    <Map/>
    
</div>
