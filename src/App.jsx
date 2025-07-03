
import CardSection from './components/CardSection'
import Footer from './components/Footer'
import Header from './components/header'
import Hero from './components/Hero'
import Section1 from './components/section1'
import Section2 from './components/section2'
import Map from './components/map'
import FindYourCharge from './components/map_text'
import LegalDisclaimer from './components/legalDiscliminar'
import CardSection2 from './components/CardSection2'

function App() {
  
  return (
    <>
      <Header/>
      <main className=''>
        <Hero/>
       <CardSection/>
       <Section1/>
        <Section2/>
        <Map/>   
        <FindYourCharge/> 
        <CardSection2/> 
        <LegalDisclaimer/>
        <Footer/>
        
      </main>
    </>
  )
}

export default App
