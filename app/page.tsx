import Image from 'next/image'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Quality from './components/Quality'
import Machinery from './components/Machinery'
import Hero from './components/Hero'
import About from './components/About'
import Infrastructure from './components/Infrastructure'
import Clients from './components/Clients'
import Footer from './components/Footer'
import Contact from './components/Contact'



export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Products/>
      <Quality/>
      <Machinery/>
      <Infrastructure/>
      <Clients/>
      <Contact/>
      <Footer/>
    </main>
  )
}
