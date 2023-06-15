import ProductCard from "../../component/ProductCard";

const Best = () => {
  return (
    <div id="best" className="wrapper mt-[50px]">
      <div className="contain justify-start items-center flex-col gap-5">
        <h3 className="title">CELE MAI BUNE PRODUSE</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-3">
          <ProductCard
            img="https://images.pexels.com/photos/17239091/pexels-photo-17239091/free-photo-of-cutie-suc-5l.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            price={30}
            name="Suc de mere 5L"
            id={1}
          />
          <ProductCard
            img="https://images.pexels.com/photos/17240481/pexels-photo-17240481/free-photo-of-telemea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            price={25}
            name="Telemea vacă 1 Kg"
            id={2}
          />
          <ProductCard
            img="https://images.pexels.com/photos/10994349/pexels-photo-10994349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            price={10}
            name="Lapte vacă 2L"
            id={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Best;
