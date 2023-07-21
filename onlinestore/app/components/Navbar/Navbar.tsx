'use client'

import Link from "next/link";
import SearchBar from "@/app/components/SearchBar/SearchBar"
import {useState} from "react";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

const Navbar = () => {

    return(
        <div className="fixed top-0 inset-x-0 h-fit bg-gray-400 border-b border-black z-[10] py-2">
            <div className="container max-w-7xl h-16 mx-auto flex items-center justify-between gap-2 px-3">
                {/* logo */}
                <Link href="/" className="flex gap-2 items-center">
                    <p className=" text-black text-xl font-black md:block md:text-3xl hover:scale-110">OnlineStore</p>
                </Link>

                {/* Search Bar */}
                <div className="flex items-center gap-3">
                    <QueryClientProvider client={queryClient}>
                        <SearchBar />
                    </QueryClientProvider>
                    <i className="fa-solid fa-cart-shopping cursor-pointer hover:scale-110 text-2xl hover:text-slate-200" ></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar;