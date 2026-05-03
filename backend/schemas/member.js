export default {
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'role', title: 'Role', type: 'string' },
    {
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: ['Shohojatri Team', 'Achintya Team']
      }
    },
    { name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }
  ]
}
