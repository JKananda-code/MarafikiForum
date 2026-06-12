export default {
  name: 'sponsoredPost',
  type: 'document',
  title: 'Sponsored Post',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'sponsor', type: 'string' },
    { name: 'price', type: 'number' },
    { name: 'content', type: 'array', of: [{type: 'block'}] }
  ]
}
