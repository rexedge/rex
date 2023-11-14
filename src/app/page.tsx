import Image from 'next/image';
import { getPosts } from '../../sanity/lib/utils';

export default async function Home() {
	const posts = await getPosts();
	return <div>{JSON.stringify(posts[0].author)}</div>;
}
