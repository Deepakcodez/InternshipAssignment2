import { Menu } from "lucide-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navdimen">
      <nav className=" container navHeight d-flex justify-content-between navwidth  ">
        <div className="row h-100 navwidth">
          <ul className="list-inline d-flex gap-5  h-100 w-100  justify-content-md-start justify-content-between   align-items-end flex-wrap  navwidth ">
            {/* Logo */}
            <li className="">
              <img
                style={{ height: "2.2rem" }}
                src="public/logo.png"
                alt="logo"
              />
            </li>
            {/* Options */}
            <li className="d-md-flex gap-5 text-white font-weight-bold d-none  ">
              <span>Home</span>
              <span>Class</span>
              <span>Promo</span>
              <span>Online Class</span>
              <span>Contact</span>
            </li>
            {/* hemburger */}
            <li className="d-md-none">
              <Menu color="white" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
