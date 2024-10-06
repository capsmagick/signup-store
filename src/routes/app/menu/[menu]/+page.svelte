<script lang="ts">
	import { page } from '$app/stores';
	$: console.log('route:', $page.url.pathname);
	$: menuParam = $page.params.menu;
</script>

<div>{menuParam}</div>
