"use client";
import { useState } from "react";
import { Menu, X as Close, BookOpen } from "react-feather";

function MobileNavMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="fixed mx-auto bg-slate-700 h-12 w-screen flex items-center md:hidden">
      <div className="ml-2 border-solid border-white border-2 rounded">
        {isOpen ? (
          <button className="block" onClick={() => setIsOpen(!isOpen)}>
            <Close />
          </button>
        ) : (
          <button className="block" onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </button>
        )}
      </div>
      <div>
        <BookOpen />
      </div>
    </div>
  );
}

export default MobileNavMenu;
