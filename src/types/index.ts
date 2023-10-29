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
  content: PortableTextBlock[];
};

export type AboutTypes = {
  _id: String;
  aboutImage: {
    image: HTMLImageElement;
  };
  aboutMe: String;
  experience: String;
  contributing: String;
  content: PortableTextBlock[];
};

export type PostTypes = {
  _id: String;
  title: String;
  slug: String;
  mainImage: {
    image: HTMLImageElement;
    alt: String;
  };
  categories: { title: String }[];
  publishedAt: Date;
  body: PortableTextBlock[];
};
