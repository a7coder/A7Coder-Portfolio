import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
   <div className="container">
     <div className="loader close" id="loader"></div>
      <Nav />
      <main>
       
        {children}</main>
      <Footer />
      </div>
  );
}
