import React from "react";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow-md py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0 dark:text-white">Mi Tienda Online</h1>
        <ThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;