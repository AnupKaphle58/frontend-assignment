"use client"

import ProductCard from '@/app/components/Product/ProductCard'


const getProducts = async() => {
  const res = await fetch('https://dummyjson.com/products')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Home = async() => {
  const products = await getProducts()

  return (
    <main className='pt-12 flex flex-col'>
      <div className='mx-auto text-3xl font-bold text-slate-900'>All Products</div>
      <div className='w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {products.products.map((product:any) => {
          return (
            <ProductCard {...product} key={product.id}/>
          )
        })}
      </div>
    </main>
  )
}

export default Home;
