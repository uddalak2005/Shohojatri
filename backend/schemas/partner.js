export default {
  name: 'partner',
  title: 'Partner / Collaborator',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } },
    { name: 'url', title: 'Website URL (optional)', type: 'url' }
  ]
}
