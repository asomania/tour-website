const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          Sirket
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor03"
          aria-controls="navbarColor03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor03">
          <ul class="navbar-nav me-auto deneme">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Anasayfa
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Turlar
              </a>
              <ul class="dropdown-menu shadow">
                <li class="dropend">
                  <a
                    href="#"
                    class="dropdown-item dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    Eğlence turları
                  </a>
                  <ul class="dropdown-menu shadow">
                    <li>
                      <a class="dropdown-item" href="">
                        Bot Turu
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Safari
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Night Club Turu
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Atv - Off Road
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        Green Canyon
                      </a>
                    </li>{" "}
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Spadere Canyon
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Tazı Canyon
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Alanya Teleferik
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Mehtap Turu
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Gece Köpük Partisi Tekne Turu
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        AquaPark
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="dropend">
                  <a
                    href="#"
                    class="dropdown-item dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    Şehir Turları
                  </a>
                  <ul class="dropdown-menu shadow">
                    <li>
                      <a class="dropdown-item" href="">
                        İstanbul Turu
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Kapadokya Turu
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Pamukkale Turu
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Kıbrıs Turu
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="dropend">
                  <a
                    href="#"
                    class="dropdown-item dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                  >
                    Aktiviteler
                  </a>
                  <ul class="dropdown-menu shadow">
                    <li>
                      <a class="dropdown-item" href="">
                        Yamaç Paraşütü
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Deniz Paraşütü
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Rafting
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Jetski
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Su Kaydırağı
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Snorkel ile Dalış Turu
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Tüplü Dalış
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        At Binme
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Zipline
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Yunuslar ile Yüzme
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
