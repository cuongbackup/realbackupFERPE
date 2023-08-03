import { Link } from "react-router-dom";

function MenuForm() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-light">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  News
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/add">
                  Add
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <button class=" btn-outline-success" type="submit">
                <i class="fa fa-magnifying-glass"></i>
              </button>
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default MenuForm;
