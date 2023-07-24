'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

interface slideType {
  id: number
  img: string
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
    <div className="relative flex max-w-full items-center">
      <ChevronLeft
        className="cursor-pointer opacity-50 hover:opacity-100"
        onClick={slideLeft}
        size={40}
      />
      <div
        id="slider"
        className="scroll flex h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap p-4 scrollbar-hide"
      >
        {slides.map((slide: slideType) => (
          <div
            key={slide.id}
            className="m-2 flex h-80 w-72 shrink-0 cursor-pointer snap-center items-center justify-center rounded-2xl bg-purple-700 p-2 grayscale duration-300 ease-in-out hover:scale-110 hover:grayscale-0"
          >
            {slide.img}
          </div>
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
