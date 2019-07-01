<script>
    import {name, price} from '../store.js'
    let inName="place holder";
</script>

<style>
    
</style>

<h1>Hello {$name}!</h1>
<input bind:value={inName}/>
<button on:click={()=>{name.change(inName)}}>Submit</button>

