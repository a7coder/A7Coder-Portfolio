import Image from "next/image";
import Button from "./Button";
import Alink from "./Alink";

const toogle=(e)=>{
  let x= document.getElementById('ham')
  let y= document.getElementById('close')
  let z= document.getElementById('new-nav')
  // x.classList.toggle('open')
  // y.classList.toggle('close')
  if (x.style.display === "none") {
    y.style.display='none'
    x.style.display='block'
    //Close Navigation
    z.classList.add('close')

z.classList.remove('modify-nav')

  } else {
    y.style.display='block'
    x.style.display='none'
    //SHow Navigatgion

z.classList.add('modify-nav')
z.classList.remove('close')
  }
}

const handleClick=(e)=>{
  console.log('h')
  let x= document.getElementById('ham')
  let y= document.getElementById('close')
  let z= document.getElementById('new-nav')
  y.style.display='none'
  x.style.display='block'
  //Close Navigation
  z.classList.add('close')
}

export default function Nav({children}) {
  return (
    <>
    <nav>

      <Alink url='/'>
      <Image
        src="/Icon/logo.gif"
        width={150}
        height={150}
        alt="A7Coder's Logo"
      /></Alink>
     
      <div className="sub-nav">
        <Alink url="/projects">Projects</Alink>
        
        <Alink url="/#about">About Me</Alink>
        {children}
        <Button url="/contact">Say Hello</Button>
      </div>
      <div className='hamburger'  onClick={toogle}>
          <Image src='/Images/ham.png' width={40} height={40} alt='Sidebar' className='open' id="ham"/>
          <Image src='/Images/close.png' width={40} height={40} alt='Sidebar' className='close' id="close"/>
        </div>

    </nav>
        <div className="new-nav" id="new-nav">
        <Alink url="/projects" onClick={handleClick}>Projects</Alink>
        
        <Alink url="/#about" onClick={handleClick}>About Me</Alink>
        
        <Button url="/contact" onClick={handleClick}>Say Hello</Button>
      </div></>
  );
}
