import { useState } from "react";
import InputField from "../../component/InputField";
import TextArea from "../../component/TextArea";
import { toast } from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    msg: "",
  });
  const formHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const { name, email, phone, msg } = formData;
    if ((name === "" || email === "", phone === "", msg === ""))
      return toast.error("Fill the form correctly");
    const res = await addDoc(collection(db, "contact"), {
      name,
      email,
      phone,
      msg,
    });
    if (res) {
      toast.success("Message Sent");
      setFormData({ name: "", email: "", phone: "", msg: "" });
    } else {
      toast.error("Error");
    }
  };
  return (
    <div id="contact" className="wrapper mt-[70px] lg:mt-[110px]">
      <div className="contain justify-start items-center flex-col gap-5">
        <h3 className="title uppercase">Contact Us</h3>
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
          <TextArea
            handler={formHandler}
            value={formData.msg}
            name="msg"
            placeholder="Write message here..."
            label="Your Message"
          />
          <button className="text-white bg-primary hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-transparent border-2 border-solid border-primary transition-all duration-300 dark:focus:ring-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
