//import { ReactComponent as Logo } from "./logo.jsx";
import reactcomp from "../assets/logo.svg";
function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg gh">
    <div className="container-fluid fg">
    {/* <a className="navbar-brand df" href="#">MUNI</a> */}
    {/* <img src="https://icons8.com/icon/122643/lisp" alt="your"></img> */}
    <img
              src={reactcomp}
              className="hg"
              alt="website logo"
            />
            {/* <Logo width="30%"/> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link cd" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link cd" href="#">TOKENOMICS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link cd" aria-current="page" href="#">FEATURES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link cd" aria-current="page" href="#">ROADMAP</a>
        </li>
      </ul>
        <button className="af" type="submit"><span>CHART</span></button>
    </div>
    </div>
</nav>
  );
}

export default Navigation;