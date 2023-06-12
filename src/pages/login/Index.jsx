import { Link, useNavigate } from "react-router-dom";
import InputField from "../../component/InputField";
import { useState } from "react";
import { auth } from "../../firebase/firebase";
import { toast } from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pwd: "",
    email: "",
  });
  const formHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.pwd === "" || formData.email === "")
      return toast.error("Please fill the form correctly");
    signInWithEmailAndPassword(auth, formData.email, formData.pwd)
      .then((user) => {
        toast.success("Logged In");
        setFormData({ pwd: "", email: "" });
        navigate("/");
      })
      .catch((error) => {
        toast.error("Error");
      });
  };
  return (
    <div className="wrapper mt-[140px]">
      <div className="contain justify-start items-center flex-col gap-5">
        <h2 className="title uppercase">Login</h2>
        <form
          onSubmit={submitHandler}
          className="w-full max-w-[600px] flex justify-start items-center flex-col gap-5 mt-5"
        >
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
          <button
            type="submit"
            className="text-white bg-primary hover:bg-transparent w-full mt-3 max-w-[300px]  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-transparent border-2 border-solid border-primary transition-all duration-300 dark:focus:ring-primary"
          >
            Login
          </button>
          <p className="text-white text-sm font-medium mt-1 ">
            Not a member{" "}
            <Link to="/sign-up" className="underline">
              sign up here
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
