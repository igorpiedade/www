import { StaticImageData } from 'next/image'

import Slider from './Slider'

import spacetimeCard from '../../../public/assets/spacetime_card.png'
import spacetimeMobileCard from '../../../public/assets/spacetimeMobile_card.png'
import spacetimeAPICard from '../../../public/assets/spacetimeAPI_card.png'
import notificationServiceCard from '../../../public/assets/notificationService_card.png'
import personalwebCard from 'public/assets/personaIweb_card.png'
import sociallogin from 'public/assets/oauth_card.png'

type slidesProp = {
  id: number
  img: StaticImageData
  alt: string
  link: string
}[]

export default function Portifolio() {
  const slidesArray: slidesProp = [
    {
      id: 1,
      img: sociallogin,
      alt: 'a card image showing a screenshot from the sample website with the social login feature',
      link: 'https://sociallogin.piedade.live',
    },
    {
      id: 2,
      img: personalwebCard,
      alt: 'a card image showing a screenshot from this website with a link to the github repo',
      link: 'https://github.com/igorpiedade/www',
    },
    {
      id: 3,
      img: notificationServiceCard,
      alt: 'a card image showing insominia app interating with the application',
      link: 'https://github.com/igorpiedade/notification-service',
    },
    {
      id: 4,
      img: spacetimeCard,
      alt: 'a card image with a screenshot of the web application spacetime',
      link: 'https://github.com/igorpiedade/spacetime_web',
    },
    {
      id: 5,
      img: spacetimeMobileCard,
      alt: 'a card with a sample image of the mobile aplication from the spacetime project',
      link: 'https://github.com/igorpiedade/spacetime_mobile',
    },
    {
      id: 6,
      img: spacetimeAPICard,
      alt: 'a card image with a snippet code of the spacetime back-end',
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
