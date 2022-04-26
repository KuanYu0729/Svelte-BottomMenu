<script lang="ts">
	import { fade, slide } from "svelte/transition";
	export let active = false;
</script>

{#if active}
	<div
		class="bottom-menu-mask"
		transition:fade
		on:click={() => {
			active = false;
		}}
	/>

	<div class="bottom-menu" transition:slide>
		<slot />
	</div>
{/if}

<style lang="less">
	.bottom-menu-mask {
		background: #000000;
		opacity: 0.7;
		z-index: 1000;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
	}
	.bottom-menu {
		z-index: 1001;
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		background: #ffffff;
		border: 1px solid #cac9c9;
		border-top-left-radius: 16px;
		border-top-right-radius: 16px;
	}
</style>
