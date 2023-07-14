import Slider from './Slider'

export default function Portifolio() {
  return (
    <div className="flex h-auto w-screen place-content-center bg-gradient-to-bl from-yellow-400 to-yellow-200 text-zinc-800">
      <div className="m-10 flex w-screen max-w-7xl flex-col items-center">
        <h1 className=" mb-5 font-logo text-3xl">Portifolio</h1>
        <Slider />
      </div>
    </div>
  )
}
