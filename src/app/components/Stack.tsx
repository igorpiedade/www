import TechCard from './TechCard'

import javascriptIcon from '../../../public/assets/javascript.svg'
import reactIcon from '../../../public/assets/React-icon.svg'
import nestjsIcon from '../../../public/assets/nestjs.svg'
import prismaIcon from '../../../public/assets/prismaio.svg'
import nextjsIcon from '../../../public/assets/nextjs.svg'
import typescriptIcon from '../../../public/assets/typescript.svg'

export default function FullStack() {
  return (
    <div className="mt-8 flex w-screen place-content-center">
      <div className="w-screen max-w-7xl place-content-center">
        <h1 className="mb-5 text-center font-logo text-3xl text-zinc-800">
          Full Stack
        </h1>
        <div className="m-10 grid grid-cols-6 place-items-center gap-4">
          <TechCard icon={javascriptIcon} caption="Javascript" />
          <TechCard icon={reactIcon} caption="React.JS" />
          <TechCard icon={nextjsIcon} caption="Next.JS" />
          <TechCard icon={typescriptIcon} caption="Typescript" />
          <TechCard icon={nestjsIcon} caption="Nest.JS" />
          <TechCard icon={prismaIcon} caption="Prisma.IO" />
        </div>
      </div>
    </div>
  )
}
