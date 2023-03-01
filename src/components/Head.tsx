import "../styles/App.css";
import { NavLink } from "react-router-dom";


function Head(props:any) {
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
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="p-4 new border-r border-black">
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li className="flex justify-evenly p-4 new border-r border-black">
          <a href="https://www.samfletch.sbs/" className="">
              {props.user.id}
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
          <p className="title text-black">Lorem Ipsum</p>
          {nav}
        </div>
      </nav>
    </header>
  );
}

export default Head;
