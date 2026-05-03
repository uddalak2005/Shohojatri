import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Home Page Settings',
      readOnly: true,
      hidden: true,
    }),
    // defineField({
    //   name: 'heroVideo',
    //   title: 'Hero Video',
    //   type: 'file',
    //   options: {
    //     accept: 'video/*'
    //   }
    // }),
    defineField({
      name: 'aboutVideo',
      title: 'Our Story Video',
      type: 'file',
      options: {
        accept: 'video/*'
      }
    }),
    defineField({
      name: 'founderImage',
      title: 'Founder Picture (Debangana Bhattacharya)',
      type: 'image',
      options: { hotspot: true }
    }),
    // defineField({
    //   name: 'heroData',
    //   title: 'Hero Section Data',
    //   type: 'object',
    //   fields: [
    //     defineField({ name: 'badge', title: 'Badge Text', type: 'string' }),
    //     defineField({ name: 'titleLine1', title: 'Title Line 1', type: 'string' }),
    //     defineField({ name: 'titleLine2', title: 'Title Line 2', type: 'string' }),
    //     defineField({ name: 'description', title: 'Description', type: 'text' }),
    //   ]
    // }),
    // defineField({
    //   name: 'aboutData',
    //   title: 'About Us Data',
    //   type: 'object',
    //   fields: [
    //     defineField({ name: 'label', title: 'Label', type: 'string' }),
    //     defineField({ name: 'titleLine1', title: 'Title Line 1', type: 'string' }),
    //     defineField({ name: 'titleLine2', title: 'Title Line 2', type: 'string' }),
    //     defineField({ name: 'paragraphs', title: 'Paragraphs', type: 'array', of: [{type: 'text'}] }),
    //   ]
    // })
  ]
})

