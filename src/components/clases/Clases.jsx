import { CableCar, Castle, MountainSnow } from "lucide-react";
import "./classes.css";
export const Clases = () => {
  return (
    <>
      <div className="container bg-white py-4 mt-4">
        <div className="row">
          <h4 className="">HIKING AND CAMPING</h4>
          <h3 className="">CLASSES</h3>
          <div className="rect "></div>
        </div>
      </div>
      <div className="container bg-white">
        <div className="row d-flex">


          <div
            className="col-md-4  d-flex gap-3 flex-column align-items-center py-5"
            style={{ paddingLeft: "4rem", paddingRight: "4rem" }}
          >
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
            <h5>ACTIVITIES</h5>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur a, error dolore illo
              delectus voluptatem doloremque.
            </p>
          </div>

          <div
            className="col-md-4 d-flex gap-3 flex-column align-items-center py-5"
            style={{ paddingLeft: "4rem", paddingRight: "4rem" }}
          >
            <div
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#15212b",
                height: "5rem",
                width: "5rem",
              }}
            >
              <CableCar color="cyan" size={45} />
            </div>
            <h5>HIKING</h5>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur a, error dolore illo
              delectus voluptatem doloremque.
            </p>
          </div>

          <div
            className="col-md-4  d-flex gap-3 flex-column align-items-center py-5"
            style={{ paddingLeft: "4rem", paddingRight: "4rem" }}
          >
            <div
              className="rounded-circle d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#15212b",
                height: "5rem",
                width: "5rem",
              }}
            >
              <MountainSnow color="cyan" size={45} />
            </div>
            <h5>MOUNTAINS</h5>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur a, error dolore illo
              delectus voluptatem doloremque.
            </p>
          </div>


          
        </div>
      </div>
    </>
  );
};
