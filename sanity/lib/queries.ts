import { groq } from 'next-sanity';
import client from './client';

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"] | order(_createdAt desc) {
      _id,
      projectIcon {"icon": asset->url},
      projectName,
      projectCategory,
      projectDescription,
      githubURL,
      features,
      projectImage {"image": asset->url},
      techStack,
      projectDate,
    }`,
    { cache: 'no-store' }
  );
}

export async function getAbout() {
  return client.fetch(
    groq`*[_type == "about"] {
      _id,
      aboutImage {"image": asset->url},
      aboutMe,
      experience,
    }`,
    { cache: 'no-store' }
  );
}

export async function getPosts() {
  return client.fetch(
    groq`*[_type == "post"] | order(_createdAt desc) {
      _id,
      title,
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
      slug,
      mainImage {"image": asset->url, "alt": asset->alt},
      categories[]-> {title},
      publishedAt,
      body,
    }`,
    { cache: 'no-store' }
  );
}
