<script lang="ts">
	import SEO from '$lib/components/seo.svelte';
	import Date from '$lib/components/date.svelte';

	const { data } = $props();
</script>

<SEO
	title={data.meta.title}
	description={data.meta.description}
	published={data.meta.published}
	date={data.meta.date}
	modified={data.meta.modified}
/>

<div class="space-y-10">
	<hgroup class="space-y-2">
		<Date date={data.meta.date} />
		<h1 class="text-2xl font-bold">{data.meta.title}</h1>
	</hgroup>

	<p class="font-serif text-2xl">
		{data.meta.description}
	</p>

	<data.content class="prose dark:prose-invert" as="article" />

	{#if data.meta.published && data.meta.modified}
		<p class="my-6 text-right text-sm text-slate-500 dark:text-gray-400">
			Last modified on <Date date={data.meta.modified} />.
		</p>
	{/if}
</div>

<footer
	class="my-10 rounded-md border-2 border-primary-200 bg-primary-100 px-8 py-4 dark:border-primary-900 dark:bg-primary-800"
>
	<p>
		See something that looks a little off? Feel free to <a
			href="mailto:haivx0206@gmail.com"
			class="font-semibold underline decoration-primary-500 decoration-2 underline-offset-4"
			>contact to me</a
		>.
	</p>
</footer>
