<script lang="ts">
	import {
		ChevronDownIcon,
		HomeIcon,
		BuildingStorefrontIcon,
		Square3Stack3dIcon
	} from 'heroicons-svelte/24/solid';

	import { Hr, Search, Listgroup, ListgroupItem } from 'flowbite-svelte';
	import { ChevronLeftIcon } from 'heroicons-svelte/24/outline';

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
					<div
						class="flex h-auto w-auto flex-row items-start justify-center overflow-x-hidden overflow-y-auto"
					>
						<div class="h-auto w-auto overflow-y-auto bg-neutral-100">
							<!-- خواروبار -->
							<div
								class="  grid max-h-[400px] w-full min-w-[calc(400px)] grid-cols-2 gap-2 text-gray-500"
								dir="rtl"
								class:block={activeIndex == 1}
								class:hidden={activeIndex != 1}
							>
								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									برنج
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									قند و شکر
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									ماکارونی
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									روغن
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									رب گوجه‌فرنگی
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>
							</div>

							<!-- لبنیات -->
							<div
								class="  grid max-h-[400px] w-full min-w-[calc(400px)] grid-cols-2 gap-2 text-gray-500"
								dir="rtl"
								class:block={activeIndex == 2}
								class:hidden={activeIndex != 2}
							>
								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									شیر
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									دوغ
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									ماست
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									کره
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									خامه
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									کشک
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									پنیر
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>
							</div>

							<!-- حبوبات -->
							<div
								class="  grid max-h-[400px] w-full min-w-[calc(400px)] grid-cols-2 gap-2 text-gray-500"
								dir="rtl"
								class:block={activeIndex == 3}
								class:hidden={activeIndex != 3}
							>
								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									لوبیا چیتی
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									لوبیا قرمز
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									لوبیا سفید
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									لوبیا عروس
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									لوبیا چشم بلبلی
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									نخود
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									عدس
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									لپه
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									ماش
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									دال عدس
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>
							</div>

							<!-- تنقلات -->
							<div
								class="  grid max-h-[400px] w-full min-w-[calc(400px)] grid-cols-2 gap-2 text-gray-500"
								dir="rtl"
								class:block={activeIndex == 4}
								class:hidden={activeIndex != 4}
							>
								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									چیپس
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									پفک
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									پفیلا
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									تخمه
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									لواشک
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									کیک و کلوچه
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									ویفر
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									شکلات
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									پاستیل و مارشمالو
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									آدامس و خوشبوکننده دهان
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									آبنبات
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>
							</div>

							<!-- نظافتی بهداشتی -->
							<div
								class="  grid max-h-[400px] w-full min-w-[calc(400px)] grid-cols-2 gap-2 text-gray-500"
								dir="rtl"
								class:block={activeIndex == 5}
								class:hidden={activeIndex != 5}
							>
								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									صابون و مایع دستشویی
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									قرص و مایع ظرفشویی
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									مایع لباسشویی
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									شامپو و نرم‌کننده مو
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									شامپو بدن
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									تمییز کننده سطوح
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									دستمال کاغذی و دستمال مرطوب
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									سیم و اسکاچ ظرفشویی
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									شوینده فرش
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									پودر لباسشویی
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									مسواک
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									خمیردندان و دهان‌شویه
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									نخ دندان و خلال دندان
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									ضدعفونی کننده مرکبات
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>
							</div>

							<!-- ادویه جات -->
							<div
								class="  grid max-h-[400px] w-full min-w-[calc(400px)] grid-cols-2 gap-2 text-gray-500"
								dir="rtl"
								class:block={activeIndex == 6}
								class:hidden={activeIndex != 6}
							>
								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									زردچوبه
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									دارچین
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									موسیر
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									فلفل
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									چاشنی سالاد
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									زرشک
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									هل
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									زنجبیل
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									نمک
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									زعفران
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									طمع‌دهنده غذا
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									ادویه کاری
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>
							</div>

							<!-- نوشیدنی -->
							<div
								class="  grid max-h-[400px] w-full min-w-[calc(400px)] grid-cols-2 gap-2 text-gray-500"
								dir="rtl"
								class:block={activeIndex == 7}
								class:hidden={activeIndex != 7}
							>
								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									ماءالشعیر
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									نوشابه
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									آبمیوه
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									آب‌معدنی
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									شیرکاکائو
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									انرژی‌زا
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>

								<a
									href="/"
									class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
								>
									عرقیجات
									<ChevronLeftIcon class="inline h-4 w-4" />
								</a>
							</div>
						</div>

						<div id="catsListId" class="flex h-auto w-40 flex-col items-start justify-end p-1">
							<a
								href="/"
								on:click={() => (activeIndex = 1)}
								class="w-40 border-r-6 border-white px-2 py-2 text-right text-sm text-gray-500 first:rounded-t-2xl last:rounded-b-2xl"
								class:bg-neutral-100={activeIndex == 1}
								class:text-black={activeIndex == 1}
								class:bg-white={activeIndex != 1}
								class:text-gray-500={activeIndex != 1}>خواروبار</a
							>
							<a
								href="/"
								on:click={() => (activeIndex = 2)}
								class="w-40 border-r-6 border-white px-2 py-2 text-right text-sm text-gray-500 first:rounded-t-2xl last:rounded-b-2xl"
								class:bg-neutral-100={activeIndex == 2}
								class:text-black={activeIndex == 2}
								class:bg-white={activeIndex != 2}
								class:text-gray-500={activeIndex != 2}>لبنیات</a
							>

							<a
								href="/"
								on:click={() => (activeIndex = 3)}
								class="w-40 border-r-6 border-white px-2 py-2 text-right text-sm text-gray-500 first:rounded-t-2xl last:rounded-b-2xl"
								class:bg-neutral-100={activeIndex == 3}
								class:text-black={activeIndex == 3}
								class:bg-white={activeIndex != 3}
								class:text-gray-500={activeIndex != 3}>حبوبات</a
							>

							<a
								href="/"
								on:click={() => (activeIndex = 4)}
								class="w-40 border-r-6 border-white px-2 py-2 text-right text-sm text-gray-500 first:rounded-t-2xl last:rounded-b-2xl"
								class:bg-neutral-100={activeIndex == 4}
								class:text-black={activeIndex == 4}
								class:bg-white={activeIndex != 4}
								class:text-gray-500={activeIndex != 4}>تنقلات</a
							>

							<a
								href="/"
								on:click={() => (activeIndex = 5)}
								class="w-40 border-r-6 border-white px-2 py-2 text-right text-sm text-gray-500 first:rounded-t-2xl last:rounded-b-2xl"
								class:bg-neutral-100={activeIndex == 5}
								class:text-black={activeIndex == 5}
								class:bg-white={activeIndex != 5}
								class:text-gray-500={activeIndex != 5}
							>
								نظافتی و بهداشتی
							</a>

							<a
								href="/"
								on:click={() => (activeIndex = 6)}
								class="w-40 border-r-6 border-white px-2 py-2 text-right text-sm text-gray-500 first:rounded-t-2xl last:rounded-b-2xl"
								class:bg-neutral-100={activeIndex == 6}
								class:text-black={activeIndex == 6}
								class:bg-white={activeIndex != 6}
								class:text-gray-500={activeIndex != 6}>ادویه‌جات</a
							>

							<a
								href="/"
								on:click={() => (activeIndex = 7)}
								class="w-40 border-r-6 border-white px-2 py-2 text-right text-sm text-gray-500 first:rounded-t-2xl last:rounded-b-2xl"
								class:bg-neutral-100={activeIndex == 7}
								class:text-black={activeIndex == 7}
								class:bg-white={activeIndex != 7}
								class:text-gray-500={activeIndex != 7}>نوشیدنی‌ها</a
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
