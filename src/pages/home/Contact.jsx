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
      return toast.error("Nu ai completat corect, te rugam să încerci din nou!");
    const res = await addDoc(collection(db, "contact"), {
      name,
      email,
      phone,
      msg,
    });
    if (res) {
      toast.success("Mesajul a fost trimis");
      setFormData({ name: "", email: "", phone: "", msg: "" });
    } else {
      toast.error("Eroare");
    }
  };
  return (
    <div id="contact" className="wrapper mt-[70px] lg:mt-[110px]">
      <div className="contain justify-start items-center flex-col gap-5">
        <h3 className="title uppercase">Contactează-ne</h3>
        <form
          onSubmit={submitHandler}
          className="flex  max-w-[600px] justify-start items-center flex-col w-full gap-5"
        >
          <InputField
            handler={formHandler}
            value={formData.name}
            name="name"
            placeholder="Lionel Messi"
            label="Nume*"
          />
          <InputField
            handler={formHandler}
            value={formData.email}
            name="email"
            placeholder="lionelmessi@gmail.com"
            label="Email*"
          />
          <InputField
            handler={formHandler}
            value={formData.phone}
            name="phone"
            placeholder="0123 456 789"
            label="Număr de telefon*"
          />
          <TextArea
            handler={formHandler}
            value={formData.msg}
            name="msg"
            placeholder="Scrie mesajul tău aici..."
            label="Mesajul tău"
          />
          <button className="text-white bg-primary hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-transparent border-2 border-solid border-primary transition-all duration-300 dark:focus:ring-primary">
            Trimite mesaj
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
