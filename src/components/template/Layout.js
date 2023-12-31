import { useContext } from "react";
import "../../App.css";
import { BreadcrumbsItem } from "./breadcrumb/BreadcrumbDetails";
import Header from "./header/Header";
import LeftSidePanel from "./leftsidepanel/LeftSidePanel";
import { Outlet } from "react-router-dom";
import SidebarContext from "../contexts/SidebarContext";
function Layout() {
  const {enabledSidebar} = useContext(SidebarContext);
  return (
    <div className={`layout-wrapper layout-content-navbar ${enabledSidebar ? "layout-menu-expanded" : ""}`}>
      <div className="layout-container">
        <LeftSidePanel />
        <div className="layout-page">
          <Header />
          <div className="content-wrapper">
            <div className="container-xxl mb-4">
              <BreadcrumbsItem glyph="home" to="/">
                Home
              </BreadcrumbsItem>
              <Outlet />
            </div>
            <div className="content-backdrop fade"></div>
          </div>
        </div>
      </div>
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
  );
}

export default Layout;
