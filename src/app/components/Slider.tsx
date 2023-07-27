'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface slideType {
  id: number
  img: string
  alt: string
  link: string
}

export default function Slider({ slides }: any) {
  const slideLeft = () => {
    const scrollSlider: any = document.getElementById('slider')
    scrollSlider.scrollLeft = scrollSlider.scrollLeft - 320
  }

  const slideRight = () => {
    const scrollSlider: any = document.getElementById('slider')
    scrollSlider.scrollLeft = scrollSlider?.scrollLeft + 320
  }

  return (
    <div className=" flex max-w-full items-center">
      <ChevronLeft
        className="cursor-pointer opacity-50 hover:opacity-100"
        onClick={slideLeft}
        size={40}
      />
      <div
        id="slider"
        className=" scroll flex h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap p-4 scrollbar-hide"
      >
        {slides.map((slide: slideType) => (
          <a href={slide.link} target="_new" key={slide.id}>
            <Image
              src={slide.img}
              alt={slide.alt}
              width={288}
              height={320}
              className=" m-2 flex h-80 w-72 shrink-0 cursor-pointer rounded-2xl grayscale duration-300 ease-in-out hover:scale-110 hover:grayscale-0"
            ></Image>
          </a>
        ))}
      </div>
      <ChevronRight
        className="cursor-pointer opacity-50 hover:opacity-100"
        onClick={slideRight}
        size={40}
      />
    </div>
  )
}
