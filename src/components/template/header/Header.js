import { Breadcrumbs } from "../breadcrumb/BreadcrumbDetails";
import { Breadcrumb as BootstrapBreadcrumb } from "react-bootstrap";
import CrumbItem from "../breadcrumb/Breadcrumb";
import ProfileImage from "../../../assets/img/avatars/1.png";
import kuralJSON from "../../../json/kural.json";
import { useState } from "react";
import SearchList from "../../SearchList";

function Header() {
  const [searchField, setSearchField] = useState("");

  const filteredKurals = kuralJSON.filter((kural) => {
    return (
        kural ? kural.Number.toString().includes(searchField) ||
        kural.Line1.toLowerCase().includes(searchField.toLowerCase()) ||
        kural.Line2.toLowerCase().includes(searchField.toLowerCase()) ||
        kural.Translation.toLowerCase().includes(searchField.toLowerCase()) ||
        kural.couplet.toLowerCase().includes(searchField.toLowerCase()) ||
        kural.explanation.toLowerCase().includes(searchField.toLowerCase()) ||
        kural.transliteration1.toLowerCase().includes(searchField.toLowerCase()) ||
        kural.transliteration2.toLowerCase().includes(searchField.toLowerCase()):""
    );
  });
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  return (
    <>
      <nav
        className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <a className="nav-item nav-link px-0 me-xl-4" href="/">
            <i className="bx bx-menu bx-sm"></i>
          </a>
        </div>

        <div
          className="navbar-nav-right d-flex align-items-center"
          id="navbar-collapse"
        >
          <div className="navbar-nav align-items-center">
            <div className="nav-item d-flex align-items-center">
              <i className="bx bx-search fs-4 lh-0"></i>
              <input
                type="text"
                className="form-control border-0 shadow-none"
                placeholder="Search..."
                aria-label="Search..."
                onChange = {handleChange}
              />
            </div>
          </div>

          <ul className="navbar-nav flex-row align-items-center ms-auto">
            <li className="nav-item lh-1 me-3">
              <a
                className="github-button"
                href="https://github.com/themeselection/sneat-html-admin-template-free"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
              >
                Star
              </a>
            </li>

            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <a
                className="nav-link dropdown-toggle hide-arrow"
                href="/"
                data-bs-toggle="dropdown"
              >
                <div className="avatar avatar-online">
                  <img
                    src={ProfileImage}
                    alt="profile image"
                    className="w-px-40 h-auto rounded-circle"
                  />
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar avatar-online">
                          <img
                            src={ProfileImage}
                            alt
                            className="w-px-40 h-auto rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <span className="fw-semibold d-block">John Doe</span>
                        <small className="text-muted">Admin</small>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-user me-2"></i>
                    <span className="align-middle">My Profile</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bx bx-cog me-2"></i>
                    <span className="align-middle">Settings</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="d-flex align-items-center align-middle">
                      <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                      <span className="flex-grow-1 align-middle">Billing</span>
                      <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
                        4
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <a className="dropdown-item" href="auth-login-basic.html">
                    <i className="bx bx-power-off me-2"></i>
                    <span className="align-middle">Log Out</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container-xxl flex-grow-1 container-p-y">
        <Breadcrumbs
          item={CrumbItem}
          container={BootstrapBreadcrumb}
          duplicateProps={{ to: "href" }}
        />
      </div>
      {searchField && <SearchList kural={filteredKurals}/>}
    </>
  );
}
export default Header;
