import StatsCard from '@/components/custom/stats-card'

const stats = [
  {
    key: '/',
    total: 8604,
    devices: 5825,
  },
  {
    key: '/docs',
    total: 4366,
    devices: 2749,
  },
  {
    key: '/docs/performance',
    total: 1577,
    devices: 1021,
  },
  {
    key: '/docs/events',
    total: 1070,
    devices: 736,
  },
  {
    key: '/docs/production',
    total: 764,
    devices: 602,
  },
  {
    key: '/blog/lint-rc',
    total: 609,
    devices: 523,
  },
  {
    key: '/blog',
    total: 481,
    devices: 399,
  },
  {
    key: '/docs/terms',
    total: 274,
    devices: 212,
  },
  {
    key: '/docs/privacy-policy',
    total: 177,
    devices: 127,
  },
  {
    key: '/docs/code-policy',
    total: 140,
    devices: 111,
  },
  {
    key: '/docs/install',
    total: 49,
    devices: 45,
  },
  {
    key: '/docs/introduction',
    total: 23,
    devices: 20,
  },
  {
    key: '/ai',
    total: 10,
    devices: 10,
  },
  {
    key: '/blog/million-3',
    total: 11,
    devices: 10,
  },
  {
    key: '/showcase',
    total: 9,
    devices: 9,
  },
  {
    key: '/faq',
    total: 7,
    devices: 7,
  },
  {
    key: '/foundation',
    total: 7,
    devices: 7,
  },
  {
    key: '/docs/quickstart',
    total: 7,
    devices: 6,
  },
  {
    key: '/blog/million-3.en-US',
    total: 4,
    devices: 3,
  },
  {
    key: '/blog/million-v2.5.1',
    total: 3,
    devices: 3,
  },
  {
    key: '/blog/million-v2.5.3',
    total: 2,
    devices: 2,
  },
  {
    key: '/docs/rules',
    total: 2,
    devices: 2,
  },
  {
    key: '/pricing',
    total: 2,
    devices: 2,
  },
  {
    key: '/wrapped/5e0670951771ae6e93fa702492196033',
    total: 9,
    devices: 2,
  },
  {
    key: '/wrapped/6cc2002c8ec4c00285c22ea20821d4d0',
    total: 5,
    devices: 2,
  },
  {
    key: '/wrapped/759c7c355a21b340fbbee8e22501fa61',
    total: 6,
    devices: 2,
  },
  {
    key: '/admin',
    total: 1,
    devices: 1,
  },
  {
    key: '/banner.png',
    total: 1,
    devices: 1,
  },
  {
    key: '/blog/block-noSlot',
    total: 1,
    devices: 1,
  },
  {
    key: '/blog/million-v251',
    total: 1,
    devices: 1,
  },
  {
    key: '/code-policy',
    total: 1,
    devices: 1,
  },
  {
    key: '/docs/block',
    total: 1,
    devices: 1,
  },
  {
    key: '/docs/for',
    total: 1,
    devices: 1,
  },
  {
    key: '/docs/manual-mode/manual-mode',
    total: 1,
    devices: 1,
  },
  {
    key: '/docsfporn.tv',
    total: 1,
    devices: 1,
  },
  {
    key: '/es-ES/docs/install',
    total: 1,
    devices: 1,
  },
  {
    key: '/login',
    total: 1,
    devices: 1,
  },
  {
    key: '/wrapped/0112d8653d35c33c6e70f92327953fd5',
    total: 1,
    devices: 1,
  },
  {
    key: '/wrapped/13e1c0ba4bc091e21d483a8c7ccf91a0',
    total: 2,
    devices: 1,
  },
  {
    key: '/wrapped/255085cf6b5753a4a2d890f0051be66e',
    total: 1,
    devices: 1,
  },
  {
    key: '/wrapped/2b7131fceff6c84ab09a071718d7fb6',
    total: 1,
    devices: 1,
  },
  {
    key: '/wrapped/2b7131fceff6c84ab09a071718d7fb6a',
    total: 5,
    devices: 1,
  },
  {
    key: '/wrapped/2b7131fceff6c84ab09a071718d7fb6a.js',
    total: 1,
    devices: 1,
  },
  {
    key: '/wrapped/3dc39e73fc3ca0f2d0f8bb9101dd3be6',
    total: 1,
    devices: 1,
  },
  {
    key: '/wrapped/462e9a32fc9ace0861b5b69c43fc9116',
    total: 1,
    devices: 1,
  },
  {
    key: '/wrapped/4a2fd11c00aa02301305f6ee5ff20bbc',
    total: 1,
    devices: 1,
  },
  {
    key: '/wrapped/5323cee083deb46fedd4de6665d021a2',
    total: 2,
    devices: 1,
  },
  {
    key: '/wrapped/59caeeb856042e281827f1e883dc5b4a',
    total: 1,
    devices: 1,
  },
  {
    key: '/wrapped/60c8d5cb101ad972b733ec7e446c03e8',
    total: 1,
    devices: 1,
  },
  {
    key: '/wrapped/70852eadde0e52cb0d0c0f020e8a7620',
    total: 1,
    devices: 1,
  },
  {
    key: '/wrapped/9620d26e460fcca4c04b0aaeecaf3bb1',
    total: 1,
    devices: 1,
  },
  {
    key: '/wrapped/bceb091fc35acb5c7acb6eb47e1d1dea',
    total: 1,
    devices: 1,
  },
  {
    key: '/wrapped/d2eeb5ed4e7d2f2f7c8588cd25e521d1',
    total: 2,
    devices: 1,
  },
  {
    key: '/wrapped/d80ef0f26cc24a01376f7fb0535bf703',
    total: 1,
    devices: 1,
  },
  {
    key: '/wrapped/d86eb0817f96451a838b57724eb8938c',
    total: 1,
    devices: 1,
  },
  {
    key: '/wrapped/de5a9ce57c30cd2aeccf6acdd94dbc7a',
    total: 1,
    devices: 1,
  },
  {
    key: '/wrapped/e6511efa03303f7648d2a2f157af418f',
    total: 1,
    devices: 1,
  },
  {
    key: '/wrapped/e73f0aaf3b8ba903e388fc9cf5c2072d',
    total: 1,
    devices: 1,
  },
  {
    key: '/wrapped/effb1609059eeba3dd6b8de3ae88e63c',
    total: 1,
    devices: 1,
  },
  {
    key: '/wrapped/f80b3b02a09f35a727ed6ef0d06765d3',
    total: 1,
    devices: 1,
  },
  {
    key: '/zh-CN',
    total: 1,
    devices: 1,
  },
]

export default function ContentPages() {
  return (
    <StatsCard
      data={stats}
      labels={['Page Views', 'Visitors']}
      title="Pages"
      titleSwitcherItems={['Pages', 'Routes', 'Hostnames']}
    />
  )
}
