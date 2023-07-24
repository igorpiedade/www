import Footer from './components/Footer'
import Hello from './components/Hello'
import Portifolio from './components/Portifolio'
import Profile from './components/Profile'
import FullStack from './components/Stack'

export default function Home() {
  return (
    <div className=" space-y-10">
      <Hello />
      <Profile />
      <Portifolio />
      <FullStack />
      <Footer />
    </div>
  )
}
