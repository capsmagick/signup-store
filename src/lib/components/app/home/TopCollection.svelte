<script lang="ts">
	import { onMount } from 'svelte';
	import HoverCard from '$lib/components/product/HoverCard.svelte';
	import SkeletonCardLoader from '$lib/components/loader/SkeletonCardLoader.svelte';
	import Icon from '@iconify/svelte';
	import { dummyCollections, dummyProducts } from '$lib/dummy-data';

	// Datas
	let collectionsTabs: any[] = [];
	let selectedTab: string = '';
	let collectionProducts: any[] = [];
	let paginateStart: number = 0;
	let paginateEnd: number = 5;
	let loading: boolean = false;

	// Watchers
	$: hideButtons = collectionProducts.length <= 5 ? false : true;
	$: console.log('hideButtons:', collectionProducts);

	// Methods
	async function getCollections() {
		//   try {
		//     const {data} = await $api.get("/customer/collections");
		//     collectionsTabs = data.results;
		//     selectedTab = 0;
		//   } catch (error) {
		//     console.log(error);
		//   }
	}

	async function onSelectCollection(collection: any, tabId: any) {
		loading = true;
		selectedTab = tabId;
		console.log('index', tabId);
		console.log('collection', collection);
		if (collection) {
			collectionProducts = collection.collection_items; // Update 'collectionProducts' with 'collection_items'
		} else {
			collectionProducts = [];
		}
		loading = false;
	}
	function onClickPrev() {
		if (paginateStart > 0) {
			paginateStart--;
			paginateEnd--;
		}
	}
	function onClickNext() {
		if (paginateEnd < collectionProducts.length) {
			paginateStart++;
			paginateEnd++;
		}
	}

	// Hooks
	onMount(async () => {
		// await getCollections()
		loading = true;
		collectionsTabs = dummyCollections;
		collectionProducts = dummyProducts;
		loading = false;
		// setTimeout(() => {
		// 	loading = false;
		// }, 1000);
	});
</script>

<div class="xl:max-w-7xl lg:max-w-4xl mx-auto md:py-20 pb-6 md:px-0 px-4">
	<h5 class="text-2xl uppercase text-center mb-8">Our top collection</h5>
	<div class="flex items-center justify-center gap-4">
		{#each collectionsTabs as collection, index}
			<button
				class="capitalize text-sm font-medium px-2 py-2 border-b-2 {selectedTab === collection.id
					? 'text-head border-b-head'
					: 'text-second border-b-transparent'}"
				on:click={() => onSelectCollection(collection, collection.id)}
				>{collection.name}
			</button>
		{/each}
	</div>
	{#if loading}
		<div class="pt-8 flex justify-center gap-6 flex-1">
			<div class="block w-10 h-10"></div>
			{#each [1, 2, 3, 4, 5] as item}
				<div class="w-1/5">
					<SkeletonCardLoader />
				</div>
			{/each}

			<div class="block w-10 h-10"></div>
		</div>
	{/if}
	{#if !loading && collectionProducts && collectionProducts.length !== 0}
		<div class="pt-8 flex items-center gap-4">
			<!-- prev button -->
			<div class="md:block hidden">
				{#if hideButtons}
					<button
						on:click={() => onClickPrev()}
						class="w-10 h-10 flex items-center justify-center bg-[#EEEEEE] rounded-full text-second"
					>
						<Icon icon="mdi:chevron-left" />
					</button>
				{:else}
					<div class="block w-10 h-10"></div>
				{/if}
			</div>

			<!-- prev button -->
			<div class="flex justify-center gap-6 flex-1">
				{#each collectionProducts as item, index}
					<div class="w-1/5">
						<HoverCard product={item} />
					</div>
				{/each}
			</div>
			<!-- prev button -->
			<div class="md:block hidden">
				{#if hideButtons}
					<button
						type="button"
						on:click={() => onClickNext()}
						class="w-10 h-10 flex items-center justify-center bg-[#EEEEEE] rounded-full text-second"
					>
						<Icon icon="mdi:chevron-right" />
					</button>
				{:else}
					<div class="block w-10 h-10"></div>
				{/if}
			</div>

			<!-- prev button -->
		</div>
	{:else}
		<div class="text-center h-36 flex items-center justify-center">Oops!. No products found.</div>
	{/if}
</div>
