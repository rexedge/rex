import { createClient, groq } from 'next-sanity';
import { apiVersion } from '../env';

export async function getPosts() {
	const client = createClient({
		projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
		dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
		apiVersion: apiVersion,
	});

	return client.fetch(groq`*[_type == "post"]{
          _id,
          _createdAt,
          name,
          title,
          "slug": slug.current,
          mainImage->,
          url,
          author->,
          categories->,
          excerpt,
          featured,
          publishedAt,
          body,
          preview->
     }`);
}
