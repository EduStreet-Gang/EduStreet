import Link from "next/link"

const Navbar = () => {
  return (
    <header>
      <div className="bg-edustreet-blue fixed top-0 left-0 right-0 py-3 px-32 rounded-b-lg flex justify-between z-10 items-center text-md">
        <div className="flex gap-1">
          <Link href='/' className="py-3 px-5 rounded hover:text-white transition-all">Home</Link>
          <Link href='/courses' className="py-3 px-5 rounded hover:text-white transition-all">Courses</Link>
          <Link href='/about' className="py-3 px-5 rounded hover:text-white transition-all">About Us</Link>
          <Link href='/contact' className="py-3 px-5 rounded hover:text-white transition-all">Contact</Link>
        </div>
        <div className="text-white">
          <Link href='/signup' className="py-3 px-5 rounded hover:text-black transition-all">Sign Up</Link>
          <Link href='/login' className="py-3 px-5 rounded bg-edustreet-orange hover:text-black transition-all">Login</Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar