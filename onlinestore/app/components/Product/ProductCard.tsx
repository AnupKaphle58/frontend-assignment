'use-client'

import { Link } from 'lucide-react';

interface ProductCardProps{
        id: number;
        title: string;
        price:  number;
        images: Array<string>;
        category: string;
        rating:number
}

const ProductCard: React.FC<ProductCardProps> =({id, title, price, images, category, rating}) => {

    return(
        <Link href={`/product/${id}`}>
            <div className="relative m-10 flex w-full max-w-xs flex-col h-[400px] overflow-hidden rounded-lg border border-gray-200 bg-gray-100 shadow-md cursor-pointer">
                <div className='relative mx-3 mt-3 flex h-60 overflow-hidden'>
                    <img className="object-cover max-h-[300px] w-full rounded-lg border border-gray-400" src={images[0]} alt={title} />
                </div>
                <div className="mt-4 px-5 pb-5">
                    <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                        <p className='text-sm uppercase'>{category}</p>
                    </div>
                    <div className='flex justify-between'>
                        <span className="text-3xl font-bold text-slate-900">${price}</span>
                    <span className='text-3xl font-bold text-slate-900'>⭐{rating}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;
