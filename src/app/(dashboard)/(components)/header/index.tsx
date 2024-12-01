import HeaderActions from './header-actions'
import HeaderTitle from './header-title'

export default function Header() {
  return (
    <header className="container my-8 flex flex-col justify-between gap-6 md:flex-row">
      <HeaderTitle />
      <HeaderActions />
    </header>
  )
}
