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
                Multilevel
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
                <li class="dropstart">
                  <a
                    href="#"
                    class="dropdown-item dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Submenu Left
                  </a>
                  <ul class="dropdown-menu shadow">
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Third level 1
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Third level 2
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Third level 3
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Third level 4
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Third level 5
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
                    Submenu Right
                  </a>
                  <ul class="dropdown-menu shadow">
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Second level 1
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Second level 2
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        {" "}
                        Second level 3
                      </a>
                    </li>
                    <li class="dropend">
                      <a
                        href="#"
                        class="dropdown-item dropdown-toggle"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                      >
                        Let's go deeper!
                      </a>
                      <ul class="dropdown-menu dropdown-submenu shadow">
                        <li>
                          <a class="dropdown-item" href="">
                            {" "}
                            Third level 1
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="">
                            {" "}
                            Third level 2
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="">
                            {" "}
                            Third level 3
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="">
                            {" "}
                            Third level 4
                          </a>
                        </li>
                        <li class="dropend">
                          <a
                            href="#"
                            class="dropdown-item dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            Still don't have enough? Go much deeper!
                          </a>
                          <ul class="dropdown-menu dropdown-submenu shadow">
                            <li>
                              <a class="dropdown-item" href="">
                                {" "}
                                Third level 1
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="">
                                {" "}
                                Third level 2
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="">
                                {" "}
                                Third level 3
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="">
                                Third level 4
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="">
                                Third level 5
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a class="dropdown-item" href="">
                        Third level 5
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
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
