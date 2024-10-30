<script lang="ts">
	import '../../app.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import API from '$lib/services/api';
	import { onMount } from 'svelte';
	// Props
	// Data
	let showSideNav: Boolean = false;

	// Methods
	async function login(){
		try {
			const res = await API.get('/cms/customer/hero-section/')
			console.log("banner:", res)
		} catch (error) {
			console.log("login:", error)
		}
	}

	onMount(async() => {
await login()
	})
</script>

<div class="w-full h-screen">
	<Header />
	<div class="pt-[72px]">
		<main class="main-layout">
			<button type="button">
				Login
			</button>
			<slot />
		</main>
	</div>
	<div class="hidden md:block">
		<Footer />
	</div>
</div>
