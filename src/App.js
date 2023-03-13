import { BiPhoneCall } from "react-icons/bi";

function App() {
  return (
    <>
      <div>
        <div class="card text-white bg-info">
          <div class="card-body d-flex justify-content-between">
            <div>
              <a class="nav-link" href="#">
                {" "}
                <BiPhoneCall />
                +90 (542) 000 00 00{" "}
              </a>
            </div>
            <div class="d-flex social">
              <a class="nav-link" href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a class="nav-link" href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="nav-link" href="#">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
