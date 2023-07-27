import TechCard from './TechCard'

import javascriptIcon from '../../../public/assets/javascript.svg'
import reactIcon from '../../../public/assets/React-icon.svg'
import nestjsIcon from '../../../public/assets/nestjs.svg'
import prismaIcon from '../../../public/assets/prismaio.svg'
import nextjsIcon from '../../../public/assets/nextjs.svg'
import typescriptIcon from '../../../public/assets/typescript.svg'
import nodejsIcon from '../../../public/assets/Nodejs.svg'
import postgreIcon from '../../../public/assets/Postgresql.svg'
import expoIcon from '../../../public/assets/expo.svg'
import jestIcon from '../../../public/assets/jest-js-icon.svg'

export default function Stack() {
  return (
    <div className="mt-8 flex w-screen place-content-center">
      <div className="w-screen max-w-7xl place-content-center">
        <h1 className="mb-5 text-center font-logo text-3xl text-zinc-800">
          Stack
        </h1>
        <div className="m-10 grid grid-cols-6 place-items-center gap-4">
          <TechCard icon={javascriptIcon} caption="Javascript" />
          <TechCard icon={nodejsIcon} caption="Node.JS" />
          <TechCard icon={reactIcon} caption="React.JS" />
          <TechCard icon={typescriptIcon} caption="Typescript" />
          <TechCard icon={nextjsIcon} caption="Next.JS" />
          <TechCard icon={nestjsIcon} caption="Nest.JS" />
          <TechCard icon={prismaIcon} caption="Prisma.IO" />
          <TechCard icon={postgreIcon} caption="PostgreSQL" />
          <TechCard icon={expoIcon} caption="Expo" />
          <TechCard icon={jestIcon} caption="Jest" />
        </div>
      </div>
    </div>
  )
}
