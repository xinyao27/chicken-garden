import Logo from './logo'
import { ThemeToggle } from './theme-toggle'

export default function Footer() {
  return (
    <footer className="container py-12">
      <div className="flex items-center justify-between gap-2">
        <Logo className="size-9" />
        <ThemeToggle />
      </div>
    </footer>
  )
}
