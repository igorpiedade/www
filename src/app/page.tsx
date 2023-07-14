import Hello from './components/Hello'
import Portifolio from './components/Portifolio'
import FullStack from './components/Stack'

export default function Home() {
  return (
    <div className=" space-y-10">
      <Hello />
      <FullStack />
      <Portifolio />
    </div>
  )
}
