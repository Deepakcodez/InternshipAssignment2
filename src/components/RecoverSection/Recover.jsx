import { Castle } from "lucide-react";
import '../clases/classes.css'
export const Recover = () => {
  return (
    <>
    <div className="container bg-white  mt-md-5 pt-5">
        <div className="row">
          <h4 className="">HOW TO RECOVER FROM <br /> A HIKE</h4>
         
          <div className="rect "></div>
        </div>
      </div>
      <div className="container bg-white ">
        <div style={{ minHeight: "auto" ,paddingBottom:'6rem'}} className="row ">
          <div
            className="col-md-6  d-flex gap-3 flex-column align-items-start justify-content-start  "
          >
           
             
             

                <div className="d-flex flex-column mt-5 gap-3">
                  <div className="d-flex  gap-md-5 gap-2 align-items-center">
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        backgroundColor: "#15212b",
                        height: "5rem",
                        width: "5rem",
                      }}
                    >
                      <Castle color="cyan" size={45} />
                    </div>
                    <div className="lh-base mb-0">
                      <span>- Lorem ipsum .</span> <br />
                      <span>- Lorem ipsum dolor sit.</span> <br />
                      <span>- Lorem ipsum dolor .</span> <br />
                      <span>- Lorem  dolor sit.</span> <br />
                    
                     
                    </div>
                  </div>
                  <div className="d-flex gap-md-5 gap-2 align-items-center">
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        backgroundColor: "#15212b",
                        height: "5rem",
                        width: "5rem",
                      }}
                    >
                      <Castle color="cyan" size={45} />
                    </div>
                    <div className="lh-base mb-0">
                      <span>- Lorem ipsum .</span> <br />
                      <span>- Lorem ipsum dolor sit.</span> <br />
                      <span>- Lorem ipsum dolor .</span> <br />
                      <span>- Lorem  dolor sit.</span> <br />
                    
                     
                    </div>
                  </div>
                  <div className="d-flex  gap-md-5 gap-2 align-items-center">
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        backgroundColor: "#15212b",
                        height: "5rem",
                        width: "5rem",
                      }}
                    >
                      <Castle color="cyan" size={45} />
                    </div>
                    <div className="lh-base mb-0">
                      <span>- Lorem ipsum .</span> <br />
                      <span>- Lorem ipsum dolor sit.</span> <br />
                      <span>- Lorem ipsum dolor .</span> <br />
                      <span>- Lorem  dolor sit.</span> <br />
                    
                     
                    </div>
                  </div>
                </div>
            
          </div>

          {/* section 2 */}
          <div
            className="col-md-6 mt-5 mt-md-0  d-flex gap-3 flex-column align-items-center  ps-md-5 "
            // style={{ paddingLeft: "4rem", paddingRight: "4rem" }}
          >
            <img
              className="rounded-circle"
              style={{ height: "15rem", width: "15rem" }}
              src="https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img"
            />

            <div className=" w-10 mt-4">
              <h4 className="text-info">
                MAKE SURE YOUR <br />
                GEAR FITS
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
