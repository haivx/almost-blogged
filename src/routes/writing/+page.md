---
title: Writing
description: A relatively small collection of things that Liam has managed to sit down an type out.
layout: page
date: 2023-12-27T19:32:52-07:00
modified: 2023-12-31T10:21:58-07:00
---

<script lang="ts">
	import { NotebookPen } from 'lucide-svelte';
	import DateTime from '$lib/components/date.svelte';

	export let data;
</script>

I spend a lot of time thinking and experimenting, but I rarely write things down. Usually, by the time I’ve finished building or writing something, it already feels boring to me—I end up deleting it and starting over. What feels fresh and exciting at first often turns dull after just a few months (or even weeks). So, I don’t tend to preserve my thoughts in blog posts.
That said, every now and then, when I feel like reflecting, I do get the urge to write something down.

<ul class="space-y-8 not-prose">
	{#each data.posts as post}
	<li class="block">
		<a href="/writing/{post.slug}" class="group grid grid-cols-[50px_1fr] gap-4 hover:bg-slate-100 bg-slate-50 dark:bg-slate-950 p-4 rounded dark:hover:bg-slate-900">
			<NotebookPen size={28} class="m-2" />
			<div>
				<h3 class="font-semibold sm:text-xl group-hover:underline decoration-primary-200 decoration-4 group-hover:decoration-primary-400">{post.title}</h3>
				<DateTime date={post.date} />
				<p>{post.description}</p>
			<div>
		</a>
	</li>
	{/each}
</ul>
