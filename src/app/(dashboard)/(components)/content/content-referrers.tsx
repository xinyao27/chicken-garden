import StatsCard from '@/components/custom/stats-card'

const stats = [
  {
    key: 'github.com',
    total: 1370,
    devices: 1200,
  },
  {
    key: 'google.com',
    total: 1026,
    devices: 854,
  },
  {
    key: 't.co',
    total: 650,
    devices: 602,
  },
  {
    key: 'aiden.mov',
    total: 319,
    devices: 286,
  },
  {
    key: 'magicui.design',
    total: 192,
    devices: 169,
  },
  {
    key: 'react-scan.com',
    total: 71,
    devices: 70,
  },
  {
    key: 'ycombinator.com',
    total: 66,
    devices: 59,
  },
  {
    key: 'npmjs.com',
    total: 46,
    devices: 41,
  },
  {
    key: 'search.brave.com',
    total: 35,
    devices: 34,
  },
  {
    key: 'bing.com',
    total: 39,
    devices: 30,
  },
  {
    key: 'duckduckgo.com',
    total: 28,
    devices: 22,
  },
  {
    key: 'blog.openreplay.com',
    total: 22,
    devices: 21,
  },
  {
    key: 'statics.teams.cdn.office.net',
    total: 26,
    devices: 21,
  },
  {
    key: 'yandex.ru',
    total: 23,
    devices: 21,
  },
  {
    key: 'linkedin.com',
    total: 22,
    devices: 20,
  },
  {
    key: 'aidenybai.com',
    total: 17,
    devices: 16,
  },
  {
    key: 'com.slack',
    total: 18,
    devices: 16,
  },
  {
    key: 'pham.codes',
    total: 15,
    devices: 15,
  },
  {
    key: 'com.linkedin.android',
    total: 12,
    devices: 9,
  },
  {
    key: 'risingstars.js.org',
    total: 9,
    devices: 9,
  },
  {
    key: 'youtube.com',
    total: 12,
    devices: 9,
  },
  {
    key: 'marketplace.visualstudio.com',
    total: 9,
    devices: 7,
  },
  {
    key: 'bestofjs.org',
    total: 7,
    devices: 6,
  },
  {
    key: 'cn.bing.com',
    total: 6,
    devices: 5,
  },
  {
    key: 'reddit.com',
    total: 5,
    devices: 5,
  },
  {
    key: 'google.com.hk',
    total: 4,
    devices: 4,
  },
  {
    key: 'madewithreactjs.com',
    total: 4,
    devices: 4,
  },
  {
    key: 'oss.gallery',
    total: 4,
    devices: 4,
  },
  {
    key: 'bookface.ycombinator.com',
    total: 5,
    devices: 3,
  },
  {
    key: 'chatgpt.com',
    total: 3,
    devices: 3,
  },
  {
    key: 'm.facebook.com',
    total: 4,
    devices: 3,
  },
  {
    key: 'news.hada.io',
    total: 4,
    devices: 3,
  },
  {
    key: 'nextradar.dev',
    total: 3,
    devices: 3,
  },
  {
    key: 'qabilah.com',
    total: 3,
    devices: 3,
  },
  {
    key: 'coda.io',
    total: 2,
    devices: 2,
  },
  {
    key: 'com.twitter.android',
    total: 2,
    devices: 2,
  },
  {
    key: 'id.search.yahoo.com',
    total: 2,
    devices: 2,
  },
  {
    key: 'map.sistilli.dev',
    total: 2,
    devices: 2,
  },
  {
    key: 'siemens-sts.atlassian.net',
    total: 2,
    devices: 2,
  },
  {
    key: 'softwareengineeringdaily.com',
    total: 2,
    devices: 2,
  },
  {
    key: 'synaptic.com',
    total: 2,
    devices: 2,
  },
  {
    key: '114.114.114.114',
    total: 1,
    devices: 1,
  },
  {
    key: 'api.daily.dev',
    total: 1,
    devices: 1,
  },
  {
    key: 'awesomeopensource.com',
    total: 1,
    devices: 1,
  },
  {
    key: 'busqueda.me',
    total: 1,
    devices: 1,
  },
  {
    key: 'caesarsdigital.atlassian.net',
    total: 1,
    devices: 1,
  },
  {
    key: 'com.google.android.googlequicksearchbox',
    total: 1,
    devices: 1,
  },
  {
    key: 'com.reddit.frontpage',
    total: 1,
    devices: 1,
  },
  {
    key: 'ecubelabs.atlassian.net',
    total: 1,
    devices: 1,
  },
  {
    key: 'effect.website',
    total: 1,
    devices: 1,
  },
  {
    key: 'facebook.com',
    total: 1,
    devices: 1,
  },
  {
    key: 'frontend.horse',
    total: 1,
    devices: 1,
  },
  {
    key: 'gist.github.com',
    total: 1,
    devices: 1,
  },
  {
    key: 'google.be',
    total: 1,
    devices: 1,
  },
  {
    key: 'google.co.in',
    total: 1,
    devices: 1,
  },
  {
    key: 'google.co.uk',
    total: 2,
    devices: 1,
  },
  {
    key: 'google.com.vn',
    total: 1,
    devices: 1,
  },
  {
    key: 'google.es',
    total: 1,
    devices: 1,
  },
  {
    key: 'google.fr',
    total: 1,
    devices: 1,
  },
  {
    key: 'google.ro',
    total: 2,
    devices: 1,
  },
  {
    key: 'hellogithub.com',
    total: 1,
    devices: 1,
  },
  {
    key: 'link.juejin.cn',
    total: 1,
    devices: 1,
  },
  {
    key: 'mail.google.com',
    total: 1,
    devices: 1,
  },
  {
    key: 'medium.com',
    total: 1,
    devices: 1,
  },
  {
    key: 'news.ycombinator.com',
    total: 1,
    devices: 1,
  },
  {
    key: 'notion.so',
    total: 1,
    devices: 1,
  },
  {
    key: 'ph.search.yahoo.com',
    total: 2,
    devices: 1,
  },
  {
    key: 'pratyaywrites.hashnode.dev',
    total: 1,
    devices: 1,
  },
  {
    key: 'qiita.com',
    total: 1,
    devices: 1,
  },
  {
    key: 'react.statuscode.com',
    total: 1,
    devices: 1,
  },
  {
    key: 'statics.gov.teams.microsoft.us',
    total: 2,
    devices: 1,
  },
  {
    key: 'tr.search.yahoo.com',
    total: 2,
    devices: 1,
  },
  {
    key: 'vercel.com',
    total: 1,
    devices: 1,
  },
  {
    key: 'wiki.ringcentral.com',
    total: 1,
    devices: 1,
  },
  {
    key: 'ya.ru',
    total: 1,
    devices: 1,
  },
  {
    key: 'yuque.alibaba-inc.com',
    total: 1,
    devices: 1,
  },
  {
    key: 'yuque.antfin.com',
    total: 1,
    devices: 1,
  },
]

export default function ContentReferrers() {
  return (
    <StatsCard
      data={stats}
      labels={['Page Views', 'Visitors']}
      title="Referrers"
      titleSwitcherItems={['Referrers', 'UTM Paramters']}
    />
  )
}
