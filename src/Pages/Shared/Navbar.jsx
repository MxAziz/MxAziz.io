import { Link } from "react-scroll";
import ThemeToggle from "../../Components/Theme/ThemeToggle";


const Navbar = () => {
  const links = (
    <>
      <li>
        <Link
          to="hero"
          smooth={true}
          duration={500}
          hashSpy={true}
          className="cursor-pointer hover:text-[#60d6f1] transition duration-300"
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
          className="cursor-pointer hover:text-[#60d6f1] transition duration-300"
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
          className="cursor-pointer hover:text-[#60d6f1] transition duration-300"
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
          className="cursor-pointer hover:text-[#60d6f1] transition duration-300"
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
          className="cursor-pointer hover:text-[#60d6f1] transition duration-200"
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto  fixed top-0 navbar md:px-12 bg-[#2E3440] dark:bg-[#384143] text-white shadow-md z-50  flex justify-center space-x-4">
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
              className="menu menu-sm bg-gray-900 dropdown-content p-8 space-y-4 font-bold rounded-box z-[1] mt-3 w-52  shadow text-lg"
            >
              {links}
            </ul>
          </div>
          <em className="btn btn-ghost text-xl md:text-2xl">
            MxAziz
          </em>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal">{links}</ul>
        </div>
        <div className=" ">
          <ThemeToggle></ThemeToggle>
          <a className="border lg:hidden ml-2 lg:ml-0 text-sm flex items-center justify-center px-4 py-2 rounded-xl  cursor-pointer hover:bg-[#01161e] hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
