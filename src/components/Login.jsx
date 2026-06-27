import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/81b52f88-dc76-488d-a939-0cf13a260a6e/web/IN-en-20260622-TRIFECTA-perspective_d39d60ef-cb5a-4793-9546-0a8d9a87948e_large.jpg"
          alt="Background"
        />
      </div>
      <form className="w-4/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="text-3xl font-bold py-4">
          Sign {isSignInForm ? "In" : "Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="name"
            placeholder="Full Name"
            className="w-full p-4 my-4 bg-gray-700 "
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="w-full p-4 my-4 bg-gray-700 "
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 my-4 bg-gray-700 "
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already have an account? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
