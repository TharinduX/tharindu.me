import { defineField, defineArrayMember } from 'sanity';

const project = {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'projectIcon',
      title: 'Project Icon',
      type: 'image',
      description: 'Upload a Project Icon or Logo',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    defineField({
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'techStack',
      type: 'array',
      title: 'Tech stack',
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'stack',
          fields: [{ type: 'string', name: 'name' }],
        }),
      ],
    }),
    {
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      description: 'Upload a Project Screenshot',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Project Category',
      name: 'projectCategory',
      type: 'string',
      initialValue: 'website',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Website', value: 'website' },
          { title: 'Mobile App', value: 'mobileApp' },
          { title: 'Desktop App', value: 'desktopApp' },
          { title: 'API', value: 'api' },
          { title: 'Other', value: 'other' },
        ],
      },
    },
    {
      name: 'projectDescription',
      title: 'Project Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    defineField({
      name: 'githubURL',
      title: 'GitHub URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      type: 'array',
      title: 'Features',
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          type: 'object',
          name: 'feature',
          fields: [
            { type: 'string', name: 'title' },
            { type: 'text', name: 'description' },
          ],
        }),
      ],
    }),
    {
      title: 'Project Date',
      name: 'projectDate',
      type: 'date',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'MMMM Do YYYY',
        calendarTodayLabel: 'Today',
      },
    },
  ],
};

export default project;
