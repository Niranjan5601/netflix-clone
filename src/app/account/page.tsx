"use client";
import Image from "next/image";
import Link from "next/link"


const Page =  () => {
    return (
        <div>
          <header className={`bg-[#141414]`}>
            <Link href="/">
              <Image
                src="https://rb.gy/ulxxee"
                width={120}
                height={120}
                className="cursor-pointer object-contain"
                alt="image"
              />
            </Link>
            <Link href="/account">
              <Image
                src="https://rb.gy/g1pwyx"
                alt="new-image"
                className="cursor-pointer rounded"
              />
            </Link>
          </header>
    
          <main className="mx-auto max-w-6xl px-5 pt-24 pb-12 transition-all md:px-10">
            <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
              <h1 className="text-3xl md:text-4xl">Account</h1>
              <div className="-ml-0.5 flex items-center gap-x-1.5">
                <Image src="https://rb.gy/4vfk4r" alt="" className="h-7 w-7" />
                <p className="text-xs font-semibold text-[#555]">
                  {`Membership will expire on ${(new Date("2021-03-25")).toDateString()}`}
                </p>
              </div>
            </div>
    
        
    
            <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0 items-center">
               <h4 className="text-lg text-[gray]">Plan Name:</h4>
              {/* Find the current plan */}
               <div className="col-span-2 font-medium">
                Premium
              </div>
              <button className="cursor-pointer flex flex-1 text-blue-500 hover:underline md:text-right">
                Change plan
              </button>
            </div>
    
            <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
              <h4 className="text-lg text-[gray]">Settings</h4>
              <p
                className="col-span-3 cursor-pointer text-blue-500 hover:underline"
                
              >
                Sign out
              </p>
            </div>
          </main>
        </div>
      )
}


export default Page;