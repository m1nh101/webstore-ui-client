import React, { useState } from "react";
import Logo from "../assets/img/logo.png";
import Avatar from "../assets/img/avatar.png";
import {
  MdShoppingBasket,
  MdAdd,
  MdLogout,
  MdLogin,
  MdPersonAdd,
} from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isUser, setIsUser] = useState(false);
  const [isShow, setIsShow] = useState(false);
  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </div>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 "
          >
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              <Link to={"/menu"}>Menu</Link>
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </motion.ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={Avatar}
              alt="userprofile"
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer"
              onClick={() => setIsShow(!isShow)}
            />
            {isShow ? (
              isUser ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    className="w-40 bg-primary shadow-xl rounded-lg absolute flex flex-col top-12 right-0 px-4 py-2"
                  >
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                      new item <MdAdd />
                    </p>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                      onClick={() => setIsUser(false)}
                    >
                      logout <MdLogout />
                    </p>
                  </motion.div>
                </>
              ) : (
                <>
                  <div className="w-40 bg-primary shadow-xl rounded-lg absolute flex flex-col top-12 right-0 px-4 py-2">
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
                      onClick={() => setIsUser(true)}
                    >
                      login <MdLogin />
                    </p>
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                      register <MdPersonAdd />
                    </p>
                  </div>
                </>
              )
            ) : null}
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <div className="relative flex items-center justify-center">
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-xs text-white font-semibold">2</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold"> City</p>
        </div>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            onClick={() => setIsShow(!isShow)}
            alt="userprofile"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
          >
            {isShow && (
              <>
                <ul className="flex flex-col ">
                  <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
                    Home
                  </li>
                  <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
                    Menu
                  </li>
                  <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
                    About Us
                  </li>
                  <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
                    Contact
                  </li>
                </ul>

                <p className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base">
                  Logout <MdLogout />
                </p>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
