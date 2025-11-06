<script lang="ts">
	let { activeIndex } = $props<{ activeIndex: number }>();
	import { ChevronLeftIcon } from 'heroicons-svelte/24/outline';

	type Item = {
		name: string;
		href: string;
	};
	type Subset = {
		subset: string;
		items: Item[];
	};

	let items: Subset[] = [
		{
			subset: 'خواروبار',
			items: [
				{ name: 'برنج', href: '/rice' },
				{ name: 'قند و شکر', href: '/sugar' },
				{ name: 'ماکارونی', href: '/spagetti' },
				{ name: 'روغن', href: '/oil' },
				{ name: 'رب گوجه‌فرنگی', href: '/tomatoPaste' }
			]
		},

		{
			subset: 'لبنیات',
			items: [
				{ name: 'شیر', href: '/milk' },
				{ name: 'پنیر', href: '/cheese' },
				{ name: 'ماست', href: '/yogurt' },
				{ name: 'دوغ', href: 'ayran' },
				{ name: 'کره', href: '/butter' },
				{ name: 'خامه', href: '/cream' },
				{ name: 'کشک', href: '/kashk' }
			]
		},

		{
			subset: 'حبوبات',
			items: [
				{ name: 'لوبیا چیتی', href: '/pintoBeans' },
				{ name: 'لوبیا قرمز', href: '/redBeans' },
				{ name: 'لوبیا سفید', href: '/whiteBeans' },
				{ name: 'لوبیا عروس', href: '/limaBeans' },
				{ name: 'لوبیا چشم بلبلی', href: '/blackEyedPeas' },
				{ name: 'نخود', href: '/ChickPeas' },
				{ name: 'عدس', href: '/lentils' },
				{ name: 'دال عدس', href: '/redLentils' },
				{ name: 'لپه', href: '/splitPeas' },
				{ name: 'ماش', href: '/mungBeans' }
			]
		},

		{
			subset: 'تنقلات',
			items: [
				{ name: 'چیپس', href: '/chips' },
				{ name: 'پفک', href: '/puffs' },
				{ name: 'پفیلا', href: '/popcorn' },
				{ name: 'تخمه', href: '/seeds' },
				{ name: 'لواشک', href: '/fruitRollup' },
				{ name: 'کیک و کلوچه', href: '/caks' },
				{ name: 'ویفر', href: '/wafers' },
				{ name: 'شکلات', href: '/chocolate' },
				{ name: 'پاستیل و مارشمالو', href: '/gummies' },
				{ name: 'آدامس و خوشبوکننده دهان', href: '/chewingGum' },
				{ name: 'آبنبات', href: '/candy' }
			]
		},

		{
			subset: 'نظافتی و بهداشتی',
			items: [
				{ name: 'صابون و مایع دستشویی', href: '' },
				{ name: 'قرص و مایع ظرفشویی', href: '' },
				{ name: 'مایع لباسشویی', href: '' },
				{ name: 'شامپو و نرم‌کننده مو', href: '' },
				{ name: 'شامپو بدن', href: '' },
				{ name: 'تمییز کننده سطوح', href: '' },
				{ name: 'دستمال کاغذی و دستمال مرطوب', href: '' },
				{ name: 'سیم و اسکاچ ظرفشویی', href: '' },
				{ name: 'شوینده فرش', href: '' },
				{ name: 'پودر لباسشویی', href: '' },
				{ name: 'مسواک', href: '' },
				{ name: 'خمیردندان و دهان‌شویه', href: '' },
				{ name: 'نخ دندان و خلال دندان', href: '' },
				{ name: 'ضدعفونی کننده مرکبات', href: '' }
			]
		},

		{
			subset: 'ادویه‌جات',
			items: [
				{ name: 'زردچوبه', href: '' },
				{ name: 'دارچین', href: '' },
				{ name: 'موسیر', href: '' },
				{ name: 'فلفل', href: '' },
				{ name: 'چاشنی سالاد', href: '' },
				{ name: 'زرشک', href: '' },
				{ name: 'هل', href: '' },
				{ name: 'زنجبیل', href: '' },
				{ name: 'نمک', href: '' },
				{ name: 'زعفران', href: '' },
				{ name: 'طمع‌دهنده غذا', href: '' },
				{ name: 'ادویه کاری', href: '' }
			]
		},

		{
			subset: 'نوشیدنی‌ها',
			items: [
				{ name: 'ماءالشعیر', href: '' },
				{ name: 'نوشابه', href: '' },
				{ name: 'آبمیوه', href: '' },
				{ name: 'آب‌معدنی', href: '' },
				{ name: 'شیرکاکائو', href: '' },
				{ name: 'انرژی‌زا', href: '' },
				{ name: 'عرقیجات', href: '' }
			]
		}
	];
</script>

<div
	class="flex h-auto w-auto flex-row items-start justify-center overflow-x-hidden overflow-y-auto"
>
	<div class="h-auto w-auto overflow-y-auto bg-neutral-100">
		{#each items as item, index}
			<div
				class="  grid max-h-[400px] w-full min-w-[calc(400px)] grid-cols-2 gap-2 text-gray-500"
				dir="rtl"
				class:block={activeIndex == index}
				class:hidden={activeIndex != index}
			>
				{#each item.items as obj, index}
					<a
						href="/"
						class=" px-4 py-2 text-right text-sm font-medium hover:bg-gray-50 hover:text-black"
					>
						{obj.name}
						<ChevronLeftIcon class="inline h-4 w-4" />
					</a>
				{/each}
			</div>
		{/each}
	</div>

	<div id="catsListId" class="flex h-auto w-40 flex-col items-start justify-end p-1">
		{#each items as item, index}
			<button
				onclick={() => (activeIndex = index)}
				class="w-40 border-r-6 border-white px-2 py-2 text-right text-sm text-gray-500 first:rounded-t-2xl last:rounded-b-2xl"
				class:bg-neutral-100={activeIndex == index}
				class:text-black={activeIndex == index}
				class:bg-white={activeIndex != index}
				class:text-gray-500={activeIndex != index}>{item.subset}</button
			>
		{/each}
	</div>
</div>
