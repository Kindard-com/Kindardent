import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'homePage',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'headline',
          type: 'text',
          defaultValue: 'DROP 01 — NOW LIVE',
          required: true,
        },
        {
          name: 'subheadline',
          type: 'textarea',
          defaultValue: 'NO COMPROMISE.\nJUST CLOTHES.',
          required: true,
        },
        {
          name: 'ctaText',
          type: 'text',
          defaultValue: 'INVEST IN TOKEN',
          required: true,
        },
        {
          name: 'ctaUrl',
          type: 'text',
          defaultValue: '/invest',
          required: true,
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'newArrivals',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      label: 'New Arrivals Products',
    },
    {
      name: 'categoryBanners',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'ctaText',
          type: 'text',
          defaultValue: 'SHOP CATEGORY',
          required: true,
        },
        {
          name: 'ctaUrl',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'newsletterSection',
      type: 'group',
      fields: [
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'JOIN THE TRIBE',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          defaultValue: 'EXCLUSIVE DROPS. EARLY ACCESS. NOTHING ELSE.',
          required: true,
        },
      ],
    },
  ],
}
