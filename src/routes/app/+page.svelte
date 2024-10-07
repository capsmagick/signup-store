<script lang="ts">
	import BannerSlider from '$lib/components/app/home/BannerSlider.svelte';
	import BestSellers from '$lib/components/app/home/BestSellers.svelte';
	import Blogs from '$lib/components/app/home/Blogs.svelte';
	import LookBook from '$lib/components/app/home/LookBook.svelte';
	import TopCategories from '$lib/components/app/home/TopCategories.svelte';
	import TopCollection from '$lib/components/app/home/TopCollection.svelte';
	import MobileHome from '$lib/components/app/home/MobileHome.svelte';
	import Services from '$lib/components/app/home/Services.svelte';
</script>

<div>
	<section id="home-banner">
		<BannerSlider />
	</section>
	<section id="to-categories" class="md:block hidden bg-fourth">
		<TopCategories />
	</section>
	<section id="top-collection" class="md:block hidden">
		<TopCollection />
	</section>
	<section id="look-book" class="md:block hidden">
		<LookBook />
	</section>
	<section id="best-sellers" class="md:block hidden">
		<BestSellers />
	</section>
	<section id="blogs" class="hidden">
		<Blogs />
	</section>
	<section id="bottom-options" class="md:block hidden">
		<Services />
	</section>

	<!-- Mobile Home -->
	<!-- class="md:hidden block" -->
	<MobileHome />
</div>
