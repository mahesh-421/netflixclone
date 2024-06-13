import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleShowGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { LOGO, SupportedLang } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt.showGptsSearch);

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        Navigate("/project/netflixclone/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        // console.log("done1");
        Navigate("/project/netflixclone/browse");
      } else {
        // console.log("done2");
        Navigate("/project/netflixclone/");
        dispatch(removeUser());
      }
    });
    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleShowGptSearch());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="bg-gradient-to-b h-20 pt-2 md:pt-6 md:h-24 from-black to-transparent w-screen flex flex-col md:flex-row justify-between absolute z-10">
      <div className="w-full h-10 flex justify-center md:justify-start">
        <img
          className="w-[35%] lg:ml-10 md:w-2/12 absolute"
          src={LOGO}
          alt="logo"
        />
      </div>
      {user && (
        <div className="flex justify-between items-center px-6 ">
          <button
            className="w-24 md:w-28 h-6 md:mx-3 text-sm  md:font-bold text-gray-100 bg-[#e50914]  rounded-sm cursor-pointer hover:opacity-80"
            onClick={handleGptSearch}
          >
            {gptSearch ? "Home" : "GPT Search"}
          </button>
          {gptSearch && (
            <select
              className="w-24 h-6 md:mx-3 md:w-auto bg-black bg-opacity-85 text-gray-100"
              onChange={handleLanguageChange}
            >
              {SupportedLang.map((e) => (
                <option key={e.identifier} value={e.identifier}>
                  {e.name}
                </option>
              ))}
            </select>
          )}

          <img
            className=" hidden md:block w-14 h-1 p-2 my-1.5 rounded-full"
            src={user?.photoURL}
            alt="Proflie Picture"
          />
          <button
            className="w-24 h-6 md:mx-3 text-sm  md:font-bold text-gray-100 bg-[#e50914]  rounded-sm cursor-pointer hover:opacity-80"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
