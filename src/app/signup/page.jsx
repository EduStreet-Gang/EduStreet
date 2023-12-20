import Image from "next/image"
import courses1 from '@/public/img/courses/courses1.png'
import Link from "next/link"
import { GoogleLogo } from "@phosphor-icons/react/dist/ssr"

const Page = () => {
  return(
    <main>
      <div className="h-screen flex justify-center items-center bg-edustreet-purple bg-opacity-50 relative">
        <Image
          src={courses1}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute inset-0 bg-edustreet-purple bg-opacity-20"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-edustreet-white px-10 py-14 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl pr-32">Create an account</h1>
            <h2>Already have an ccount? <Link href='/login' className="underline hover:no-underline transition-all">Log in</Link></h2>
          </div>
          <form action="" className="flex flex-col gap-1">
            <label htmlFor="username" className="text-md">Username</label>
            <input type="text" id="username" className="py-2.5 rounded-xl bg-transparent border-2 border-edustreet-grey"/>
            <label htmlFor="email" className="text-md mt-3">Email Address</label>
            <input type="email" id="email" className="py-2.5 rounded-xl bg-transparent border-2 border-edustreet-grey"/>
            <label htmlFor="pw" className="text-md mt-3">Password</label>
            <input type="password" id="pw" className="py-2.5 rounded-xl bg-transparent border-2 border-edustreet-grey"/>
            <span className="text-sm text-slate-500">Use 8 or more characters with a mix of letters, numbers & symbols</span>
            <button type="submit" className="text-xl mt-4 border bg-edustreet-orange p-2.5 rounded-3xl text-edustreet-white hover:text-black transition-all">Create an account</button>
          </form>
          <h3 className="w-96 m-2">
            <span>By continuing, you agree to the </span>
            <Link href='#' className="underline text-edustreet-blue hover:text-black transition-all">Terms of use</Link> 
            <span> and </span>
            <Link href='#' className="underline text-edustreet-blue hover:text-black transition-all">Privacy Policy.</Link>  
          </h3>
        </div>
      </div>
    </main>
  )
}

export default Page