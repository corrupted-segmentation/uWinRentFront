import App from './App.svelte';

const app = new App({
	target: document.querySelector(".sideHouse"),
	props: {
		name: 'world'
	}
});

export default app;
