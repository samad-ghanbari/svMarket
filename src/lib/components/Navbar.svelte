<script lang="ts">
	import {
		ChevronDownIcon,
		HomeIcon,
		BuildingStorefrontIcon,
		Square3Stack3dIcon
	} from 'heroicons-svelte/24/solid';

	import { Hr, Search, Listgroup, ListgroupItem } from 'flowbite-svelte';

	import Category from './Category.svelte';

	let activeIndex: number = 0;
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
					<div class="flex flex-row items-center justify-center">
						<div class="h-auto w-80 bg-neutral-100"></div>
						<div id="catsListId" class="flex h-auto w-40 flex-col items-center justify-end p-1">
							<a
								href="/"
								on:click={() => (activeIndex = 1)}
								class="w-40 border border-gray-100 px-2 py-2 text-right text-sm text-gray-500"
								class:bg-neutral-100={activeIndex == 7}
								class:text-black={activeIndex == 1}
								class:bg-white={activeIndex != 1}
								class:text-gray-500={activeIndex != 1}
								class:activeItem={activeIndex == 1}>خواروبار</a
							>
							<a
								href="/"
								on:click={() => (activeIndex = 2)}
								class="w-40 border border-gray-100 px-2 py-2 text-right text-sm text-gray-500"
								class:bg-neutral-100={activeIndex == 7}
								class:text-black={activeIndex == 2}
								class:bg-white={activeIndex != 2}
								class:text-gray-500={activeIndex != 2}
								class:activeItem={activeIndex == 2}>لبنیات</a
							>

							<a
								href="/"
								on:click={() => (activeIndex = 3)}
								class="w-40 border border-gray-100 px-2 py-2 text-right text-sm text-gray-500"
								class:bg-neutral-100={activeIndex == 7}
								class:text-black={activeIndex == 3}
								class:bg-white={activeIndex != 3}
								class:text-gray-500={activeIndex != 3}
								class:activeItem={activeIndex == 3}>حبوبات</a
							>

							<a
								href="/"
								on:click={() => (activeIndex = 4)}
								class="w-40 border border-gray-100 px-2 py-2 text-right text-sm text-gray-500"
								class:bg-neutral-100={activeIndex == 7}
								class:text-black={activeIndex == 4}
								class:bg-white={activeIndex != 4}
								class:text-gray-500={activeIndex != 4}
								class:activeItem={activeIndex == 4}>تنقلات</a
							>

							<a
								href="/"
								on:click={() => (activeIndex = 5)}
								class="w-40 border border-gray-100 px-2 py-2 text-right text-sm text-gray-500"
								class:bg-neutral-100={activeIndex == 7}
								class:text-black={activeIndex == 5}
								class:bg-white={activeIndex != 5}
								class:text-gray-500={activeIndex != 5}
								class:activeItem={activeIndex == 5}
							>
								نظافتی و بهداشتی
							</a>

							<a
								href="/"
								on:click={() => (activeIndex = 6)}
								class="w-40 border border-gray-100 px-2 py-2 text-right text-sm text-gray-500"
								class:bg-neutral-100={activeIndex == 7}
								class:text-black={activeIndex == 6}
								class:bg-white={activeIndex != 6}
								class:text-gray-500={activeIndex != 6}
								class:activeItem={activeIndex == 6}>ادویه‌جات</a
							>

							<a
								href="/"
								on:click={() => (activeIndex = 7)}
								class="w-40 border border-gray-100 px-2 py-2 text-right text-sm text-gray-500"
								class:bg-neutral-100={activeIndex == 7}
								class:text-black={activeIndex == 7}
								class:bg-white={activeIndex != 7}
								class:text-gray-500={activeIndex != 7}
								class:activeItem={activeIndex == 7}>نوشیدنی‌ها</a
							>
						</div>
					</div>
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
