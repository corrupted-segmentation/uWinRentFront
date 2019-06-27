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


<div id="mapid">
    
</div>
