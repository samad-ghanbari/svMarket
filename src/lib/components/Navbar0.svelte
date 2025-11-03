<script lang="ts">
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, MegaMenu, Button } from 'flowbite-svelte';
	import { ChevronDownIcon } from 'heroicons-svelte/24/solid';
	let cats = [
		{ name: 'خواروبار', href: '/groc' },
		{ name: 'خشکبار', href: '/nuts' },
		{ name: 'نوشیدنی‌ها', href: '/drinks' },
		{ name: 'روغن', href: '/oil' },
		{ name: 'بهداشتی و نظافتی', href: '/oil' },
		{ name: 'قهوه', href: '/oil' },
		{ name: 'حبوبات', href: '/oil' },
		{ name: 'ادویه', href: '/oil' },
		{ name: 'تنقلات', href: '/oil' },
		{ name: 'چای و دمنوش', href: '/oil' }
	];
	let stores = [
		{ name: 'فروشگاه مجیدیه', href: '/groc' },
		{ name: 'فروشگاه لویزان', href: '/nuts' },
		{ name: 'فوشگاه ونک', href: '/drinks' },
		{ name: 'فروشگاه چیتگر', href: '/oil' },
		{ name: 'فروشگاه صادقیه', href: '/oil' },
		{ name: 'فروشگاه آزادی', href: '/oil' },
		{ name: 'فروشگاه پیروزی', href: '/oil' },
		{ name: 'فروشگاه شهرک غرب', href: '/oil' }
	];
</script>

<Navbar>
	<NavBrand href="/">
		<img src="/assets/images/logo/logo128.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
		<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Market</span>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/about">درباره ما</NavLi>
		<NavLi href="/contacts">تماس با ما</NavLi>
		<NavLi href="/services">خدمات</NavLi>
		<NavLi href="/products">محصولات</NavLi>

		<NavLi class="cursor-pointer">
			فروشگاه‌ها و شعبه‌ها<ChevronDownIcon
				class="ms-2 inline h-6 w-6 text-primary-800 dark:text-white"
			/>
		</NavLi>
		<MegaMenu full items={stores} class="text-right">
			{#snippet extra()}
				<a
					href="/"
					class="mx-10 mt-4 block rounded-lg bg-gray-500 bg-cover bg-local bg-center bg-no-repeat p-4 text-right bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
					style="background-image: url(/assets/images/logo/logo128.png)"
				>
					<p
						class="mb-5 max-w-xl p-0 text-right text-sm leading-tight font-extrabold tracking-tight text-white"
					>
						فروشگاه‌ها و شعبه‌ها
					</p>
				</a>
			{/snippet}
			{#snippet children({ item })}
				<a
					href={item.href}
					class="bg-green-100 text-right hover:text-primary-600 hover:underline dark:hover:text-primary-500"
				>
					{item.name}
				</a>
			{/snippet}
		</MegaMenu>

		<NavLi class="cursor-pointer">
			دسته‌بندی‌ کالاها<ChevronDownIcon
				class="ms-2 inline h-6 w-6 text-primary-800 dark:text-white"
			/>
		</NavLi>
		<MegaMenu full items={cats} class="mx-10 text-right">
			{#snippet children({ item })}
				<a
					href={item.href}
					class="bg-green-100 text-right hover:text-primary-600 hover:underline dark:hover:text-primary-500"
				>
					{item.name}
				</a>
			{/snippet}
			{#snippet extra()}
				<a
					href="/"
					class="mx-10 mt-4 block rounded-lg bg-gray-500 bg-cover bg-local bg-center bg-no-repeat p-4 text-right bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
					style="background-image: url(/assets/images/logo/logo128.png)"
				>
					<p
						class="mb-5 max-w-xl p-0 text-right text-sm leading-tight font-extrabold tracking-tight text-white"
					>
						دسته بندی کالاها
					</p>
				</a>
			{/snippet}
		</MegaMenu>

		<NavLi href="/">صفحه اصلی</NavLi>
	</NavUl>
</Navbar>
