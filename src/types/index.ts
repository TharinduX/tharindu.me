import { PortableTextBlock } from 'sanity';
export type ProjectTypes = {
  _id: String;
  projectIcon: {
    image: String;
  };
  projectName: String;
  projectCategory: String;
  projectDescription: String;
  githubURL: String;
  features: String[];
  projectImage: {
    image: String;
  };
  techStack: String[];
  projectDate: String;
  content: PortableTextBlock[];
};
