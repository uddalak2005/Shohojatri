export default {
  name: 'galleryItem',
  title: 'Gallery Item',
  type: 'document',
  fields: [
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'tag', title: 'Tag', type: 'string' },
    { name: 'caption', title: 'Caption', type: 'string' },
    { 
      name: 'height', 
      title: 'Height', 
      type: 'string',
      options: {
        list: ['short', 'normal', 'tall']
      }
    }
  ]
}
