import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="wrapper bg-secondary py-8 mt-16 ">
      <div className="contain sm:flex-row flex-col justify-between items-start gap-8 sm:gap-5">
        <div className="flex justify-start items-start flex-col gap-3">
          <Link className="font-black text-accent text-3xl">Natural</Link>
          <p className="text-white text-sm">©Copyright Natural 2023</p>
        </div>
        <div className="flex justify-start items-start gap-10 sm:gap-16">
          <div className="flex justify-start items-start flex-col gap-2">
            <h4 className="text-white font-semibold text-lg">Acasă</h4>
            <a href="#best" className="text-base font-normal text-accent">
              Cele mai bune produse
            </a>
            <a href="#about" className="text-base font-normal text-accent">
              Despre noi
            </a>
            <a href="#all" className="text-base font-normal text-accent">
              Toate produsele
            </a>
            <a href="#contact" className="text-base font-normal text-accent">
              Contactează-ne
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
