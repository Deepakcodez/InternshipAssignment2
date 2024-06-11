
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Recover } from './components/RecoverSection/Recover'
import { Clases } from './components/clases/Clases'
import { Footer } from './components/footer/Footer'
import { Hero } from './components/hero/Hero'
import { Hills } from './components/hillssection/Hills'
import { Imagesection } from './components/img2section/Imagesection'
import { Mountaingeering } from './components/mountaingeering/Mountaingeering'
import { Parallel2 } from './components/parralax/Parallax2'
import { Parallel1 } from './components/parralax/Parallel1'
import { PlacetoVisit } from './components/placetovisit/PlacetoVisit'

function App() {

  return (
   <>
   <div 
   className=''
  //  style={{backgroundColor:'#15212b'}}
   >
<Hero/>
<Clases/>
<Hills/>
<Parallel1/>
<Recover/>
<Imagesection/>
<PlacetoVisit/>
<Mountaingeering/>
<Parallel2/>
<Footer/>
   </div>
   </>
  )
}

export default App
