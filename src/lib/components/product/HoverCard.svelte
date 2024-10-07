<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Product as ProductImage } from '$lib/icons';
	import { type ProductDetails } from '$lib';

	// Props
	export let product = {};
	// Data's
	// Methods
	function imageError(e: any) {
		//   e.target.src = require("/assets/images/product.png");
	}
</script>

<div class="group">
	<div class="relative">
		<!--      <div>
        {{product.product}}
      </div>-->
		<div
			class="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
		>
			{#if product.images && product.images.length}
				<img
					src={product.images[0]}
					on:error={imageError}
					class="h-full w-full object-cover object-center lg:h-full lg:w-full"
					alt=""
				/>
			{:else}
				<img src={ProductImage} alt="" srcset="" />
			{/if}
		</div>
		<div
			class="invisible group-hover:visible flex w-full flex-col gap-4 absolute items-end right-2 justify-end top-2"
		>
			<button class="w-8 h-8 bg-white rounded-full flex items-center justify-center">
				<Icon icon="mdi:eye-outline" />
			</button>
			<button
				class="w-8 h-8 bg-second-red text-white rounded-full flex items-center justify-center"
			>
				<Icon icon="mdi:heart-outline" />
			</button>
		</div>

		<div class="absolute flex w-full bottom-4 px-4">
			<button
				class="invisible group-hover:visible bg-white flex-1 text-sm py-2 text-head flex items-center justify-center"
			>
				ADD TO CART
			</button>
		</div>
	</div>
	<div class="flex justify-between pt-4">
		<div>
			<!--        <div class="text-xs text-second leading-5">Dresses</div>-->
			<div class="text-sm text-head leading-5">{product.name}</div>
			<!--        <div class="text-sm text-head leading-5">-->
			<!--&lt;!&ndash;          {{ getProductPrice.price | priceAmount }}&ndash;&gt;-->
			<!--          {{ product.price }}-->
			<!--        </div>-->
			<div class="text-sm text-head leading-5">
				₹{product.price}
			</div>
		</div>
	</div>
</div>

<Icon icon="mdi:heart-outline" />
<Icon icon="mdi:eye-outline" />
