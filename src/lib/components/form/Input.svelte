<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { HTMLInputTypeAttribute } from 'svelte/elements';

	export let type: HTMLInputTypeAttribute = 'text';
	export let value = '';
	export let placeholder = '';
	export let id = '';
	export let name = '';
	export let label = '';
	export let classNames = '';
	export let error = '';
	export let disabled: boolean = false;

	const dispatch = createEventDispatcher();

	$: concatenatedLabel = label ? label[0].toLocaleUpperCase() + label.substring(1) : '';

	// Events
	function onInput(event: any) {
		const target = event.target as HTMLInputElement;
		dispatch('input', target.value);
	}

	function onChange(event: any) {
		const target = event.target as HTMLInputElement;
		dispatch('change', target.value);
	}

	function onBlur(event: FocusEvent) {
		const target = event.target as HTMLInputElement;
		dispatch('blur', target.value);
	}
</script>

<div class="flex-none">
	{#if concatenatedLabel}
		<label for={id} class="block text-xs text-left font-medium text-muted-foreground">
			{concatenatedLabel}
		</label>
	{/if}
	<div class="mt-1">
		<input
			{id}
			{name}
			{type}
			{value}
			{placeholder}
			on:input={onInput}
			on:blur={onBlur}
			on:change={onChange}
			{disabled}
			class="block w-full text-appText appearance-none border border-footer px-3 py-2 text-clip placeholder-gray-400 shadow-sm focus:border-head focus:outline-none focus:ring-head sm:text-sm"
		/>
	</div>
	<span class="text-xs pl-3 text-red-500">{error}</span>
</div>
