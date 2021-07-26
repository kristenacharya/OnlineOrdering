function NavBar(){
    return(
      <>
      <nav className="navbar navbar-expand-lg static-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img id ="logo" src="Thuasne_logo_RGB_Web-Color.png" alt=""/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#/CreateAccount/" data-toggle="tooltip" data-placement="bottom" title="Create a New Account">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/alldata/" data-toggle="tooltip" data-placement="bottom" title="Make a Deposit">Order History</a>
              </li>         
            </ul>
          </div>
        </div>
      </nav>
      </>
    );
  }

  export default NavBar;