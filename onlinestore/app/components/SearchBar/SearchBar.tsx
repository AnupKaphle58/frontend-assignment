'use client'

import  {useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import useDebounce from '@/hooks/useDebounce';


function SearchResult(props: any)
{
  const {isLoading, data} =props;

  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

   return (
        <div className="absolute bg-white top-full inset-x-0 shadow rounded-b-md overflow-y-scroll max-h-[500px]">
            {isLoading && <div className="text-white">Loading...</div>}
            {data && data.products.map((item: any) => (
                <div onClick={()=> router.push(`/product/${item.id}`)} key={item.id} className="p-4 border-b border-gray-400 hover:cursor-pointer">
                    <span className='flex justify-between items-center'>
                      {item.title}
                      <img src={item.images[0]} className='object-cover h-[50px] w-[50px] '/>
                    </span>
                </div>
            ))}
        </div>
   )
}

const SearchBar = ({ }) => {
  const [search, setSearch] =useState('')

  const debouncedSearchTerm = useDebounce(search, 200)

  const {data, isLoading, error} = useQuery({
    queryKey: ['search', debouncedSearchTerm],
    queryFn: 
    () => {
    if (debouncedSearchTerm) {
       return fetch(`https://dummyjson.com/products/search?q=${debouncedSearchTerm}`).then(res => res.json())
    }
    return {products: []}
    }
  })
  return(
    <div className='relative w-full text-gray-600'>
        <input type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
        placeholder='Search products...'
        className="bg-white h-10 px-5 pr-10 w-full  text-sm focus:outline-none" />
        {data?.products.length > 0 && <SearchResult isLoading={isLoading} data={data} />}
    </div>
    
  )
}


export default SearchBar
