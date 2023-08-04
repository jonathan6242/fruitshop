"use client";

import { useRouter } from "next/navigation";
import useCart from "./(store)/store";

function Modal() {
  const closeModal = useCart((state) => state.setOpenModal);
  const cartItems = useCart((state) => state.cart);
  const router = useRouter();

  async function checkOut() {
    const lineItems = cartItems.map((item) => {
      return {
        price: item.priceId,
        quantity: 1,
      };
    });
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ lineItems }),
    });
    const data = await res.json();
    router.push(data.session.url);
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50">
      <div
        className="bg-transparent absolute inset-0"
        onClick={closeModal}
      ></div>
      <div className="flex flex-col bg-white absolute right-0 top-0 h-screen shadow-lg w-screen sm:w-96 max-w-screen gap-4">
        <div className="flex items-center justify-between text-xl relative p-6">
          <h1>Cart</h1>
          <i
            className="fa-solid fa-times cursor-pointer hover:opacity-60"
            onClick={closeModal}
          ></i>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-slate-300 w-2/3"></div>
        </div>
        <div className="p-4 overflow-scroll scrollbar-hide flex-1 flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <p>There is nothing in your cart.</p>
          ) : (
            <>
              {cartItems.map((cartItem, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-2 border-l border-slate-700 px-2"
                  >
                    <div className="flex items-center justify-between text-base">
                      <h2>{cartItem.name}</h2>
                      <p>${cartItem.cost / 100}</p>
                    </div>
                    <p className="text-slate-600 text-sm">Quantity: 1</p>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div
          className="border border-slate-700 text-xl m-4 p-8 uppercase grid place-items-center hover:opacity-60 cursor-pointer"
          onClick={checkOut}
        >
          Checkout
        </div>
      </div>
    </div>
  );
}
export default Modal;
