export function Header(div) {
  const user_is_loggedin = localStorage.getItem("loggedin_user");
  let links = "";
  let user = "Guest";
  if (user_is_loggedin == null) {
    links = `
        <a class="dropdown-item " href="../login.html">
            Login
        </a>
        <a class="dropdown-item" href="../registration.html">
          Register
        </a>
    `;
  } else {
    user = user_is_loggedin;
    links = `
      <a class="dropdown-item" href="../favorites.html">Favorites</a>
      <a class="dropdown-item" id="logout" href="#">Logout</a>
    `;
  }
  div.innerHTML = `
  <div class="container">
  <div class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="../index.html">
      Fun Website
    </a>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="../cat.html">
          Cats
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="../dog.html">
          Dogs
        </a>
      </li>
      <li class="nav-item dropdown" >
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="guestDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          ${user}
        </a>
        <div class="dropdown-menu" >
          ${links}
        </div>
      </li>
    </ul>
  </div></div>`;

  document.getElementById("logout") &&
    document.getElementById("logout").addEventListener("click", () => {
      localStorage.removeItem("loggedin_user");
      window.location.href = "http://127.0.0.1:5500/login.html";
    });
}
