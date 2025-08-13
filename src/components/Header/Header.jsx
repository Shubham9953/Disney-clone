import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from "react-icons/hi2";
import { HiDotsVertical, HiPlus } from "react-icons/hi";
import HeaderItem from '../HeaderItem/HeaderItem';

function Header() {
    const [toggle,setToggle]= useState(false);
     const handleToggle = () => setToggle(!toggle);
    const menu = [
        { name: 'Home', Icon: HiHome },
        { name: 'Search', Icon: HiMagnifyingGlass },
        { name: 'Watchlist', Icon: HiPlus },
        { name: 'Originals', Icon: HiStar },
        { name: 'Movies', Icon: HiPlayCircle },
        { name: 'Series', Icon: HiTv },
    ];

    return (
            <div className="w-full max-w-[2000px] mx-auto px-5 py-4 flex items-center justify-between">

      {/* LEFT: Logo + Menu */}
      <div className="flex items-center gap-8">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover flex-shrink-0" alt="Logo" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.Icon} />
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden gap-5 items-center">
          {menu.slice(0, 3).map((item) => (
            <HeaderItem key={item.name} name={''} Icon={item.Icon} />
          ))}

          {/* More Button */}
          <div className="relative">
            <div onClick={handleToggle}>
              <HeaderItem name={''} Icon={HiDotsVertical} />
            </div>

            {toggle && (
              <div className="absolute right-0 mt-3 bg-[#121212] border border-gray-700 rounded-lg shadow-lg p-4 z-50 animate-slide-down">
                {menu.slice(3).map((item) => (
                  <div key={item.name} onClick={() => setToggle(false)}>
                    <HeaderItem name={item.name} Icon={item.Icon} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT: Avatar */}
      <div className="flex-shrink-0">
        <img
          src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
          className="w-[40px] h-[40px] rounded-full cursor-pointer hover:scale-105 transition"
          alt="User Avatar"
        />
      </div>
    </div>
    );
}

export default Header;
