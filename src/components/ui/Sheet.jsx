import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export const Sheet = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        if (child.type === SheetTrigger) {
          return React.cloneElement(child, { toggleSheet });
        }
        if (child.type === SheetContent) {
          return React.cloneElement(child, { isOpen, toggleSheet });
        }
        return child;
      })}
    </div>
  );
};

export const SheetTrigger = ({ children, toggleSheet }) => (
  <div onClick={toggleSheet} className="cursor-pointer">
    {children}
  </div>
);

export const SheetContent = ({ isOpen, toggleSheet, children }) => (
  <div
    className={`fixed inset-0 transform ${
      isOpen ? "translate-x-0" : "translate-x-full"
    } transition-transform duration-300 ease-in-out bg-primary shadow-lg z-50`}
  >
    <div className="flex justify-end p-4">
      <button onClick={toggleSheet}>
        <AiOutlineClose className="text-2xl" />
      </button>
    </div>
    <div className="p-4">{children}</div>
  </div>
);
