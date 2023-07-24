import { Instagram, Linkedin, Github, Mail } from 'lucide-react'

export default function SocialNav() {
  return (
    <ul className="flex">
      <li className="m-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 hover:bg-gradient-to-tr hover:from-yellow-600 hover:to-slate-100 ">
        <a href="https://instagram.com/codecoffeeandtrips">
          <Instagram color="black" />
        </a>
      </li>
      <li className="m-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 hover:bg-gradient-to-tr hover:from-yellow-600 hover:to-slate-100 ">
        <a href="https://linkedin.com/in/igorpiedade">
          <Linkedin color="black" />
        </a>
      </li>
      <li className="m-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 hover:bg-gradient-to-tr hover:from-yellow-600 hover:to-slate-100 ">
        <a href="https://github.com/igorpiedade">
          <Github color="black" />
        </a>
      </li>
      <li className="m-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-300 hover:bg-gradient-to-tr hover:from-yellow-600 hover:to-slate-100 ">
        <a href="mailto:igor@piedade.live">
          <Mail color="black" />
        </a>
      </li>
    </ul>
  )
}
