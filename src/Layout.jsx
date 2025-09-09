import { Outlet, Link } from "react-router";
// import Translate from "./components/Translate"

function Layout() {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>

      {/* Render the current route inside the layout */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;