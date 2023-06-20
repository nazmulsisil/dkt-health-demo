import { Link, useLocation } from "react-router-dom";
import "../../pages/homepage/homepage.css";


const CustomLayout = ({ children }) => {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");
  return (
      <div>
          <header
              style={{
                  display: "flex",
                  alignItems: "center",
                  background: "#c9f5f4",
                  height: 64,
                  padding: "0px 50px"
              }}
          >
              <div className="container-fluid">
                  <div
                      className="d-flex align-items-center justify-content-between"
                      style={{ width: "100%" }}
                  >
                      <Link
                          to="/"
                          style={{
                              fontSize: "32px",
                              color: "#024550",
                              fontWeight: "600",
                              textDecoration: "none",
                          }}
                      >
                          dktHealth
                      </Link>
                          <div className="d-flex align-items-center">
                                <ul className="navbar-nav d-flex flex-row">
                                    <li className="nav-item">
                                        <h4 style={{ color: "#024550", marginRight: "8px" }}>Juan Dela Cruz</h4>         
                                    </li>
                                    <li className="nav-item">
                                    <a class="nav-link" style={{
                                        padding: "10px",
                                        borderRadius: 100,
                                        background: "#bdc3c7",
                                        opacity: 0.5
                                    }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                                        </svg>

                                    </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Sync Report</a></li>
                                            <li><a class="dropdown-item" href="#">Settings</a></li>
                                            <li><a class="dropdown-item" href="#">Sign out</a></li>
                                        </ul>
                                    </li>
                                </ul>
                          </div>
                      {/* </div> */}
                  </div>
              </div>
          </header>
          <div
              style={{
                  padding: "0",
                  margin: 0,
                  // height: "80vh",
                  overflowY: "scroll",
              }}
          >
              <div>{children}</div>
          </div>
          <footer
              style={{
                  textAlign: "center",
                  background: "#c9f5f4",
                  margin: 0,
                  padding: "12px",
                  position: "fixed",
                  bottom: 0,
                  width: "100%",
                  overflowX: "hidden",
              }}
          >
              <div className="row">
                  <div className="col social-icons">
                      <Link
                          to="/"
                          style={
                              splitLocation[1] === ""
                                  ? {
                                        color: "rgb(3, 70, 72)",
                                        fontWeight: "700",
                                    }
                                  : {}
                          }
                      >
                          <i className="fa-solid fa-tachograph-digital"></i>
                          <p style={{ fontSize: "1rem", whiteSpace: "nowrap" }}>
                              DASHBOARD
                          </p>
                      </Link>
                  </div>
                  <div className="col social-icons">
                      <Link
                          to="/md-list"
                          style={
                              splitLocation[1] === "md-list"
                                  ? {
                                        color: "rgb(3, 70, 72)",
                                        fontWeight: "700",
                                    }
                                  : {}
                          }
                      >
                          <i className="fa-solid fa-user-doctor"></i>
                          <p style={{ fontSize: "1rem", whiteSpace: "nowrap" }}>
                              MD LIST
                          </p>
                      </Link>
                  </div>
                  <div className="col social-icons">
                      <Link to="#">
                          <i className="fa-solid fa-file-signature"></i>
                          <p style={{ fontSize: "1rem", whiteSpace: "nowrap" }}>
                              QUICKSIGN
                          </p>
                      </Link>
                  </div>
                  <div className="col social-icons">
                      <Link to="#">
                          <i className="fa-solid fa-boxes-stacked"></i>
                          <p style={{ fontSize: "1rem", whiteSpace: "nowrap" }}>
                              PROMO MATS
                          </p>
                      </Link>
                  </div>
                  <div className="col social-icons">
                      <Link to="#">
                          <i className="fa-solid fa-calendar-days"></i>
                          <p style={{ fontSize: "1rem", whiteSpace: "nowrap" }}>
                              OUT-OF-FIELD
                          </p>
                      </Link>
                  </div>
              </div>
          </footer>
      </div>
  );
};

export default CustomLayout;
