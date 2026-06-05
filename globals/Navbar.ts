import type { GlobalConfig } from 'payload'

export const Navbar: GlobalConfig = {
  slug: 'navbar',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'links',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'connectWalletButton',
      type: 'group',
      fields: [
        {
          name: 'activeText',
          type: 'text',
          defaultValue: 'Connect Wallet',
          required: true,
        },
        {
          name: 'inactiveText',
          type: 'text',
          defaultValue: 'Connect Wallet',
          required: true,
        },
      ],
    },
  ],
}
