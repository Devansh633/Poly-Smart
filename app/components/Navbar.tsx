'use client'
import { Link } from "react-scroll";
import React from 'react'

export interface INavbarProps {

}
const Navbar:React.FunctionComponent<INavbarProps> = () => {
  return (
    <div className='sticky top-0 z-10'>
      <div className="navbar bg-[#0B0C10] py-0">
        <div className="navbar-start lg:w-[30%] lg:pl-[2rem]">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-[#f7f8fa] bg-black">
              <li><div className="hover:text-[#f7f8fa]"><Link to="about" spy={true} smooth={true} exact='true' offset={-55} duration={500}>About Us</Link></div></li>
              <li><div className="hover:text-[#f7f8fa]"><Link to="products" spy={true} smooth={true} exact='true' offset={-55} duration={500}>Products</Link></div></li>
              <li><div className="hover:text-[#f7f8fa]"><Link to="quality" spy={true} smooth={true} exact='true' offset={-55} duration={500}>Quality</Link></div></li>
              <li><div className="hover:text-[#f7f8fa]"><Link to="machinery" spy={true} smooth={true} exact='true' offset={-55} duration={500}>Machinery</Link></div></li>
              <li><div className="hover:text-[#f7f8fa]"><Link to="infrastructure" spy={true} smooth={true} exact='true' offset={-55} duration={500}>Infrastructure</Link></div></li>
              <li><div className="hover:text-[#f7f8fa]"><Link to="clients" spy={true} smooth={true} exact='true' offset={-55} duration={500}>Clients</Link></div></li>
              <li><div className="hover:text-[#f7f8fa]"><Link to="contact" spy={true} smooth={true} exact='true' offset={-55} duration={500}>Contact</Link></div></li>
            </ul>
          </div>
          <button className="text-[#f7f8fa]">
          <Link to="hero" spy={true} smooth={true} exact='true' offset={-80} duration={500}><img src="/images/logo.png" alt="" className="md:w-[5rem] w-[4rem] "/></Link>
          </button>
        </div>
        <div className=" lg:flex hidden">
          <ul className="menu menu-horizontal px-1 text-[#f7f8fa] py-0">
              <li><div className="hover:text-[#f7f8fa] p-0"><Link activeClass="active" activeStyle={{ borderBottom:"3px solid #01bf71" }} to="about" spy={true} smooth={true} exact='true' offset={-55} duration={500}><p className="p-[1rem]">About Us</p></Link></div></li>
              <li><div className="hover:text-[#f7f8fa] p-0"><Link activeClass="active" activeStyle={{ borderBottom:"3px solid #01bf71" }} to="products" spy={true} smooth={true} exact='true' offset={-55} duration={500}><p className="p-[1rem]">Products</p></Link></div></li>
              <li><div className="hover:text-[#f7f8fa] p-0"><Link activeClass="active" activeStyle={{ borderBottom:"3px solid #01bf71" }} to="quality" spy={true} smooth={true} exact='true' offset={-55} duration={500}><p className="p-[1rem]">Quality</p></Link></div></li>
              <li><div className="hover:text-[#f7f8fa] p-0"><Link activeClass="active" activeStyle={{ borderBottom:"3px solid #01bf71" }} to="machinery" spy={true} smooth={true} exact='true' offset={-55} duration={500}><p className="p-[1rem]">Machinery</p></Link></div></li>
              <li><div className="hover:text-[#f7f8fa] p-0"><Link activeClass="active" activeStyle={{ borderBottom:"3px solid #01bf71" }} to="infrastructure" spy={true} smooth={true} exact='true' offset={-55} duration={500}><p className="p-[1rem]">Infrastructure</p></Link></div></li>
              <li><div className="hover:text-[#f7f8fa] p-0"><Link activeClass="active" activeStyle={{ borderBottom:"3px solid #01bf71" }} to="clients" spy={true} smooth={true} exact='true' offset={-55} duration={500}><p className="p-[1rem]">Clients</p></Link></div></li>
              <li><div className="hover:text-[#f7f8fa] p-0"><Link activeClass="active" activeStyle={{ borderBottom:"3px solid #01bf71" }} to="contact" spy={true} smooth={true} exact='true' offset={-55} duration={500}><p className="p-[1rem]">Contact</p></Link></div></li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Navbar