import Image from 'next/image'
import myPhoto from '../../../public/assets/FloatingHead.svg'

const myPhotoAlt: string = 'sample alt'

export default function Hello() {
  return (
    <div className="top-0 flex h-96 w-screen place-content-center bg-gradient-to-tl from-slate-800 to-zinc-950 text-slate-200">
      <div className="flex w-screen max-w-7xl place-content-center items-center gap-x-20">
        <Image src={myPhoto} alt={myPhotoAlt} width={250} className="-mt-9" />

        <div className="place-items-start text-left">
          <h2 className="text-2xl">&#60; Hello_World &#47;&#62;</h2>
          <div className="flex items-baseline gap-3 font-logo text-8xl">
            <p>I&#39;m</p>
            <h1 className="m-3 flex items-center bg-gradient-to-bl from-yellow-600 to-yellow-100 bg-clip-text font-logo text-transparent">
              Igor Piedade
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
