<script lang="ts">
	import { page } from '$app/stores';
	$: console.log('route:', $page.url.pathname);
	$: menuParam = $page.params.product;
</script>

<div>{menuParam}</div>
