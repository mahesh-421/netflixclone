import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";

import { checkValidDataSignUp, checkValidDataSignIn } from "../utils/validate";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

import Header from "./Header";

const SignUp = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  // if data is from signin page the send it to checkValidateDataSignIn else send the data to checkCalidateSighUp
  const handleButtonClick = () => {
    const message = isSignInForm
      ? checkValidDataSignIn(email.current.value, password.current.value)
      : checkValidDataSignUp(
          name.current.value,
          email.current.value,
          password.current.value
        );
    setErrorMessage(message);

    // if message have any thing then don't go further, and if message is null the if statement will not execute.
    if (message) return;
    // sign In Sign Up Logic

    if (!isSignInForm) {
      // Signed up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute  ">
        <img className="w-screen object-cover" src={BG_URL} alt="background" />
      </div>
      <div className="flex flex-col items-center">
        <form
          className="w-96 h-[500px] p-6 absolute bg-black bg-opacity-85 my-36 text-white flex flex-col items-center rounded-md "
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="font-bold text-3xl my-3 p-2 w-10/12 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              className="w-10/12 p-3 my-2  bg-gray-500 bg-opacity-15 border border-gray-800 rounded-md"
              ref={name}
              type="text"
              placeholder="Full Name"
            />
          )}

          <input
            className="w-10/12 p-3 my-2  bg-gray-500 bg-opacity-15 border border-gray-800 rounded-md"
            ref={email}
            type="text"
            placeholder="Email Address"
          />
          <input
            className="w-10/12 p-3 my-2   bg-gray-500 bg-opacity-15 border border-gray-800 rounded-md"
            ref={password}
            type="password"
            placeholder="Password"
          />

          <p className=" w-10/12 py-2 text-red-600 font-bold text-xl">
            {errorMessage}
          </p>

          <button
            className="w-10/12 bg-[#e50914]  py-2.5 my-4 rounded-md  hover:bg-[#cb0e17]"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          {isSignInForm ? (
            <p>
              <span className="text-gray-400">New to Netflix? </span>
              <span
                className="font-bold cursor-pointer"
                onClick={toggleSignInForm}
              >
                Sign Up now.
              </span>
            </p>
          ) : (
            <p>
              <span className="text-gray-400">Already A User? </span>
              <span
                className="font-bold cursor-pointer"
                onClick={toggleSignInForm}
              >
                Sign In now.
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
