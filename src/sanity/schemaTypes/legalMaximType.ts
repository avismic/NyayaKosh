import { defineField, defineType } from 'sanity'

export const legalMaximType = defineType({
  name: 'legalMaxim',
  title: 'Legal Maxim',
  type: 'document',
  fields: [
    defineField({
      name: 'term',
      title: 'Term',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'definition',
      title: 'Definition',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'origin',
      title: 'Origin',
      type: 'string',
    }),
    defineField({
      name: 'example',
      title: 'Example',
      type: 'text',
    }),
  ],
})
