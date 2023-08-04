import Stripe from 'stripe';
import ProductCard from './ProductCard';

async function getStripeProducts() {
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET);
  const res = await stripe.prices.list({
    expand: ['data.product']
  })
  const products = res.data
  return products;
}

export default async function Home() {
  const products = await getStripeProducts();

  return (
    <main className="p-4 flex flex-col">
      <div className="max-w-[1000px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {
          products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        }
      </div>
    </main>
  )
}
