import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import InputField from "../../component/InputField";
import toast from "react-hot-toast";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pwd: "",
    confirmPwd: "",
  });
  const formHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      formData.pwd !== formData.confirmPwd ||
      formData.confirmPwd === "" ||
      formData.pwd === "" ||
      formData.email === "" ||
      formData.name === ""
    )
      return toast.error("Nu ai completat corect, te rugam să încerci din nou!");
    createUserWithEmailAndPassword(auth, formData.email, formData.pwd)
      .then(async (userCredential) => {
        toast.success("Te-ai înregistrat cu succes");
        await setDoc(doc(db, "users", userCredential.user.uid), {
          name: formData.name,
          email: formData.email,
          password: formData.pwd,
        });
        setFormData({ name: "", email: "", pwd: "", confirmPwd: "" });
        navigate("/");
      })
      .catch((error) => {
        toast.error("Eroare");
      });
  };

  return (
    <div className="wrapper mt-[140px]">
      <div className="contain justify-start items-center flex-col gap-5">
        <h2 className="title uppercase">Înregistreză-te</h2>
        <form
          onSubmit={submitHandler}
          className="w-full max-w-[600px] flex justify-start items-center flex-col gap-5 mt-5"
        >
          <InputField
            handler={formHandler}
            value={formData.name}
            name="name"
            placeholder="Lionel Messi"
            label="Nume complet"
          />
          <InputField
            handler={formHandler}
            value={formData.email}
            name="email"
            placeholder="lionelmessi@gmail.com"
            label="Email"
            type="email"
          />
          <InputField
            handler={formHandler}
            value={formData.pwd}
            name="pwd"
            placeholder="Introduceți parola aici"
            label="Parolă"
            type="password"
          />
          <InputField
            handler={formHandler}
            value={formData.confirmPwd}
            name="confirmPwd"
            placeholder="Confirmă parola"
            label="Confirmă parola"
            type="password"
          />
          <button
            type="submit"
            className="text-white bg-primary hover:bg-transparent w-full mt-3 max-w-[300px]  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-transparent border-2 border-solid border-primary transition-all duration-300 dark:focus:ring-primary"
          >
            Înregistreză-te
          </button>
          <p className="text-white text-sm font-medium mt-1 ">
            Ești deja membru{" "}
            <Link to="/login" className="underline">
              conecteză-te aici
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
