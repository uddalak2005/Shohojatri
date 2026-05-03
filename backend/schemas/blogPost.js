export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { 
      name: 'slug', 
      title: 'Slug', 
      type: 'slug', 
      options: { source: 'title', maxLength: 96 } 
    },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'author', title: 'Author', type: 'string' },
    { name: 'date', title: 'Date', type: 'string' },
    { name: 'image', title: 'Main Image', type: 'image', options: { hotspot: true } },
    { name: 'featured', title: 'Featured?', type: 'boolean', initialValue: false },
    { name: 'content', title: 'Content', type: 'array', of: [{type: 'block'}] }
  ]
}
