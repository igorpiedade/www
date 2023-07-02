import Logo from './Logo'
import NavMenu from './NavMenu'
import SocialNav from './SocialNav'

export default function Header() {
  return (
    <header className="header sticky top-0 flex h-16 w-screen place-content-center bg-gray-950 px-5 text-slate-300 opacity-90 bg-blend-color-burn shadow-md shadow-zinc-600">
      <div className="flex w-screen max-w-7xl items-center justify-between">
        <Logo />
        <NavMenu />
        <SocialNav />
      </div>
    </header>
  )
}
