<script lang="ts">
	import { Github, Instagram, Twitter, Linkedin, Youtube } from 'lucide-svelte';

	import SocialLink from '$lib/components/social-link.svelte';
	import Navigation from '$lib/components/navigation.svelte';

	import '../app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	const { children }: Props = $props();
</script>

<main
	class="container my-6 grid grid-cols-1 items-center gap-6 sm:my-10 sm:grid-cols-2 lg:grid-cols-3"
>
	<header>
		<h1 class="whitespace-nowrap lg:order-1">
			<a
				href="/"
				class="font-header text-6xl text-black decoration-primary-700 hover:underline dark:text-white"
			>
				Liam Vo
			</a>
		</h1>
	</header>

	<div
		class="order-1 flex items-center justify-between gap-4 sm:order-none sm:justify-end lg:order-3"
	>
		<SocialLink href="https://github.com/haivx" icon={Github} />
		<SocialLink href="https://x.com/haivx0206" icon={Twitter} />
		<SocialLink href="https://linkedin.com/in/hai-vo-b265ab134" icon={Linkedin} />
	</div>

	<Navigation class="sm:col-start-2 sm:justify-end lg:order-2 lg:justify-center" />

	<div class="my-6 sm:col-span-full lg:order-3">
		{@render children?.()}
	</div>
</main>
