export const Mountaingeering = () => {
  return (
    <>
    <div
    className=" text-white"
    style={{background:'#15212b',}}
    >
    <div className="container">
        <div className="row">
            {/* section 1 */}
            <div className="col-md-6 pt-5">
                 <div className="d-flex flex-column gap-5 justify-content-center align-items-center align-items-md-start  h-100">

                <img 
                className="rounded-circle  "
                style={{height:'17rem',width:'17rem',}}
                src="https://plus.unsplash.com/premium_photo-1677288650040-fa3dce8fb6ff?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
                <h5 className="text-info">WALKING IN NATURE <br />AS A RECREATIONAL <br /> ACTIVITY</h5>
                </div>
            </div>

    {/* section 2 */}
    <div
            className="col-md-6  d-flex gap-3 flex-column align-items-start justify-content-start py-5 "
            // style={{ paddingLeft: "4rem", paddingRight: "4rem" }}
          >
        
          <h2>MOUNTAINEERING <br />ICE CLIMBING</h2>
          <h4 className="pt-4">2. ACTIVITIES</h4>
          <p className="fs-6 pe--md-5 lh-lg border-bottom border-info border-3 pb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere vero excepturi que magnam saepe. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.  maxime tempore delectus?</p>
          <p className="fs-6">17 Modules <br /> divided into 5   weekends</p>
          <div className="d-flex gap-5">
            <div >
                <h5 className="fs-6">start</h5>
                <h5 className="fs-6">April 15</h5>
                <h5 className="fs-6">  20.00 hs </h5>
            </div>
            <div>
                <h5>price</h5>
                <h5>$900</h5>
               
            </div>
            
          </div>
          </div>
        </div>
    </div>
    </div>
    </>
  )
}