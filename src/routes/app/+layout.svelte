<script lang="ts">
	import '../../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	// Props
	// Data
	let showSideNav: Boolean = false;
</script>

<div class="w-full h-screen">
	<Header />
	<div class="pt-[72px]">
		<main class="main-layout">
			<slot />
		</main>
	</div>
	<div class="hidden md:block">
		<Footer />
	</div>
</div>
