<script lang="ts">
	import {
		ChevronDownIcon,
		HomeIcon,
		BuildingStorefrontIcon,
		Square3Stack3dIcon
	} from 'heroicons-svelte/24/solid';

	import { Hr, Search, Listgroup, ListgroupItem } from 'flowbite-svelte';

	import Category from './Category.svelte';

	let activeIndex: number = 1;
</script>

<div class="relative hidden h-10 w-full bg-transparent px-2 py-2 md:block">
	<div class="justify-betwee mx-auto flex h-full w-full flex-wrap items-center">
		<!-- location -->

		<ul class="mr-4 ml-auto flex flex-row items-center justify-end gap-4 text-base">
			<li class="group relative text-gray-500 hover:text-gray-800">
				<button class="inline-flex items-center gap-1 border-0 bg-transparent">
					<ChevronDownIcon class="h-3 w-3" />
					فروشگاه‌ها و شعبه‌ها
					<BuildingStorefrontIcon class="h-4 w-4 " />
				</button>
				<div
					class="absolute right-0 hidden h-auto w-52 border border-gray-200 bg-neutral-100 p-2 shadow-lg group-hover:block"
				>
					<Search
						classes={{
							input: 'h-10  focus:ring-blue-200 focus:border-blue-200 w-full text-right max-w-4xl '
						}}
						placeholder="جستجو ..."
						dir="rtl"
					></Search>

					<Hr class="my-2" />

					<Listgroup active class="w-full">
						<ListgroupItem
							class="justify-end hover:text-black active:text-black active:ring-0"
							href="/"
						>
							تهران / میدان ونک
						</ListgroupItem>

						<ListgroupItem
							class="justify-end hover:text-black active:text-black active:ring-0"
							href="/"
						>
							تهران / میدان لویزان
						</ListgroupItem>

						<ListgroupItem
							class="justify-end hover:text-black active:text-black active:ring-0"
							href="/"
						>
							تهران / صادقیه
						</ListgroupItem>

						<ListgroupItem
							class="justify-end hover:text-black active:text-black active:ring-0"
							href="/"
						>
							تهران / مجیدیه
						</ListgroupItem>

						<ListgroupItem
							class="justify-end hover:text-black active:text-black active:ring-0"
							href="/"
						>
							تهران / پیروزی
						</ListgroupItem>

						<ListgroupItem
							class="justify-end hover:text-black active:text-black active:ring-0"
							href="/"
						>
							تهران / چیتگر
						</ListgroupItem>

						<ListgroupItem
							class="justify-end hover:text-black active:text-black active:ring-0"
							href="/"
						>
							تهران / آزادی
						</ListgroupItem>

						<ListgroupItem
							class="justify-end hover:text-black active:text-black active:ring-0"
							href="/"
						>
							تهران / سعادت‌آباد
						</ListgroupItem>
					</Listgroup>
				</div>
			</li>
			<li class="group relative text-gray-500 hover:text-gray-800">
				<button class="inline-flex items-center gap-1 border-0 bg-transparent">
					<ChevronDownIcon class="h-3 w-3" />
					دسته‌بندی کالا
					<Square3Stack3dIcon class="h-4 w-4 " />
				</button>
				<div
					class="absolute right-0 hidden h-auto w-auto border border-gray-200 bg-neutral-100 p-2 shadow-lg group-hover:block"
				>
					<Category activeIndex={1} />
				</div>
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
