const About = () => {
  return (
    <div id="about" className="wrapper mt-[70px] lg:mt-[150px]">
      <div className="contain lg:flex-row flex-col text-center lg:text-left justify-between items-center gap-10">
        <div className="flex justify-start items-center lg:items-start flex-col gap-3 max-w-[600px]">
          <h3 className="title uppercase">About Us</h3>
          <p className="text-white text-sm sm:text-base xl:text-lg font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            pariatur cum corrupti consequuntur error eius voluptatibus beatae
            expedita consectetur sint aut dolorem, nesciunt, est provident ad!
            Dolore numquam obcaecati perspiciatis doloribus quam voluptas porro
            quibusdam suscipit natus ipsam consectetur totam veritatis, cum
            repellat sint. Quisquam mollitia voluptatum atque ratione corrupti.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
          alt=""
          className="w-full max-w-[500px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default About;
