<script lang="ts">
	import { Rss } from 'lucide-svelte';
	import PostLink from '$lib/components/post-link.svelte';

	const { data, children } = $props();
</script>

<div class="grid grid-cols-1 gap-10 lg:grid-cols-4">
	<div class="order-1 flex flex-col gap-2 lg:gap-8">
		<h2 class="text-lg font-bold">Further Reading</h2>
		<ul class="space-y-4">
			{#each data.posts as post}
				<PostLink {post} href="/writing/{post.slug}" as="li" />
			{/each}
		</ul>
		<p>
			<a
				href="/writing/rss"
				class="group flex items-center gap-2"
				data-sveltekit-preload-data="false"
				data-sveltekit-reload
			>
				<Rss size={16} />
				<span class="decoration-primary-700 decoration-2 underline-offset-2 group-hover:underline">
					RSS Feed
				</span>
			</a>
		</p>
	</div>
	<div class="lg:col-span-3">
		{@render children?.()}
	</div>
</div>
