import "./imgsection.css";
export const Imagesection = () => {
  return (
    <>
      <div
        className="bg-color"
        style={{ height: "100vh", width: "100%", overflow: "hidden" }}
      >
        <div className="container">
          <div className="position-absolute py-5 ztop">
            <h2 className="text-white ">
              WALKING IN NATURE <br />
              AS A REACREATIONAL <br />ACTIVITY
            </h2>
            <h5 className="text-white  mt-3">.ACTIVITIES</h5>
            <p className="text-white">Lorem ipsum dolor sit. <br /> Lorem ipsum dolor Lorem, ipsum. sit.</p>
          </div>
        </div>

        <div className="clipPath-container">
          <div className="clipPath">
            <img
              className="responsive-img"
              src="https://images.unsplash.com/photo-1523225918988-00624e6d8fee?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
