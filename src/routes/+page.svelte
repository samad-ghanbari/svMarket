<script>
	import { Alert } from 'flowbite-svelte';
	import { HomeIcon as HomeSolid } from 'heroicons-svelte/24/solid';
	import { HomeIcon as HomeOutline } from 'heroicons-svelte/24/outline';

	import { PUBLIC_value } from '$env/static/public';
	import { env } from '$env/dynamic/public';
</script>

<Alert>
	<span class="font-medium">Default alert!</span>
	Change a few things up and try submitting again.
</Alert>

<HomeSolid class="h-8 w-8 text-blue-500" />
<br />
<HomeOutline class="h-8 w-8 text-red-300" />

<p>{PUBLIC_value}</p>
<p>{env.PUBLIC_value}</p>

<h1>تست آزمایشی فونت</h1>
<h1 class="font-yekan text-4xl">تست آزمایشی فونت</h1>
<h1 class="font-yekan-bold text-4xl">تست آزمایشی فونت</h1>
<p class="font-phamelo text-4xl">
	Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
</p>
<p class="font-phamelo-bold text-4xl">
	Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
</p>
