import { Navbar } from "../navbar/Navbar"
import './hero.css'
export const Hero = () => {
  return (
    <>
    
   
    <Navbar/>
    <div className="bg-color " style={{ height: '100vh', width: '100%' ,overflow:'hidden'}}>
      <div className="container ">
          <div className="position-absolute ztop "
          style={{top:'7rem'}}>

      <h2 className="text-white" >DISCOVER YOU <br />NEXT HIKE</h2>
      <p className="text-white" >DISCOVER YOU <br />NEXT HIKE</p>
      <p className="text-white" >Lorem, ipsum. <br />Lorem ipsum dolor sit amet consectetur.</p>
          </div>
      </div>
          <div className="hclipPath-container">
            <div className="hclipPath">
              <img
                className="responsive-img"
                src="https://images.unsplash.com/photo-1523225918988-00624e6d8fee?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              
            </div>
          </div>
        </div>
        </>
  )
}