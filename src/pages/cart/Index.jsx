import { useDispatch, useSelector } from "react-redux";
import { increaseQuantityCart, removeItem } from "../../redux/cartSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const SHIPPING__COST = items.length > 0 ? 5 : 0;
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    if (items.length > 0) {
      setSubTotal(
        items.reduce((acc, elem) => {
          const totalCostOfItem = elem.price * parseInt(elem.quantity);
          return (acc += totalCostOfItem);
        }, 0)
      );
    }
  }, [items]);

  return (
    <div className="wrapper mt-[140px]">
      <div className="contain justify-start items-center flex-col gap-5">
        <h2 className="title uppercase">Cart</h2>
        <div className="w-full max-w-[800px] flex justify-start items-start flex-col  mt-3">
          {items.length > 0 ? (
            items.map((elem, idx) => (
              <CartItem {...elem} key={elem.id + "box" + idx} />
            ))
          ) : (
            <>
              <h4 className="text-white text-2xl text-center w-full font-semibold">
                Cart is empty
              </h4>
              <Link
                to="/"
                className="text-primary text-base w-full text-center mt-5 font-medium underline"
              >
                Continue Shopping
              </Link>
            </>
          )}
        </div>
        {items.length > 0 && (
          <>
            <div className="flex justify-start items-center flex-col p-6 w-full max-w-[600px] rounded-xl bg-gray-400">
              <div className="flex justify-between items-center w-full gap-1 py-4 border-b border-solid border-gray-800">
                <p className="text-black text-base font-normal">Subtotal</p>
                <h4 className="text-black text-base font-medium">
                  ${subTotal}
                </h4>
              </div>
              <div className="flex justify-between items-center w-full gap-1 py-4 border-b border-solid border-gray-800">
                <p className="text-black text-base font-normal">Shipping</p>
                <h4 className="text-black text-base font-medium">
                  ${SHIPPING__COST.toFixed(2)}
                </h4>
              </div>
              <div className="flex justify-between items-center w-full gap-1 py-4 border-b border-solid border-gray-800">
                <p className="text-black text-base font-normal">Order Total</p>
                <h4 className="text-black text-base font-medium">
                  ${subTotal + SHIPPING__COST}
                </h4>
              </div>
            </div>
            <Link
              to="/checkout"
              className="text-white bg-primary hover:bg-transparent w-full  max-w-[600px]  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-transparent border-2 border-solid border-primary transition-all duration-300 dark:focus:ring-primary"
            >
              Checkout
            </Link>
            <Link to="/" className="text-primary text-lg font-medium underline">
              Continue Shopping
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

const CartItem = ({ img, name, quantity, id, price, stock }) => {
  const dispatch = useDispatch();
  return (
    <div className="py-7 sm:flex-row flex-col border-t border-solid border-accent flex justify-between items-start gap-4 sm:gap-5 w-full ">
      <div className="flex justify-start sm:flex-row flex-col items-start gap-4">
        <img
          src={img}
          className="object-cover w-[150px] h-[150px] rounded-xl"
          alt=""
        />

        <h4 className="text-white text-xl font-semibold">{name}</h4>
      </div>
      <div className="flex justify-between w-full sm:w-auto sm:justify-start items-center sm:items-start flex-row sm:flex-col gap-2">
        <select
          onChange={(e) =>
            dispatch(increaseQuantityCart({ id, quantity: e.target.value }))
          }
          value={quantity}
          className="w-full sm:max-w-none max-w-[100px] px-2 bg-secondary h-[36px] rounded-md border border-solid border-accent text-white"
        >
          {Array(stock)
            .fill(false)
            .map((elem, idx) => {
              return (
                <option key={idx + id} className="text-black" value={idx + 1}>
                  {idx + 1}
                </option>
              );
            })}
        </select>
        <button
          onClick={() => dispatch(removeItem({ id }))}
          className="text-primary font-medium text-lg"
        >
          Remove
        </button>
      </div>
      <p className="text-white text-xl font-semibold ">${price.toFixed(2)}</p>
    </div>
  );
};
