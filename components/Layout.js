import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
   <div className="container">
      <Nav />
      <main>{children}</main>
      <Footer />
      </div>
  );
}
