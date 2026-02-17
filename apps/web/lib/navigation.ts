import type { HeaderNavLink } from '@thesage/ui';

export const ecosystemNavigation: HeaderNavLink[] = [
  {
    label: 'Documentation',
    active: true,
    children: [
      { label: 'Sage Studio', href: 'https://thesage.dev', active: true },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'NPM Package', href: 'https://www.npmjs.com/package/@thesage/ui' },
      { label: 'GitHub', href: 'https://github.com/shalomormsby/sage-design-engine' },
    ],
  },
];
