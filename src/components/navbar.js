import React from "react";

const Navbar = () => {

    
    return <nav class="navbar navbar-expand-lg navbar-light bg-black">
      {/* <!-- Container wrapper --> */}
      <div class="container-fluid">
        {/* <!-- Toggle button --> */}
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars text-light"></i>
        </button>
    
        {/* <!-- Collapsible wrapper --> */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Navbar brand --> */}
          <p className="text-light m-0"><img width={30} className="logo" src="/images/letter-j.png" alt="logo" /><a href="#intro" className="ms-2 text-white nav-i">Jaganath Ezhilarasu</a></p>
          {/* <!-- Left links --> */}
          <ul class="navbar-nav me-auto ms-5 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#projects" className="text-light ms-5">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about" className="text-light ms-5">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact" className="text-light ms-5">Contact</a>
            </li>
          </ul>
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}
    
        {/* <!-- Right elements --> */}
        <div class="d-flex align-items-center">
          
        <a href="https://github.com/Jagan-03" target="_blank" rel="noreferrer"><i className="fab fa-github text-light fa-2x"></i></a>
        </div>
        {/* <!-- Right elements --> */}
      </div>
      {/* <!-- Container wrapper --> */}
    </nav>
    // <!-- Navbar -->
    // <div id="navbar" className="navbar d-flex">
    //     <div className="fixed-top p-4 d-flex align-items-center justify-content-between">
    //     <div className="d-flex">
    //         <p className="text-light"><img width={30} className="logo" src="/images/letter-j.png" alt="logo" /><a href="#intro" className="ms-2 text-white nav-i">Jaganath Ezhilarasu</a></p>
    //         <div className="nav-links ms-5">
    //             <a href="" className="ms-5">Projects</a>
    //             <a href="" className="ms-5">About</a>
    //             <a href="" className="ms-5">Contact</a>
    //         </div>
    //     </div>
    //         <a href="https://github.com/Jagan-03" target="_blank"><i className="fab fa-github text-light fa-2x"></i></a>
    //     </div>
    // </div>
}

export default Navbar;