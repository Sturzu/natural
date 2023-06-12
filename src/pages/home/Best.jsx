import ProductCard from "../../component/ProductCard";

const Best = () => {
  return (
    <div id="best" className="wrapper mt-[50px]">
      <div className="contain justify-start items-center flex-col gap-5">
        <h3 className="title">BEST SELLING PRODUCTS</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-3">
          <ProductCard
            img="https://images.unsplash.com/photo-1628520629937-874c5402aee7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            price={599}
            name="Mango Juice"
            id={1}
          />
          <ProductCard
            img="https://images.unsplash.com/photo-1628520629937-874c5402aee7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            price={599}
            name="Mango Juice"
            id={2}
          />
          <ProductCard
            img="https://images.unsplash.com/photo-1628520629937-874c5402aee7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            price={599}
            name="Mango Juice"
            id={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Best;
