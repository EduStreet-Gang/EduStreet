import Link from "next/link"

const Navbar = () => {
  return (
    <header>
      <div className="bg-blueEdu fixed top-0 left-0 right-0 py-5 px-32 rounded-b-lg flex justify-between items-center">
        <div className="flex gap-1">
          <Link href='/' className="bg-whiteEdu py-3 px-5 rounded">Home</Link>
          <Link href='/courses' className="py-3 px-5 rounded">Courses</Link>
          <Link href='/about' className="py-3 px-5 rounded">About Us</Link>
          <Link href='/contact' className="py-3 px-5 rounded">Contact</Link>
        </div>
        <div>
          <Link href='/signup' className="py-3 px-5 rounded">Sign Up</Link>
          <Link href='/login' className="py-3 px-5 rounded bg-black text-white">Login</Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar