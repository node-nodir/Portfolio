import React from "react";

function Modal({ isVisible, onClose, children }) {
  if (!isVisible) return null;

  const handleClick = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      id="wrapper"
      onClick={handleClick}
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 duration-300"
    >
      <div
        className={`${
          isVisible ? "bottom-0" : "-bottom-[100%]"
        } w-full absolute left-0 bg-white rounded-t-2xl px-5`}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
