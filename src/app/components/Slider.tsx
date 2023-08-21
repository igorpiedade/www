'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
    <div className="relative flex items-center">
      <ChevronLeft
        size={35}
        className="mr-2 cursor-pointer p-2 opacity-50 hover:opacity-100"
        onClick={slideLeft}
      />
      <div
        id="slider"
        className="scroll h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide"
      >
        {slides.map((slide: slideType) => (
          <a href={slide.link} target="new_" key={slide.id}>
            <Image
              className="inline-block h-80 w-72 cursor-pointer rounded-2xl p-2 grayscale duration-300 ease-in-out hover:scale-105 hover:grayscale-0 "
              src={slide.img}
              alt="/"
            />
          </a>
        ))}
      </div>
      <ChevronRight
        size={35}
        className="ml-2 cursor-pointer opacity-50 hover:opacity-100"
        onClick={slideRight}
      />
    </div>
  )
}
