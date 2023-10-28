import { groq } from 'next-sanity';
import { ProjectTypes } from '../types';
import client from '../../sanity/lib/client';

export async function getProjects(): Promise<ProjectTypes[]> {
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
    }`
  );
}
