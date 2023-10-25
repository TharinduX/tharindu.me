import { groq } from 'next-sanity';
import client from './lib/client';

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"] {
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
