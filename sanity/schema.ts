import { type SchemaTypeDefinition } from 'sanity';
import project from './schemas/project';
import about from './schemas/about';
import post from './schemas/post';
import authors from './schemas/authors';
import category from './schemas/category';
import blockContent from './schemas/blockContent';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, about, post, authors, category, blockContent],
};
