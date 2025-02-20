import logo from "../images/logo.png"
import { useState } from "react"
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="index.html"><img src={logo} style={{width:'100px'}}/></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" onClick={toggleNavbar}>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div  className={` ${isOpen ? "navbar-collapse" : "navbar-collapse collapse"}`} id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="/menu">Menu</a></li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  );
};

export default Header;