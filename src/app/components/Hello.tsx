import Image from 'next/image'
import myPhoto from '../../../public/assets/FloatingHead.svg'

const myPhotoAlt: string = 'sample alt'

export default function Hello() {
  return (
    <div
      id="Hello"
      className=" mt-16 flex h-96 w-screen place-content-center bg-gradient-to-tl from-slate-800 to-zinc-950 text-slate-200"
    >
      <div className="w-full place-content-center items-center justify-center sm:flex sm:max-w-7xl sm:gap-20">
        <div className="ml-2 flex items-center justify-center">
          <Image
            src={myPhoto}
            alt={myPhotoAlt}
            width={0}
            className="w-[12rem] sm:-mt-9 sm:w-[16rem]"
          />
        </div>
        <div className="mt-10 flex items-center justify-center sm:mt-10">
          <div className="text-center sm:place-items-start sm:text-left">
            <h2 className="text-lx sm:text-2xl">
              &#60; Hello_World &#47;&#62;
            </h2>
            <div className="flex items-baseline gap-3 font-logo text-5xl sm:text-8xl">
              <p>I&#39;m</p>
              <h1 className="m-1 flex items-center bg-gradient-to-bl from-yellow-600 to-yellow-100 bg-clip-text font-logo text-transparent">
                Igor Piedade
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
