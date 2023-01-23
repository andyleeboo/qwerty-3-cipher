<script>
	import 'carbon-components-svelte/css/g100.css';
</script>

<div class="container">
	<slot />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
