import ProductCard from "../../component/ProductCard";

const All = () => {
  return (
    <div id="all" className="wrapper mt-[70px] lg:mt-[150px]">
      <div className="contain justify-start items-center flex-col gap-5">
        <h3 className="title">TOATE PRODUSELE</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-3">
          <ProductCard
            img="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            price={3}
            name="Mere roșii 1 Kg"
            id={4}
          />
          <ProductCard
            img="https://images.unsplash.com/photo-1564750497011-ead0ce4b9448?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            price={2}
            name="Prune 1 Kg"
            id={5}
          />
          <ProductCard
            img="https://images.pexels.com/photos/17239091/pexels-photo-17239091/free-photo-of-cutie-suc-5l.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            price={30}
            name="Suc mere + pere 5L"
            id={6}
          />{" "}
          <ProductCard
            img="https://images.pexels.com/photos/17239089/pexels-photo-17239089/free-photo-of-cutie-suc-3l.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            price={20}
            name="Suc mere 3L"
            id={7}
          />
          <ProductCard
            img="https://images.pexels.com/photos/17240466/pexels-photo-17240466/free-photo-of-cascaval.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            price={40}
            name="Cașcaval"
            id={8}
          />
          <ProductCard
            img="https://images.pexels.com/photos/17238923/pexels-photo-17238923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            price={25}
            name="Brânză-caș din lapte de vacă"
            id={9}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default All;
