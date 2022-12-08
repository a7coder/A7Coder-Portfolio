import Image from "next/image";
import Button from "./Button";
import Alink from "./Alink";
import Head from "next/head";


const toogle = (e) => {
  let x = document.getElementById("ham");
  let y = document.getElementById("close");
  let z = document.getElementById("new-nav");

  if (x.style.display === "none") {
    y.style.display = "none";
    x.style.display = "block";
    //Close Navigation

    z.classList.add("close");

    z.classList.remove("modify-nav");
  } else {
    y.style.display = "block";
    x.style.display = "none";
    //SHow Navigatgion
    z.classList.add("modify-nav");

    z.classList.remove("close");
  }
};

const handleClick = (e) => {
  // console.log("h");
  let x = document.getElementById("ham");
  let y = document.getElementById("close");
  let z = document.getElementById("new-nav");
  y.style.display = "none";
  x.style.display = "block";
  //Close Navigation
  z.classList.add("close");
};

export default function Nav({ children }) {
  return (
    <>
      <Head>
      <html lang='eng' />
        <title>Ayush Kothiyal | Full Stack & Python Developer | A7Coder</title>
        <link rel="icon" href="/Icon/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="canonical" href="https://a7coder.com" />
        <meta property="og:site_name" content="Ayush Kothiyal" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ayush Kothiyal | Full Stack & Python Developer | A7Coder"
        />
        <meta
          property="og:description"
          content="I code to Make the World Happier and I love what I do."
        />
        <meta property="og:url" content="https://a7coder.com" />
        <meta name="robots" content="index , follow"/>
      </Head>
      <nav>
        <Alink url="/" onClick={handleClick}>
          <Image
          priority={true}
            src="/Icon/logo.gif"
            width={150}
            height={150}
            alt="A7Coder's Logo"
          />
        </Alink>

        <div className="sub-nav">
          <Alink url="/projects">Projects</Alink>

          <Alink url="/#about">About Me</Alink>
          {children}
          <Button url="/contact">Say Hello</Button>
        </div>
        <div className="hamburger" onClick={toogle}>
          <Image
           priority={true}
            src="/Images/ham.png"
            width={40}
            height={40}
            alt="Sidebar"
            className="open"
            id="ham"
          />
          <Image
           priority={true}
            src="/Images/close.png"
            width={40}
            height={40}
            alt="Sidebar"
            className="close"
            id="close"
          />
        </div>
      </nav>
      <div className="close" id="new-nav">
        <Alink url="/projects" onClick={handleClick}>
          Projects
        </Alink>

        <Alink url="/#about" onClick={handleClick}>
          About Me
        </Alink>

        <Button url="/contact" onClick={handleClick}>
          Say Hello
        </Button>
      </div>
      <div className='close' id="notification"></div>
    </>
  );
}
