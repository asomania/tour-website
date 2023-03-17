import { BiPhoneCall } from "react-icons/bi";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import TRFlag from "../images/turkey.png";
import UKFlag from "../images/united-kingdom.png";
import RUSFlag from "../images/russia.png";
import "./style/Header.css";

const Header = () => {
  return (
    <>
      <div class="card text-white bg-info bordercard headerr">
        <div class="card-body  d-flex justify-content-between align-items-center row">
          <div class="col-6">
            <a class="nav-link " href="#">
              <BiPhoneCall /> +90 (542) 000 00 00
            </a>
            <div class="d-flex social">
              <a class="nav-link" href="#">
                <FiFacebook />
              </a>
              <a class="nav-link" href="#">
                <FiTwitter />
              </a>
              <a class="nav-link" href="#">
                <FiInstagram />
              </a>
            </div>
          </div>
          <div class="col-6">
            <div
              class="d-flex  justify-content-end align-items-center flag"
              style={{ gap: "10px" }}
            >
              <a class="nav-link" href="#">
                <img
                  class="img-fluid"
                  src={TRFlag}
                  alt="TRFlag"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
              <a class="nav-link" href="#">
                <img
                  class="img-fluid "
                  src={UKFlag}
                  alt="TRFlag"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
              <a class="nav-link" href="#">
                <img
                  class="img-fluid"
                  src={RUSFlag}
                  alt="TRFlag"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
