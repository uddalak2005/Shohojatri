import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Workshop & Stage Events',
  type: 'document',
  fields: [
    defineField({
      name: 'session',
      title: 'Session/Title',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'session',
      subtitle: 'date'
    }
  }
})
