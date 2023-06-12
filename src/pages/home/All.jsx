import ProductCard from "../../component/ProductCard";

const All = () => {
  return (
    <div id="all" className="wrapper mt-[70px] lg:mt-[150px]">
      <div className="contain justify-start items-center flex-col gap-5">
        <h3 className="title">ALL PRODUCTS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-3">
          <ProductCard
            img="https://images.unsplash.com/photo-1628520629937-874c5402aee7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            price={599}
            name="Mango Juice"
            id={4}
          />
          <ProductCard
            img="https://images.unsplash.com/photo-1628520629937-874c5402aee7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            price={599}
            name="Mango Juice"
            id={5}
          />
          <ProductCard
            img="https://images.unsplash.com/photo-1628520629937-874c5402aee7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            price={599}
            name="Mango Juice"
            id={6}
          />{" "}
          <ProductCard
            img="https://images.unsplash.com/photo-1628520629937-874c5402aee7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            price={599}
            name="Mango Juice"
            id={7}
          />
          <ProductCard
            img="https://images.unsplash.com/photo-1628520629937-874c5402aee7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            price={599}
            name="Mango Juice"
            id={8}
          />
          <ProductCard
            img="https://images.unsplash.com/photo-1628520629937-874c5402aee7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            price={599}
            name="Mango Juice"
            id={9}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default All;
