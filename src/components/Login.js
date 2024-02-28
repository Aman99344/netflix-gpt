import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleToggleSignIn = () => {
    setIsSignForm(!isSignForm);
  };

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      name.current.value,
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Adddress"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <button
          onClick={handleButtonClick}
          className="p-4 my-4 bg-red-800  w-full rounded-lg"
        >
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-500 font-semibold">{errorMessage}</p>
        <p className="my-4 cursor-pointer" onClick={handleToggleSignIn}>
          {isSignForm
            ? "New to Netflix? Sign up now."
            : "Alredy Registed?  Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
