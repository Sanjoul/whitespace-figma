import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="bg-primary w-full h-24 flex justify-between items-center ">
        <div className="ml-10">
          <Image
            src="/logo-navbar.svg"
            width={191}
            height={34}
            alt="Logo Image "
          />
        </div>
        <div className="flex items-center text gap-10 ">
          <div className="flex justify-between items-center gap-20">
            <li className="list-none text-white text-sm"> Products</li>
            <li className="list-none text-white text-sm"> Solutions</li>
            <li className="list-none text-white text-sm"> Resources</li>
            <li className="list-none text-white text-sm"> Pricing</li>
          </div>
          <div className="flex justify-between items-center gap-10 mr-10">
            <div>button 1</div>
            <div>button 2</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
