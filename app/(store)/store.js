import { create } from "zustand"

const useCart = create(
  (set, get) => ({
    cart: [],
    product: {},
    openModal: false,
    setOpenModal: () => {
      set((state) => ({
        ...state,
        openModal: !state.openModal
      }))
    },
    setProduct: (params) => {
      const { newProduct } = params;
      set((state) => ({
        ...state,
        product: newProduct
      }))
    },
    addItemToCart: (params) => {
      const { newItem } = params;
      set((state) => ({
        ...state,
        cart: [...state.cart, newItem]
      }))
    },
    removeItemFromCart: (params) => {
      const { itemIndex } = params;
      set((state) => ({
        ...state,
        cart: [...state.cart].filter(elem => elem.index !== itemIndex)
      }))
    },
    emptyCart: () => {
      set((state) => ({
        ...state,
        cart: []
      }))
    },
  })
)

export default useCart