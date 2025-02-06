import { Link } from "react-scroll";


const Navbar = () => {
  const links = (
    <>
      <li>
        <Link
          to="hero"
          smooth={true}
          duration={500}
            hashSpy={true}
          className="cursor-pointer"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={500}
          hashSpy={true}
          className="cursor-pointer"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          hashSpy={true}
          className="cursor-pointer"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          hashSpy={true}
          className="cursor-pointer"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          hashSpy={true}
          className="cursor-pointer"
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className=" fixed top-0 navbar px-12 mx-auto bg-[#2E3440] text-white shadow-md  flex justify-center space-x-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content p-8 space-y-4 font-bold rounded-box z-[1] mt-3 w-52  shadow text-lg"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl md:text-2xl">MxAziz</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end md:hidden">
          <a className="btn btn-sm">Download CV</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
