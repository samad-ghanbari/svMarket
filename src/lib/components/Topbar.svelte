<script lang="ts">
	import {
		Search,
		GradientButton,
		Tooltip,
		Popover,
		Avatar,
		Listgroup,
		ListgroupItem,
		Hr
	} from 'flowbite-svelte';
	import {
		UserIcon,
		ChatBubbleLeftRightIcon,
		ShoppingCartIcon,
		ChevronDownIcon,
		ShoppingBagIcon,
		HeartIcon,
		MapPinIcon,
		ArrowLeftOnRectangleIcon,
		ArrowRightOnRectangleIcon
	} from 'heroicons-svelte/24/solid';

	let signedIn: boolean = $state(true);

	function handleSearch() {
		console.log('searching');
	}

	function handleSignOut() {
		console.log('log out');
	}
</script>

<div
	class="relative z-10 flex h-[50px] w-full items-center justify-end bg-linear-60 from-blue-50 to-neutral-100"
>
	<div class="mr-auto ml-4 flex h-10 w-[140px] items-center justify-start">
		{#if signedIn}
			<button id="messagesBtn" class=" h-6 w-6 border-0 bg-transparent">
				<ChatBubbleLeftRightIcon class="h-6 w-6 text-neutral-400 hover:text-neutral-500" />
			</button>
			<Tooltip
				class="bg-neutral-100 text-gray-500"
				triggeredBy="#messagesBtn"
				type="light"
				placement="bottom">پیام‌های دریافتی</Tooltip
			>
		{/if}

		<a id="shoppingBtn" class=" ml-4 hidden h-6 w-6 md:block" href="/">
			<ShoppingCartIcon class="h-6 w-6 text-neutral-400 hover:text-neutral-500" />
		</a>
		<Tooltip
			triggeredBy="#shoppingBtn"
			class="bg-neutral-100 text-gray-500"
			type="light"
			placement="bottom">سبد خرید</Tooltip
		>

		{#if !signedIn}
			<a id="signupBtn" class=" ml-4 hidden h-6 w-6 md:block" href="/">
				<ArrowLeftOnRectangleIcon
					class="h-6 w-6 font-bold text-neutral-400 hover:text-neutral-500"
				/>
			</a>
			<Tooltip
				triggeredBy="#signupBtn"
				class="bg-neutral-100 text-gray-500"
				type="light"
				placement="bottom">ورود/ثبت‌نام</Tooltip
			>
		{/if}

		{#if signedIn}
			<button id="profileBtn" class=" ml-4 hidden h-6 w-6 border-0 bg-transparent md:block">
				<div class="flex flex-col text-neutral-400 hover:text-neutral-500">
					<UserIcon class="h-6 w-6 " />
					<ChevronDownIcon class="w4 -mt-1 h-4 " />
				</div>
			</button>
			<Tooltip
				triggeredBy="#profileBtn"
				class="bg-neutral-100 text-gray-500"
				type="light"
				placement="bottom">پروفایل کاربر</Tooltip
			>
			<Popover triggeredBy="#profileBtn" trigger="click" class="bg-neutral-100">
				<div class="mb-1 h-auto w-52">
					<Listgroup active class="w-full">
						<ListgroupItem
							class="h-14 justify-end hover:bg-blue-100 hover:text-black active:text-black active:ring-0"
							href="/"
						>
							صمد قنبری
							<Avatar src="/assets/images/user.png" alt="صمد" />
						</ListgroupItem>

						<ListgroupItem
							class="justify-end hover:text-black active:text-black active:ring-0"
							href="/"
						>
							سفارشات
							<ShoppingBagIcon class="mr-2 inline h-5 w-5 text-right text-gray-500" />
						</ListgroupItem>

						<ListgroupItem
							class="justify-end hover:text-black active:text-black active:ring-0"
							href="/"
							>لیست علایق
							<HeartIcon class="mr-2 inline h-5 w-5 text-right text-red-500" />
						</ListgroupItem>

						<ListgroupItem
							class="justify-end hover:text-black active:text-black active:ring-0"
							href="/"
						>
							آدرس‌ها
							<MapPinIcon class="mr-2 inline h-5 w-5 text-right text-blue-400" />
						</ListgroupItem>

						<ListgroupItem
							class="justify-end hover:bg-red-500 hover:text-white active:text-black active:ring-0"
							onclick={handleSignOut}
						>
							خروج از حساب کاربری

							<ArrowRightOnRectangleIcon class="mr-2 inline h-5 w-5 text-right" />
						</ListgroupItem>
					</Listgroup>
				</div>
			</Popover>
		{/if}
	</div>

	<div class="mx-1 w-full max-w-4xl" dir="rtl">
		<Search
			classes={{
				input: 'h-10  focus:ring-blue-200 focus:border-blue-200 w-full text-right max-w-4xl pl-30 '
			}}
			placeholder="جستجوی محصول"
		>
			<GradientButton color="cyanToBlue" class="h-10 rounded-s-none" onclick={handleSearch}
				>جستجو</GradientButton
			></Search
		>
	</div>
	<a class="mx-8 h-10 w-10 shrink-0" href="/">
		<img class="h-10 w-10" src="/assets/images/logo/logo512.png" alt="لوگوی فروشگاه" />
	</a>
</div>
