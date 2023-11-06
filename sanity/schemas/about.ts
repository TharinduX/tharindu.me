import { defineType } from 'sanity';

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'aboutImage',
      title: 'About Image',
      type: 'image',
      description: 'Upload an About Image',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'aboutMe',
      title: 'About Me',
      type: 'blockContent',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'blockContent',

      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'contributing',
      title: 'Contributing',
      type: 'blockContent',
      validation: (Rule: any) => Rule.required(),
    },
  ],
});
