import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Logo from "../assets/images/Logo.png";

const Nav = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#000000",
            font: "18px rubik,sans-serif",
          }}
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <HashLink to="/#exercises" style={{ textDecoration: 'none', color: '#000000',font:'18px rubik,sans-serif' }}>Exercises</HashLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/aboutus" style={{ textDecoration: 'none', color: '#000000',font:'18px rubik,sans-serif' }}>About Us</Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
       
        <Link to="/menu" style={{ textDecoration: 'none', color: '#000000', font:'18px rubik,sans-serif' }}>Menu</Link>
      </Typography>
    </ul>
  );
  return (
    <>
      <Navbar className="sticky  inset-0 z-10 h-max max-w-full rounded py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex flex-row items-center justify-between text-blue-gray-900">
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              style={{ width: "52px", height: "52px" }}
            />
          </Link>
          <div className="flex flex-row items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Link to="/signup">
            <Button
              color="blue"
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block "
            >
              <span>Register</span>
            </Button>
          </Link>
            <Link to="/signin">
            <Button
              color="red"
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block "
            >
              <span>Login</span>
            </Button>
          </Link>
            
            
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Link to='/signup'>
            <Button variant="gradient" color="blue" size="sm" fullWidth className="mb-2">

              <span>Register</span>
            </Button>
          </Link>
          <Link to='/signin'>
            <Button variant="gradient" color="red" size="sm" fullWidth className="mb-2">

              <span>Sign In</span>
            </Button>
          </Link>
          
        </MobileNav>
      </Navbar>
    </>
  );
};

export default Nav;
