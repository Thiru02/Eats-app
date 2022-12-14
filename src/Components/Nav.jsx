import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { AiFillTag } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div
          className="cursor-pointer"
          onClick={() => {
            setMenuOpen(true);
          }}
        >
          <AiOutlineMenu size={25} className="flex items-center" />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold"> Eats </span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          type="text"
          placeholder="Search for foods"
          className="bg-transparent p-2 w-full focus:outline-none"
        ></input>
      </div>

      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      )}

      {/* Side drawer menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300">
          <div
            className="absolute right-4 top-4 hover:cursor-pointer hover:bg-black hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            <AiOutlineClose size={30} />
          </div>

          <div className="text-2xl p-4">
            Best <span className="font-bold">Eats</span>
          </div>
          <ul className="flex flex-col p-4 text-gray-800 hover:cursor-pointer">
            <li className="text-xl py-4 flex hover:bg-black hover:text-white">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex hover:bg-black hover:text-white">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex hover:bg-black hover:text-white">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex hover:bg-black hover:text-white">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex hover:bg-black hover:text-white">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex hover:bg-black hover:text-white">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex hover:bg-black hover:text-white">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
