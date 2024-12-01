import HeaderActions from './header-actions'
import HeaderTitle from './header-title'

export default function Header() {
  return (
    <header className="container my-8 flex justify-between">
      <HeaderTitle />
      <HeaderActions />
    </header>
  )
}
