import StatsCard from '@/components/custom/stats-card'

const stats = [
  {
    key: 'desktop',
    total: 14665,
    devices: 4904,
  },
  {
    key: 'mobile',
    total: 3564,
    devices: 1846,
  },
  {
    key: 'tablet',
    total: 28,
    devices: 19,
  },
]

export default function ContentDevices() {
  return <StatsCard data={stats} labels={['Page Views', 'Visitors']} title="Devices" />
}
