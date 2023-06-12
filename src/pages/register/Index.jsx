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
      return toast.error("Please fill the form correctly");
    createUserWithEmailAndPassword(auth, formData.email, formData.pwd)
      .then(async (userCredential) => {
        toast.success("Registered");
        await setDoc(doc(db, "users", userCredential.user.uid), {
          name: formData.name,
          email: formData.email,
          password: formData.pwd,
        });
        setFormData({ name: "", email: "", pwd: "", confirmPwd: "" });
        navigate("/");
      })
      .catch((error) => {
        toast.error("Error");
      });
  };

  return (
    <div className="wrapper mt-[140px]">
      <div className="contain justify-start items-center flex-col gap-5">
        <h2 className="title uppercase">Sign Up</h2>
        <form
          onSubmit={submitHandler}
          className="w-full max-w-[600px] flex justify-start items-center flex-col gap-5 mt-5"
        >
          <InputField
            handler={formHandler}
            value={formData.name}
            name="name"
            placeholder="John Doe"
            label="Full Name"
          />
          <InputField
            handler={formHandler}
            value={formData.email}
            name="email"
            placeholder="xyz@gmail.com"
            label="Email"
            type="email"
          />
          <InputField
            handler={formHandler}
            value={formData.pwd}
            name="pwd"
            placeholder="Password here"
            label="Password"
            type="password"
          />
          <InputField
            handler={formHandler}
            value={formData.confirmPwd}
            name="confirmPwd"
            placeholder="Confirm Password"
            label="Confirm Password"
            type="password"
          />
          <button
            type="submit"
            className="text-white bg-primary hover:bg-transparent w-full mt-3 max-w-[300px]  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-transparent border-2 border-solid border-primary transition-all duration-300 dark:focus:ring-primary"
          >
            Sign Up
          </button>
          <p className="text-white text-sm font-medium mt-1 ">
            Already a member{" "}
            <Link to="/login" className="underline">
              login here
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
