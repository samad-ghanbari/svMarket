<script lang="ts">
	import { Tabs, TabItem } from 'flowbite-svelte';
</script>

<Tabs
	tabStyle="full"
	class="flex flex-col divide-y divide-gray-200 rounded-lg shadow-sm rtl:divide-x-reverse dark:divide-gray-700"
	ulClass="w-52 bg-blue-300"
>
	<TabItem class="flex w-52 flex-row" open>
		{#snippet titleSlot()}
			<span>Profile</span>
		{/snippet}
		<p class=" text-sm text-gray-500 dark:text-gray-400">
			<b>Profile:</b>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua.
		</p>
	</TabItem>
	<TabItem class="w-52">
		{#snippet titleSlot()}
			<span>Dashboard</span>
		{/snippet}
		<p class="text-sm text-gray-500 dark:text-gray-400">
			<b>Dashboard:</b>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
			et dolore magna aliqua.
		</p>
	</TabItem>
</Tabs>
