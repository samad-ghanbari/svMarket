<script lang="ts">
	import {
		ChevronDownIcon,
		HomeIcon,
		BuildingStorefrontIcon,
		Square3Stack3dIcon
	} from 'heroicons-svelte/24/solid';

	import { Popover } from 'flowbite-svelte';
</script>

<div class="relative hidden h-10 w-full bg-transparent px-2 py-2 md:block">
	<div class="justify-betwee mx-auto flex h-full w-full flex-wrap items-center">
		<!-- location -->

		<ul class="mr-4 ml-auto flex flex-row items-center justify-end gap-4 text-base">
			<li class="text-gray-500 hover:text-gray-800">
				<button id="storesLink" class="inline-flex items-center gap-1 border-0 bg-transparent">
					<ChevronDownIcon class="h-3 w-3" />
					فروشگاه‌ها و شعبه‌ها
					<BuildingStorefrontIcon class="h-4 w-4 " />
				</button>
				<Popover triggeredBy="#storesLink" trigger="click"
					><div class="h-[500px] w-[400px] bg-neutral-100"></div></Popover
				>
			</li>
			<li class="text-gray-500 hover:text-gray-800">
				<button id="catsLink" class="inline-flex items-center gap-1 border-0 bg-transparent">
					<ChevronDownIcon class="h-3 w-3" />
					دسته‌بندی کالا
					<Square3Stack3dIcon class="h-4 w-4 " />
				</button>
				<Popover triggeredBy="#catsLink" trigger="click"
					><div class="h-[calc(100dvh-200px)] w-[calc(100dvw-200px)] bg-neutral-100"></div></Popover
				>
			</li>
			<li class="text-gray-500 hover:text-gray-800">
				<a class="inline-flex items-center gap-1" href="/">
					صفحه اصلی
					<HomeIcon class="h-4 w-4 " />
				</a>
			</li>
		</ul>
	</div>
</div>
