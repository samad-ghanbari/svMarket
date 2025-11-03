<script lang="ts">
	import { Button } from 'flowbite-svelte';
</script>

<div class="flex h-[400px] rounded-lg border">
	<!-- Tabs list -->
	<ul class="flex w-40 flex-col border-r border-gray-50" id="vertical-tabs" role="tablist">
		<li>
			<Button
				class="w-full px-4 py-2 text-left hover:bg-gray-300 focus:outline-none"
				id="tab-1"
				data-tabs-target="tab-content-1"
				type="button"
				role="tab"
			>
				Tab 1
			</Button>
		</li>
		<li>
			<Button
				class="w-full px-4 py-2 text-left hover:bg-gray-300 focus:outline-none"
				id="tab-2"
				data-tabs-target="tab-content-2"
				type="button"
				role="tab"
			>
				Tab 2
			</Button>
		</li>
		<li>
			<Button
				class="w-full px-4 py-2 text-left hover:bg-gray-300 focus:outline-none"
				id="tab-3"
				data-tabs-target="tab-content-3"
				type="button"
				role="tab"
			>
				Tab 3
			</Button>
		</li>
	</ul>

	<!-- Tabs content -->
	<div class="flex-1 p-4">
		<div id="tab-content-1" role="tabpanel">Content 1</div>
		<div id="tab-content-2" role="tabpanel" class="hidden">Content 2</div>
		<div id="tab-content-3" role="tabpanel" class="hidden">Content 3</div>
	</div>
</div>
