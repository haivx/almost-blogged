<script lang="ts">
	import { merge } from '$merge';
	import type { ExtendElement } from './component.types';

	import formatDate, { toISODate } from '$lib/format-date';

	type Props = ExtendElement<
		'time',
		{
			date: Date | string;
		}
	>;

	const { date, class: className = '', ...props }: Props = $props();
</script>

<time
	datetime={toISODate(date)}
	class={merge('text-primary-600 dark:text-primary-400', className)}
	{...props}
>
	{formatDate(date)}
</time>
