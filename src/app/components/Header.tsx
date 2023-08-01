import Logo from './Logo'
// import NavMenu from './NavMenu'
import SocialNav from './SocialNav'

export default function Header() {
  return (
    <header className=" header fixed top-0 z-10 flex h-16 w-screen place-content-center overflow-hidden bg-gray-950 px-5 text-slate-300 bg-blend-color-burn">
      <div className="text-6 flex w-screen max-w-7xl items-center justify-between">
        <Logo />
        {/* <NavMenu /> */}
        <SocialNav />
      </div>
    </header>
  )
}
