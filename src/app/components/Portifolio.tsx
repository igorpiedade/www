import Slider from './Slider'

import spacetimeCard from '../../../public/assets/spacetime_card.png'
import spacetimeMobileCard from '../../../public/assets/spacetimeMobile_card.png'
import spacetimeAPICard from '../../../public/assets/spacetimeAPI_card.png'

export default function Portifolio() {
  const slidesArray: {
    id: number
    img: string
  } = [
    {
      id: 1,
      img: spacetimeCard,
      alt: 'spacetime sample image',
      link: 'https://github.com/igorpiedade/spacetime_web',
    },
    {
      id: 2,
      img: spacetimeMobileCard,
      alt: 'spacetime mobile sample image',
      link: 'https://github.com/igorpiedade/spacetime_mobile',
    },
    {
      id: 3,
      img: spacetimeAPICard,
      alt: 'spacetime API sample image',
      link: 'https://github.com/igorpiedade/spacetime_api',
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
