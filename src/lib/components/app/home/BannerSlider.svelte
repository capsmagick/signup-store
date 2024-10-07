<script lang="ts">
	import { onMount } from 'svelte';
	import { Facebook, Instagram, Banner } from '$lib/icons';
	// Props
	// Datas
	let imgIndex: number = 1;
	let prevoiusImgindex: number = 0;
	let banners: any[] = [
		{
			image: Banner,
			title: 'Banner one',
			short_description: 'Hello World',
			link: 'link',
			cta_text: 'hellko'
		},
		{
			image: Banner,
			title: 'Banner Two',
			short_description: 'Hello World two',
			link: 'link',
			cta_text: 'hellko'
		}
	];
	let selectedBanner = banners[0];
	let mediaUrl: string = 'https://manage.signupcasuals.com:8443';

	// Watchers
	// $: if (imgIndex) selectBanner;

	// Methods
	function followUs(socialMedia: string) {
		if (socialMedia === 'instagram') {
			const externalUrl = 'https://www.instagram.com/signup_casual/?hl=en';
			window.open(externalUrl, '_blank');
		}
		if (socialMedia === 'facebook') {
			const externalUrl = 'https://www.facebook.com/signupcasualsthrissur/';
			window.open(externalUrl, '_blank');
		}
	}
	async function getBanners() {}
	function bannerSlider() {
		setTimeout(() => {
			const imageIndex = banners.length;
			if (imgIndex === imageIndex) {
				imgIndex = 1;
				prevoiusImgindex = 0;
			} else {
				prevoiusImgindex;
				imgIndex++;
			}
		}, 5000);
	}
	// function selectBanner() {
	// 	console.log('selectBanner:', imgIndex);
	// 	if (banners.length !== 0) {
	// 		return banners[imgIndex - 1];
	// 	} else {
	// 		return {};
	// 	}
	// }
	function onClickDiscover(link: string) {
		window.location.href = link;
	}

	// Lifecycle hooks
	onMount(() => {
		bannerSlider();
	});
</script>

<div class="home-banner relative">
	<div class="banner-images h-full">
		<!-- {#if currentBanner && currentBanner.image}
			{currentBanner.title}
		{/if} -->
		<!-- <img :src="`${mediaUrl}${selectedBanner.image}`" class="h-full md:object-none object-cover" alt="" srcset=""/> -->
		<img src={selectedBanner.image} class="h-full md:object-none object-cover" alt="" srcset="" />
	</div>
	<div class="absolute text-head top-[50%] left-[20%] transform -translate-y-[50%]">
		<h1 class="text-5xl md:text-7xl capitalize">
			{@html selectedBanner.title}
		</h1>
		<p class="text-base">{@html selectedBanner.short_description}</p>
		<button
			on:click={() => onClickDiscover(selectedBanner.link)}
			class="text-lg font-medium border-b border-head pb-1 pt-4"
		>
			{selectedBanner.cta_text}
		</button>
	</div>
	<div class="absolute bottom-10 left-[20%] flex gap-10">
		<button class="flex items-center gap-2 text-sm text-second font-medium">
			<span>PREV</span>
			<span class="h-[2px] bg-second w-10"></span>
		</button>
		<button class="flex items-center gap-2 text-sm text-second font-medium group">
			<span class="h-[2px] bg-second w-10"></span>
			<span>NEXT</span>
		</button>
	</div>
	<div class="sm:block hidden absolute right-16 top-[50%] transform -translate-y-[50%]">
		<ul class="flex flex-col gap-4 md:gap-6 items-center">
			<li style="cursor: pointer">
				<img src={Facebook} alt="" srcset="" on:click={() => followUs('facebook')} />
			</li>
			<!--        <li><img src="~/assets/images/icons/twitter.svg" alt="" srcset=""></li>-->
			<li style="cursor: pointer">
				<img src={Instagram} alt="" srcset="" on:click={() => followUs('instagram')} />
			</li>
			<!--        <li><img src="~/assets/images/icons/pinterest.svg" alt="" srcset=""></li>-->
			<li>
				<span class="text-second text-sm font-medium" style="writing-mode: tb-rl;">FOLLOW US</span>
			</li>
		</ul>
	</div>
</div>
