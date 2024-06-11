export const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* section 1 */}
          <div className="col-md-6">
            <div className="d-flex flex-column py-5">
              <h4>ABOUT</h4>
              <p className="pe-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, porro voluptatem. Beatae libero rem a! Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Neque explicabo
                omnis ullam!
              </p>
              <img
                className="mt-3"
                style={{ width: "12rem" }}
                src="./../../../public/logo.png"
                alt=""
              />
            </div>
          </div>
          {/* section 2 */}
          <div className="col-md-6 pb-3">
            <div className=" h-100 d-flex flex-column justify-content-end ">
              <div className="row">
                <div className="col-3">
                  <div className="h-100 d-flex flex-column justify-content-end gap-4">
                    <h5>ABOUT</h5>
                    <div className="h-100 d-flex flex-column gap-1">
                      <span>Team</span>
                      <span>Join</span>
                      <span>Ethics</span>
                      <span>Goals</span>
                    </div>
                  </div>
                </div>

                <div className="col-3">
                  <div className="h-100 d-flex flex-column justify-content-end gap-4">
                    <h5>ABOUT</h5>
                    <div className="h-100 d-flex flex-column gap-1">
                      <span>Team</span>
                      <span>Join</span>
                      <span>Ethics</span>
                      <span>Goals</span>
                    </div>
                  </div>
                </div>

                <div className="col-3">
                  <div className="h-100 d-flex flex-column justify-content-end gap-4">
                    <h5>ABOUT</h5>
                    <div className="h-100 d-flex flex-column gap-1">
                      <span>Team</span>
                      <span>Join</span>
                      <span>Ethics</span>
                      <span>Goals</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
