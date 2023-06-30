import { Instagram, Linkedin, Github } from 'lucide-react'

export default function Header() {
  return (
    <header className="header sticky top-0 flex h-16 w-screen place-content-center bg-gray-950 px-5 text-slate-300 opacity-90 bg-blend-color-burn shadow-md shadow-zinc-600">
      <div className="flex w-screen max-w-7xl items-center justify-between">
        <div>Igor Piedade</div>
        <nav>
          <ul className="flex list-none font-navMenu">
            <li className="px-5 hover:text-slate-400">
              <a href="#">Hello</a>
            </li>
            <li className="px-5 hover:text-slate-400">
              <a href="#">Stack</a>
            </li>
            <li className="px-5 hover:text-slate-400">
              <a href="#">Portifolio</a>
            </li>
            <li className="px-5 hover:text-slate-400">
              <a href="#">Careear Path</a>
            </li>
            <li className="px-5 hover:text-slate-400">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div>
          <ul className="flex">
            <li className="m-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-300">
              <Instagram color="black" />
            </li>
            <li className="m-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-300">
              <Linkedin color="black" />
            </li>
            <li className="m-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-300">
              <Github color="black" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
