"use client"


const Error =() => {
    return(
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative m-16" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline">Something went wrong.</span>
        </div>
    )
}

export default Error;