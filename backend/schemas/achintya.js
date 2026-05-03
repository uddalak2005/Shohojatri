import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'achintyaPage',
  title: 'Achintya Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Achintya Page Settings',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'workshopEmail',
      title: 'Book a Workshop Email',
      type: 'string',
      description: 'Email address for the "Book a Workshop" link.'
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Dialer Phone Number',
      type: 'string',
      description: 'Phone number for the dialer embedding.'
    })
  ]
})
