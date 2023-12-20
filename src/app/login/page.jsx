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
          <h1 className="text-3xl pr-64">Sign in</h1>
          <form action="" className="flex flex-col gap-1">
            <label htmlFor="email" className="text-md">Email</label>
            <input type="text" id="email" className="py-2.5 rounded-xl bg-transparent border-2 border-edustreet-grey"/>
            <label htmlFor="pw" className="text-md mt-3">Password</label>
            <input type="password" id="pw" className="py-2.5 rounded-xl bg-transparent border-2 border-edustreet-grey"/>
            <button type="submit" className="text-xl mt-4 border bg-edustreet-orange p-2.5 rounded-3xl text-edustreet-white hover:text-black transition-all">Sign in</button>
          </form>
          <div className="flex items-center gap-5">
            <span className="bg-edustreet-grey w-full h-1 rounded-3xl"></span>
            <span className="text-slate-600">OR</span>
            <span className="bg-edustreet-grey w-full h-1 rounded-3xl"></span>
          </div>
          <Link href='#' className="flex justify-center items-center border border-black rounded-3xl p-2 gap-3 text-md transition-all hover:invert bg-edustreet-white">
            <span className="border border-black rounded-3xl p-1"><GoogleLogo size={20}/></span>Continue with Google
          </Link>
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