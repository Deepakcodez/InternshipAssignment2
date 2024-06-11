import { EllipsisVertical } from "lucide-react"
import { Button2 } from "../button/Button2"

export const PlacetoVisit = () => {
  return (
    <>
        <div className="container py-3">
            <h4>PLACES TO VISIT <br />IN AUTUMN</h4>
            <div className="row">
                {/* card 1 */}
              <div className="col-md-4  mt-md-5 mt-3 ">
                <div className="Card  d-flex flex-column align-items-center ">
                    <img
                    className="rounded-circle"
                    style={{height:'13rem', width:'13rem'}}
                     src="https://plus.unsplash.com/premium_photo-1677288649820-a7bd079d102e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
                     <div style={{width:'70%'}}><EllipsisVertical color="cyan" /></div>
                     <h5>MOUNTAIN LOOP</h5>
                     <div className="text-center pb-2  border-bottom border-2 border-info"
                     style={{  textOverflow: 'ellipsis',  overflow: 'hidden', width:'80%' 

 
                     }}
                     >Lorem ipsum dolor sit amet. Debitis ea   iure assumenda quis nostrum!...</div>
                </div>
                <div>
                    <h6 className="text-center pt-2 " >LOCATION <span style={{color:'black'}}>0.3 miles</span></h6>
                </div>
              </div>

              <div className="col-md-4  mt-md-5 mt-3">
                <div className="Card  d-flex flex-column align-items-center ">
                    <img
                    className="rounded-circle"
                    style={{height:'13rem', width:'13rem'}}
                     src="https://plus.unsplash.com/premium_photo-1677288649820-a7bd079d102e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
                     <div  style={{width:'70%'}}><EllipsisVertical color="cyan" /></div>
                     <h5>MOUNTAIN LOOP</h5>
                     <div className="text-center pb-2  border-bottom border-2 border-info"
                     style={{  textOverflow: 'ellipsis',  overflow: 'hidden', width:'80%' 

 
                     }}
                     >Lorem ipsum dolor sit amet. Debitis ea   iure assumenda quis nostrum!...</div>
                </div>
                <div>
                    <h6 className="text-center pt-2 " >LOCATION <span style={{color:'black'}}>0.3 miles</span></h6>
                </div>
              </div>



              <div className="col-md-4 mt-md-5 mt-3 ">
                <div className="Card   d-flex flex-column align-items-center ">
                    <img
                    className="rounded-circle"
                    style={{height:'13rem', width:'13rem'}}
                     src="https://plus.unsplash.com/premium_photo-1677288649820-a7bd079d102e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
                     <div  style={{width:'70%'}}><EllipsisVertical color="cyan" /></div>
                     <h5>MOUNTAIN LOOP</h5>
                     <div className="text-center pb-2  border-bottom border-2 border-info"
                     style={{  textOverflow: 'ellipsis',  overflow: 'hidden', width:'80%' 

 
                     }}
                     >Lorem ipsum dolor sit amet. Debitis ea   iure assumenda quis nostrum!...</div>
                </div>
                <div>
                    <h6 className="text-center pt-2 " >LOCATION <span style={{color:'black'}}>0.3 miles</span></h6>
                </div>
              </div>

             
            </div>
            <div className="w-100 d-flex justify-content-center my-5">

            <Button2 />
            </div>
        </div>
    </>
  )
}