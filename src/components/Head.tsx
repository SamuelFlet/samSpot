import "../styles/App.css";
import { supabase } from "../supabaseClient";
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"
import contact from "../assets/contact.svg"
import { NavLink } from "react-router-dom";


function Head(props:any) {
  async function signOut(){
    const {error} = await supabase.auth.signOut();
    window.location.reload();
  }

  const nav = (
    <nav className="flex justify-center border-t border-b border-black">
      <ul className="flex flex-row items-center">
        <li className="p-4 new border-l border-r border-black">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="p-4 new border-r border-black">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="p-4 new border-r border-black">
          <NavLink to="/login">Profile</NavLink>
        </li>
        <li className="p-4 new border-r border-black">
        <p onClick={signOut}>Sign Out</p>
        </li>
        <li className="flex justify-evenly p-4 new border-r border-black">
          <a href="https://github.com/SamuelFlet" className="">
            <img alt="Github" className="photo" src={github} />
          </a>
          <a
            href="https://www.linkedin.com/in/samuelrhfletcher/"
            className=""
          >
            <img alt="LinkedIn" className="photo" src={linkedin} />
          </a>
          <a href="https://www.samfletch.sbs/" className="">
            <img alt="Personal Website" className="photo" src={contact} />
          </a>
        </li>
      </ul>
    </nav>
  );

  return (
    <header>
      <nav aria-label="Navbar" className="">
        <div className="text-center">
          <p className="headers tracking-wide">
          </p>
          <p className="title text-black">Sam Spot</p>
          {nav}
        </div>
      </nav>
    </header>
  );
}

export default Head;
