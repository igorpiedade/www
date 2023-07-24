import Slider from './Slider'

export default function Portifolio() {
  const slidesArray: {
    id: number
    img: string
  } = [
    {
      id: 1,
      img: 'img 1',
    },
    {
      id: 2,
      img: 'img 2',
    },
    {
      id: 3,
      img: 'img 3',
    },
    {
      id: 4,
      img: 'img 4',
    },
    {
      id: 5,
      img: 'img 5',
    },
    {
      id: 6,
      img: 'img 6',
    },
  ]

  return (
    <div className="flex h-auto place-content-center bg-gradient-to-bl from-yellow-400 to-yellow-200 text-zinc-800">
      <div className="m-10 flex max-w-6xl flex-col items-center">
        <h1 className=" mb-5 font-logo text-3xl">Portifolio</h1>
        <Slider slides={slidesArray} />
      </div>
    </div>
  )
}
