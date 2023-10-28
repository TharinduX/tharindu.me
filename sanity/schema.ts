import { type SchemaTypeDefinition } from 'sanity';
import project from './schemas/project';
import about from './schemas/about';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, about],
};
