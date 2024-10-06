<script lang="ts">
	import { goto } from '$app/navigation';
	import { isLoggedIn, cartItemCount } from '$lib/store/user';
	import { type NavLink } from '$lib';
	import { NavIcon, AppLogo, Magnify, Account, Heart, ShoppingBag } from '$lib/icons';

	import Icon from '@iconify/svelte';
	// Props

	// Data
	let showSideNav: Boolean = false;
	let isSearchOpen: Boolean = false;
	let isMenuOpen: Boolean = false;
	let HeaderMenuComponent: String = '';
	let navLinks: NavLink[] = [
		{
			title: 'Home',
			value: 'index',
			link: '/app'
		},
		{
			title: 'Shop',
			value: 'shop',
			link: '/app/shop'
		}
	];
	let pages: any[] = [
		{
			name: 'About',
			link: 'about'
		},
		{
			name: 'Privacy Policy',
			link: 'privacy-policy'
		},
		{
			name: 'Payments',
			link: 'payments'
		},
		{
			name: 'Contact Us',
			link: 'contact'
		}
	];

	let dynamicMainMenu: NavLink[] = [
		{
			title: 'Mens',
			value: 'men',
			link: '/app/menu/mens'
		},
		{
			title: 'Womens',
			value: 'womens',
			link: '/app/menu/womens'
		}
	];
	// Watchers
	$: cartCount = $cartItemCount ?? 0;
	// Methods
	function goToPage(link: any) {
		let val = link.link;
		goto(link.link);
		showSideNav = false;
	}
	function toggleSearch() {
		isSearchOpen = !isSearchOpen;
		isMenuOpen = !isMenuOpen;
		HeaderMenuComponent = 'HeaderSearch';
	}
	function onClickUser() {}
</script>

<header class="fixed w-full bg-white block z-50" id="site-header">
	<div
		class="xl:max-w-7xl lg:max-w-4xl md:max-w-3xl md:px-0 px-4 mx-auto flex items-center justify-between py-4"
	>
		<div class="lg:hidden block">
			<button type="button" class="" on:click={() => (showSideNav = !showSideNav)}>
				<img src={NavIcon} alt="" />
			</button>
		</div>
		<div class="flex items-center xl:gap-10 md:gap-4">
			<img src={AppLogo} class="h-10" alt="" />
			<!--Navigation  -->
			<nav class="lg:flex hidden">
				<ul
					class="flex items-center xl:gap-6 lg:gap-4 md:gap-2 text-sm uppercase text-head font-medium"
				>
					{#each navLinks as link (link.value)}
						<li class="cursor-pointer relative group">
							<a role="button" tabindex="0" on:click={() => goToPage(link)} class="px-4"
								>{link.title}</a
							>
							<span
								class="absolute -bottom-3 left-0 w-0 h-0.5 bg-head transition-all group-hover:w-full"
							></span>
						</li>
					{/each}
					{#if dynamicMainMenu && dynamicMainMenu.length}
						{#each dynamicMainMenu as link (link.value)}
							<li class="cursor-pointer relative group">
								<a role="button" tabindex="0" on:click={() => goToPage(link)} class="px-4"
									>{link.title}</a
								>
								<span
									class="absolute -bottom-3 left-0 w-0 h-0.5 bg-head transition-all group-hover:w-full"
								></span>
							</li>
						{/each}
					{/if}
				</ul>
			</nav>
		</div>
		<!-- Options -->
		<div class="flex items-center xl:gap-10 lg:gap-6 md:gap-4">
			<div>
				<button type="button" on:click={() => toggleSearch()} class="lg:flex hidden">
					{#if !isSearchOpen}
						<img src={Magnify} alt="" />
					{:else}
						<Icon icon="ic:baseline-close" />
					{/if}
				</button>
			</div>

			<button class="lg:flex hidden" on:click={onClickUser}>
				<img src={Account} alt="" />
			</button>
			{#if $isLoggedIn}
				<button on:click={() => goToPage({ link: 'account?page=wishlist' })} class="lg:flex hidden">
					<img src={Heart} alt="" />
				</button>
			{/if}

			<button type="button" on:click={() => goToPage({ link: 'cart' })} class="relative">
				<img src={ShoppingBag} alt="" />
				{#if cartCount > 0}
					<div
						class="absolute -right-2 -bottom-2 w-4 h-4 flex items-center justify-center bg-third text-[10px] font-medium text-white rounded-full"
					>
						{{ cartCount }}
					</div>
				{/if}
			</button>
			<!-- <ReusableRightOpenNav title="login" width="700px">
          <template #modal-activator="{ toggleModal }">
            <button class="hidden" @click="toggleModal">
              <img src="~/assets/images/icons/nav-icon.svg" />
            </button>
          </template>
          <template #modal-content="{ toggleModal }">
            <LoginRegisterForm
              @loggedIn="toggleModal"
              @logout="onLogout(toggleModal)"
            />
          </template>
        </ReusableRightOpenNav> -->
		</div>
	</div>
</header>
