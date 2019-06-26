<script>
	export let name = "Ryan";
    let inName="place holder";
</script>

<style>
    
</style>

<h1>Hello {name}!</h1>
<input bind:value={inName}/>
<button on:click={()=>{name = inName}}>Submit</button>

