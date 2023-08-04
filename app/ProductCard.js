"use client"
import { useRouter } from "next/navigation";
import useCart from "./(store)/store";

function ProductCard({ product }) {
  const { id: priceId, unit_amount: cost, product: productInfo } = product;
  const { name, description } = productInfo;
  const router = useRouter();

  const setProduct = useCart(state => state.setProduct)

  function onProductClick() {
    const newProduct = {
      name,
      description,
      priceId,
      cost,
      productInfo
    }
    setProduct({ newProduct })
    router.push(`/product?priceId=${priceId}`);
  }

  return (
    <div
      className="flex flex-col shadow bg-white hover:shadow-lg cursor-pointer"
      onClick={onProductClick}
    >
      <img
        src={productInfo.images[0]}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <h3>{name}</h3>
          <p>${cost / 100}</p>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
export default ProductCard;
