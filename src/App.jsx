import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Index";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Login from "./pages/login/Index";
import SignUp from "./pages/register/Index";
import Cart from "./pages/cart/Index";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import Checkout from "./pages/checkout/Index";

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        setUserLoggedIn({ name: docSnap.data().name });
      } else {
        setUserLoggedIn(false);
      }
    });
  }, []);

  return (
    <div className="flex justify-start items-center flex-col min-h-screen">
      <Toaster />
      <Header loggedIn={userLoggedIn} />
      <main className="w-full">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<Login />} path="/login" />
          <Route element={<SignUp />} path="/sign-up" />
          <Route element={<Checkout />} path="/checkout" />
        </Routes>
      </main>
      <div className="mt-auto w-full">
        <Footer />
      </div>
    </div>
  );
};

export default App;