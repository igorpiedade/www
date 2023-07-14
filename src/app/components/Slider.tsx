'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Slider() {
  const slides = [
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

  const slideLeft = () => {
    const scrollSlider = document.getElementById('slider')
    scrollSlider.scrollLeft = scrollSlider.scrollLeft - 320
  }

  const slideRight = () => {
    const scrollSlider = document.getElementById('slider')
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
        className="scroll h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap p-4 scrollbar-hide"
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="m-2 inline-block h-80 w-72 cursor-pointer items-center justify-center rounded-2xl bg-purple-700 p-2 grayscale duration-300 ease-in-out hover:scale-110 hover:grayscale-0"
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
