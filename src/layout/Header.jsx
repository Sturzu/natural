import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { auth } from "../firebase/firebase";

const Header = ({ loggedIn }) => {
  const { items } = useSelector((state) => state.cart);
  const [headerBg, setHeaderBg] = useState(false);
  const [headerToggle, setHeaderToggle] = useState(false);
  useEffect(() => {
    const scrollBgFunc = () => {
      if (window.scrollY > 0) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    };
    window.addEventListener("scroll", scrollBgFunc);
    return () => {
      window.removeEventListener("scroll", scrollBgFunc);
    };
  }, []);

  return (
    <header
      className={`${
        headerBg
          ? "bg-body border-b-2 border-solid border-accent"
          : "bg-transparent"
      } wrapper py-4 fixed left-0 top-0 transition-all z-50  duration-300`}
    >
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="fixed lg:hidden block top-0 left-0 w-full h-full bg-black bg-opacity-70 z-[60]"
        ></div>
      )}
      <div className="contain justify-between items-center gap-4">
        <div className="flex justify-start items-center gap-10">
          <Link to="/" className="font-black text-accent text-3xl">
            NATURAL
          </Link>
          <nav
            className={`flex justify-start items-center  sm:items-start lg:items-center gap-6 lg:gap-4 lg:static fixed top-0 transition-all duration-700 ${
              headerToggle ? "right-0" : "-right-full"
            } z-[90] lg:flex-row flex-col w-full h-full overflow-y-auto sm:max-w-[450px] bg-secondary pt-[6rem] px-[3rem] pb-[3rem] lg:w-auto lg:h-auto lg:p-0 lg:bg-transparent lg:overflow-visible lg:max-w-none `}
          >
            <HashLink
              onClick={() => setHeaderToggle(false)}
              to="/#best"
              smooth
              className="text-lg lg:text-base font-medium text-primary"
            >
              Cele mai bune produse
            </HashLink>
            <HashLink
              onClick={() => setHeaderToggle(false)}
              to="/#about"
              smooth
              className="text-lg lg:text-base font-medium text-primary"
            >
              Despre noi
            </HashLink>
            <HashLink
              onClick={() => setHeaderToggle(false)}
              to="/#all"
              smooth
              className="text-lg lg:text-base font-medium text-primary"
            >
              Toate produsele
            </HashLink>
            <HashLink
              onClick={() => setHeaderToggle(false)}
              to="/#contact"
              smooth
              className="text-lg lg:text-base font-medium text-primary"
            >
              Contactează-ne
            </HashLink>
            {loggedIn ? (
              <div className="flex flex-col sm:hidden justify-start items-center gap-2">
                <h4 className="text-white font-semibold text-lg">
                  {loggedIn.name}
                </h4>
                <button
                  className="bg-secondary  border-secondary outline outline-1 outline-white text-white px-3 py-1 rounded-md hover:bg-transparent border-2 border-solid transition-all duration-300 text-lg font-medium"
                  onClick={() => signOut(auth)}
                >
                  Deconectare
                </button>
              </div>
            ) : (
              <Link
                onClick={() => setHeaderToggle(false)}
                to="/login"
                className="bg-secondary sm:hidden block border-secondary outline outline-1 outline-white text-white px-7 py-1 rounded-md hover:bg-transparent border-2 border-solid transition-all duration-300 text-lg font-medium"
              >
                Conectează-te
              </Link>
            )}
          </nav>
        </div>
        <div className="flex  justify-center items-center gap-4">
          <Link to="/cart" className="relative">
            <p className="text-white text-xs font-bold grid place-items-center bg-secondary rounded-full w-6 aspect-square absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
              {items.length}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-8 h-8 cursor-pointer"
            >
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
          </Link>

          {loggedIn ? (
            <div className="hidden sm:flex justify-start items-center gap-2">
              <h4 className="text-white font-semibold text-lg">
                {loggedIn.name}
              </h4>
              <button
                className="bg-secondary sm:block hidden border-secondary outline outline-1 outline-white text-white px-3 py-1 rounded-md hover:bg-transparent border-2 border-solid transition-all duration-300 text-lg font-medium"
                onClick={() => signOut(auth)}
              >
                Deconectare
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-secondary sm:block hidden border-secondary outline outline-1 outline-white text-white px-7 py-1 rounded-md hover:bg-transparent border-2 border-solid transition-all duration-300 text-lg font-medium"
            >
              Conectează-te
            </Link>
          )}
          <button
            onClick={() => setHeaderToggle((prev) => !prev)}
            className="lg:hidden block relative z-[100] text-white"
          >
            {headerToggle ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
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
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
