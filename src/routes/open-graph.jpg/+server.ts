import satori from 'satori';
import sharp from 'sharp';
import OpenGraphImage from './open-graph-image';

export const prerender = false;

const headers = {
	'Content-Type': 'image/jpeg',
	'Cache-Control': 'max-age=604800, stale-while-revalidate=86400',
};

export async function GET(handler) {
	const { fetch } = handler;

	const firaSans = await fetch('/BeVietnamPro-Regular.woff').then((res) => res.arrayBuffer());
	const firaSansThin = await fetch('/BeVietnamPro-Medium.woff').then((res) => res.arrayBuffer());
	const leagueGothic = await fetch('/league-gothic-400-normal.woff').then((res) =>
		res.arrayBuffer(),
	);

	const svg = await satori(OpenGraphImage(handler), {
		width: 1200,
		height: 630,
		fonts: [
			{
				name: 'Fira Sans',
				weight: 300,
				style: 'normal',
				data: firaSansThin,
			},
			{
				name: 'Fira Sans',
				weight: 500,
				style: 'normal',
				data: firaSans,
			},
			{
				name: 'League Gothic',
				weight: 500,
				style: 'normal',
				data: leagueGothic,
			},
		],
	});

	const buffer = await sharp(Buffer.from(svg)).jpeg().toBuffer();

	return new Response(buffer, { headers });
}
