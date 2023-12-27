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
  techStack: {
    name: String;
    icon: HTMLImageElement;
  }[];
  projectDate: Date;
  projectStatus: Boolean;
  previewURL: HTMLAnchorElement;
};

export type AboutTypes = {
  _id: String;
  aboutImage: {
    image: HTMLImageElement;
  };
  aboutMe: PortableTextBlock[];
  experience: PortableTextBlock[];
  contributing: PortableTextBlock[];
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

export type CategoryTypes = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: PortableTextBlock[];
  posts: PostTypes[];
};
