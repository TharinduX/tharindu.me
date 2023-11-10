import { groq } from 'next-sanity';
import client from './client';

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"] | order(projectDate desc) {
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
    }`
  );
}

export async function getAbout() {
  return client.fetch(
    groq`*[_type == "about"] {
      _id,
      aboutImage {"image": asset->url},
      aboutMe,
      experience,
      contributing,
    }`
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
    }`
  );
}

export async function getPost(slug: any) {
  const query = groq`
  *[_type == "post" && slug.current == $slug][0]
  {
   ...,
   mainImage,
   author-> {"name":name, "image": image.asset->url},
   categories[]->
  }
 `;

  return client.fetch(query, { slug });
}

export async function getCategories() {
  return client.fetch(
    groq`*[_type == "category"] | order(_createdAt desc) {
      _id,
      title,
      slug,
    }`
  );
}
