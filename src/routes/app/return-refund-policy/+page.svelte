<script lang="ts">
	import { page } from '$app/stores';
	$: console.log('route:', $page.url.pathname);
</script>

<div>{$page.url.pathname}</div>
