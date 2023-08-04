"use client";

import Link from "next/link";
import useCart from "./(store)/store";
import Modal from "./Modal";

function Header() {
  const cartItems = useCart((state) => state.cart);
  const openModal = useCart((state) => state.openModal);
  const setOpenModal = useCart((state) => state.setOpenModal);

  return (
    <header className="sticky top-0 p-6 bg-white border-b border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex items-center justify-between">
      {openModal && <Modal />}
      <Link href="/">
        <h1 className="uppercase cursor-pointer hover:scale-110">Fruit Shop</h1>
      </Link>
      <div
        className="relative group grid place-items-center cursor-pointer"
        onClick={setOpenModal}
      >
        {cartItems.length > 0 && (
          <div className="absolute aspect-square h-5 top-0 right-0 bg-blue-400 text-white rounded-full grid place-items-center -translate-y-1/2 translate-x-1/2 pointer-events-none">
            <p className="text-xs sm:text-sm">{cartItems.length}</p>
          </div>
        )}
        <i className="fa-solid fa-cart-shopping cursor-pointer group-hover:text-slate-500"></i>
      </div>
    </header>
  );
}
export default Header;
