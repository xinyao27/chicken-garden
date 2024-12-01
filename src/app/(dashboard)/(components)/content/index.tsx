import ContentChart from './content-chart'
import ContentPages from './content-pages'
import ContentReferrers from './content-referrers'
import ContentCountries from './content-countries'
import ContentDevices from './content-devices'
import ContentOperatingSystems from './content-operating-systems'
import ContentEvents from './content-events'
import ContentFlags from './content-flags'

export default function Content() {
  return (
    <div className="container flex flex-col gap-4">
      <ContentChart />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ContentPages />
        <ContentReferrers />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <ContentCountries />
        <ContentDevices />
        <ContentOperatingSystems />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ContentEvents />
        <ContentFlags />
      </div>
    </div>
  )
}
