<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="from-blue-10 z-9999 flex min-h-screen flex-col bg-linear-to-br to-blue-50 text-black">
	<Navbar />
	{@render children?.()}
</div>

<Footer />
