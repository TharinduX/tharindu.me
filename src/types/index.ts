import { PortableTextBlock } from 'sanity';
export type ProjectTypes = {
  _id: String;
  projectIcon: {
    icon: HTMLImageElement;
  };
  projectName: String;
  projectCategory: String;
  projectDescription: String;
  githubURL: HTMLAnchorElement;
  features: String[];
  projectImage: {
    image: HTMLImageElement;
  };
  techStack: String[];
  projectDate: Date;
};

export type AboutTypes = {
  _id: String;
  aboutImage: {
    image: HTMLImageElement;
  };
  aboutMe: String;
  experience: String;
  contributing: String;
};

export type PostTypes = {
  _id: string;
  title: string;
  subtitle: string;
  slug: {
    current: string;
  };
  mainImage: {
    image: HTMLImageElement;
    alt: string;
  };
  author: {
    name: string;
    image: HTMLImageElement;
  };
  categories: { title: string }[];
  publishedAt: Date;
  body: PortableTextBlock[];
  estimatedReadingTime: number;
};
