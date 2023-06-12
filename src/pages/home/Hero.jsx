const Hero = () => {
  return (
    <div className="flex justify-center items-center  bg-hero bg-cover bg-no-repeat h-[650px] sm:min-h-[650px] sm:h-screen relative isolate">
      <div className="bg-black bg-opacity-50 w-full left-0 h-full right-0 -z-10 absolute"></div>
      <div className="contain flex-col justify-center text-center items-center self-center">
        <div className=" w-full flex justify-start items-center flex-col gap-10 ">
          <h2 className="text-white font-bold text-5xl sm:text-8xl">NATURAL</h2>
          <a
            href="#all"
            className="bg-secondary border-secondary outline outline-1 outline-white text-white px-7 py-1 rounded-md hover:bg-transparent border-2 border-solid uppercase transition-all duration-300 text-lg font-medium grid place-items-center"
          >
            Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
