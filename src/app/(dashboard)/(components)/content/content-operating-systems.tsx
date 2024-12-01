import StatsCard from '@/components/custom/stats-card'

const stats = [
  {
    key: 'Mac',
    total: 9395,
    devices: 2945,
  },
  {
    key: 'Windows',
    total: 4165,
    devices: 1642,
  },
  {
    key: 'iOS',
    total: 2066,
    devices: 1195,
  },
  {
    key: 'Android',
    total: 1526,
    devices: 670,
  },
  {
    key: 'GNU/Linux',
    total: 1063,
    devices: 302,
  },
  {
    key: 'Ubuntu',
    total: 44,
    devices: 17,
  },
]

export default function ContentOperatingSystems() {
  return <StatsCard data={stats} labels={['Page Views', 'Visitors']} title="Operating Systems" />
}
