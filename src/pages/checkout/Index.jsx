import { useEffect, useState } from "react";
import InputField from "../../component/InputField";
import TextArea from "../../component/TextArea";
import { toast } from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAllItems } from "../../redux/cartSlice";

const Checkout = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    instructions: "",
  });

  const formHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(removeAllItems());
    setTimeout(() => {
      navigate("/");
    }, 4000);
    const { name, email, phone, instructions, address } = formData;
    if ((name === "" || email === "", phone === "", address === ""))
      return toast.error("Fill the form correctly");
    const FINAL__PRICE = items.reduce((acc, elem) => {
      const totalCostOfItem = elem.price * parseInt(elem.quantity);
      return (acc += totalCostOfItem);
    }, 0);
    const res = await addDoc(collection(db, "orders"), {
      name,
      email,
      phone,
      address,
      instructions,
      order: items.map((elem) => {
        return {
          name: elem.name,
          price: elem.price,
          quantity: elem.quantity,
          id: elem.id,
          img: elem.img,
        };
      }),
      total__price__of__order: FINAL__PRICE + 5,
    });
    if (res) {
      toast.success("Order Placed, Thank you");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        instructions: "",
      });
    } else {
      toast.error("Error");
    }
  };

  //if cart is empty return to main page
  useEffect(() => {
    if (items.length <= 0) {
      navigate("/");
    }
  }, []);

  return (
    <div className="wrapper mt-[70px] lg:mt-[110px]">
      <div className="contain justify-start items-center flex-col gap-5">
        <h3 className="title uppercase">Checkout</h3>
        <form
          onSubmit={submitHandler}
          className="flex  max-w-[600px] justify-start items-center flex-col w-full gap-5"
        >
          <InputField
            handler={formHandler}
            value={formData.name}
            name="name"
            placeholder="John Doe"
            label="Name*"
          />
          <InputField
            handler={formHandler}
            value={formData.email}
            name="email"
            placeholder="xyz@gmail.com"
            label="Email*"
          />
          <InputField
            handler={formHandler}
            value={formData.phone}
            name="phone"
            placeholder="1234"
            label="Phone*"
          />
          <InputField
            handler={formHandler}
            value={formData.address}
            name="address"
            placeholder="Address"
            label="Address*"
          />
          <TextArea
            handler={formHandler}
            value={formData.instructions}
            name="instructions"
            placeholder="Any special instructions (Optional)"
            label="Special Instructions"
          />
          <button className="text-white bg-primary hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-transparent border-2 border-solid border-primary transition-all duration-300 dark:focus:ring-primary">
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
