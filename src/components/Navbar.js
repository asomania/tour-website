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
                Tours
              </a>
              <ul class="dropdown-menu shadow">
                <li>
                  <a class="dropdown-item" href="#">
                    Gallery
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="blog.html">
                    Blog
                  </a>
                </li>
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
                        {" "}
                        Safari 1
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Atw 2
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Tekne Turu 3
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
