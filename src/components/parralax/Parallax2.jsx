import { MountainSnow } from 'lucide-react'
import './parallax.css'
import { Button } from '../button/Button'
export const Parallel2 = () => {
  return (
<>

<section className="parallel">
    
    <div className="   "
    style={{height : '55vh'}}
    >
        <div className='container h-100'>
            <div className="row  h-100">
             <div className='col-12 text-white pt-4 ' >
               
               <div
            

               className='d-flex flex-column justify-content-center align-items-center  gap-4 w-100  h-100'>
                <h5 className='text-uppercase text-center'>THE ASANAS PURIFY OUR BOSY and <br /> Lorem ipsumor sit amet. <br />Lorem ipsum dolor sit amet.</h5>
                <MountainSnow color='cyan' size={50}/>
                <Button/>
               </div>
             </div>
            </div>
        </div>

    </div>
</section>

</>
)
}