"use client"

export default async function ProductPage(props: { params?: any; productId?: number; }) {
    const {params } = props
    const {productId} = props;

    const getSingleProduct = async() => {
        const res = await fetch(`https://dummyjson.com/products/${params.productId}`)
        
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        
        return res.json()
    }
    const fetchedProduct = await getSingleProduct();
 
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt={fetchedProduct.title} className="lg:w-1/2 w-full object-cover rounded border border-gray-200" src={fetchedProduct.images[0]} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 uppercase my-6">{fetchedProduct.category}</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-3">{fetchedProduct.title}</h1>
                <span className='text-xl font-bold text-slate-900 my-6'>Rating:⭐{fetchedProduct.rating}</span>
                <h5 className='text-xl font-bold text-slate-900 my-6'>Description:</h5>
                <p className="leading-relaxed my-6">{fetchedProduct.description}</p>
                <div className="flex my-6">
                <span className="text-xl font-bold text-slate-900">Price: ${fetchedProduct.price}</span>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}