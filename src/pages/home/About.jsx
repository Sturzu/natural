const About = () => {
  return (
    <div id="about" className="wrapper mt-[70px] lg:mt-[150px]">
      <div className="contain lg:flex-row flex-col text-center lg:text-left justify-between items-center gap-10">
        <div className="flex justify-start items-center lg:items-start flex-col gap-3 max-w-[600px]">
          <h3 className="title uppercase">Despre noi</h3>
          <p className="text-white text-sm sm:text-base xl:text-lg font-normal">
            Hrănește-ți corpul și sufletul cu alimentele noastre 100% naturale, de o prospețime
            excepțională, care păstrează intactă aroma autentică a produselor noastre. De la ferma noastră
            puteți achiziționa o gamă largă de produse, atât de origine animală, cât și de origine vegetală.
            Noi ne dorim să încurajăm consumul de produse bio și să creăm o comunitate plină de oameni care 
            vor să susțină fermierii români și un stil de viață sănătos.
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/17238967/pexels-photo-17238967/free-photo-of-ferma.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="w-full max-w-[500px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;
