<script lang="ts">
	import { Search, GradientButton, Tooltip } from 'flowbite-svelte';
	import { UserIcon, ChatBubbleLeftRightIcon, ShoppingCartIcon } from 'heroicons-svelte/24/solid';
	function handleSearch() {
		console.log('searching');
	}

	let shoppingCartRef;
</script>

<div
	class="relative z-10 flex h-[50px] w-full items-center justify-end bg-linear-to-r from-blue-50 to-green-50"
>
	<div class="mr-auto ml-4 flex h-10 w-[140px] items-center justify-start">
		<a class=" h-8 w-8" href="/">
			<ChatBubbleLeftRightIcon class="h-8 w-8 text-blue-300 hover:text-blue-400" />
			<Tooltip type="light" placement="bottom">پیام‌های دریافتی</Tooltip>
		</a>

		<a class=" hidden h-8 w-8 md:block" href="/">
			<UserIcon class="h-8 w-8 text-blue-300 hover:text-blue-400" />
			<Tooltip type="light" placement="bottom">پروفایل کاربر</Tooltip>
		</a>

		<a bind:this={shoppingCartRef} class="hidden h-8 w-8 md:block" href="/">
			<ShoppingCartIcon class="h-8 w-8 text-blue-300 hover:text-blue-400" />
			<Tooltip type="light" placement="bottom">سبد خرید</Tooltip>
		</a>
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
	<a class="mx-8 h-10 w-10" href="/">
		<img class="h-10 w-10" src="/assets/images/logo/logo512.png" alt="لوگوی فروشگاه" />
	</a>
</div>
