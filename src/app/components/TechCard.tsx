import Image from 'next/image'

type Props = {
  icon: string
  caption: string
}

export default function TechCard({ icon, caption }: Props) {
  return (
    <div className="flex h-36 w-36 flex-col overflow-clip rounded-b-3xl rounded-t-md bg-zinc-50 shadow-lg shadow-slate-400">
      <div className="flex h-28 w-full place-items-center justify-center">
        <Image
          src={icon}
          alt=""
          width={144}
          height={144}
          className="object-fill"
        />
      </div>
      <label className="tex flex h-8 w-full place-items-center justify-center bg-zinc-800 text-lg text-zinc-100">
        {caption}
      </label>
    </div>
  )
}
