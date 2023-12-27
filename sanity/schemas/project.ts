import { defineType } from 'sanity';

export default defineType({
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
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'projectStatus',
      title: 'Project Status',
      description: 'Is this project completed?',
      type: 'boolean',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'previewURL',
      title: 'Preview URL',
      type: 'url',
    },
    {
      name: 'techStack',
      type: 'array',
      title: 'Tech stack',
      validation: (Rule: any) => Rule.required(),
      of: [
        {
          type: 'object',
          name: 'stack',
          fields: [
            { type: 'string', name: 'name' },
            { type: 'image', name: 'icon' },
          ],
        },
      ],
    },
    {
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      description: 'Upload a Project Screenshot',
      options: { hotspot: true },
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Project Category',
      name: 'projectCategory',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'projectDescription',
      title: 'Project Description',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'githubURL',
      title: 'GitHub URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'features',
      type: 'array',
      title: 'Features',
      validation: (Rule: any) => Rule.required(),
      of: [
        {
          type: 'object',
          name: 'feature',
          fields: [
            { type: 'string', name: 'title' },
            { type: 'text', name: 'description' },
          ],
        },
      ],
    },
    {
      title: 'Project Date',
      name: 'projectDate',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
      options: {
        dateFormat: 'MMMM Do YYYY',
        calendarTodayLabel: 'Today',
      },
    },
  ],
});
