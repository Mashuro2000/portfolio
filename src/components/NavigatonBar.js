import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export const NavigationBar = (props) => {
   const [activateLink, setActiveLink] = useState('home');
   const [scrolled, seScrolled] = useState(false);

   useEffect(() => {
      const onScroll = () => {
         if (window.scrollY > 50) 
         {
            seScrolled(true)
         } 
         else 
         {
            seScrolled(false)
         }
      }
      
      window.addEventListener("scroll", onScroll)

      return () => window.removeEventListener("scroll", onScroll)
   }, [])

   const onUpdateActiveLink = (value) => {
      setActiveLink(value);
   }

   return (
      <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
         <Container>
            <Navbar.Brand href="#home">
               <img src={''} alt="Logo"/>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" >
               <span className='navbar-toggler-icon'/>   
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">

                  <Nav.Link 
                     href="#home" 
                     className={activateLink === "home" ? "active navbar-link" : "navbar-link"} 
                     onClick={() => onUpdateActiveLink("home")}>
                        Home
                  </Nav.Link>

                  <Nav.Link href="#skills" className={activateLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                  <Nav.Link href="#projects" className={activateLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Projects</Nav.Link>
               </Nav>

               <span className='navbar-text'>
                   <div className='social-icon'>
                     {/* <a href='#'><img src={} alt=''/></a>
                     <a href='#'><img src={} alt=''/></a>
                     <a href='#'><img src={} alt=''/></a> */}
                  </div> 
                  <button className='vvd' onClick={() => console.log('connect')}><span>Lets Connect!</span></button>
               </span>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   )
}

export default NavigationBar