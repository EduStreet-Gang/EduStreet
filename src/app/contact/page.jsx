import { Buildings, Clock, EnvelopeSimple, PhoneCall } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

const Page = () => {
  return (
    <main className="h-screen mx-32 grid grid-cols-2 gap-64 items-center">
      <section className="flex flex-col justify-center gap-7">
        <h1 className="font-bold text-4xl">Contact us</h1>
        <h2 className="text-lg">Jangan ragu untuk menghubungi kami kapan saja. kami akan membalas Anda sesegera mungkin!</h2>
        <form action="" className="flex flex-col gap-3 text-slate-600">
          <div className="flex flex-col gap-1">
            <label htmlFor="nama">Nama</label>
            <input type="text" id="nama" className="bg-edustreet-white border border-slate-600 p-2 rounded-lg"/>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="bg-edustreet-white border border-slate-600 p-2 rounded-lg"/>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="pesan">Pesan</label>
            <input type="text" id="pesan" className="bg-edustreet-white border border-slate-600 p-2 rounded-lg"/>
          </div>
          <button type="submit" className="bg-edustreet-orange p-2 mt-4 hover:text-black transition-all text-edustreet-white rounded-lg">Kirim</button>
        </form>
      </section>
      <section className="flex flex-col justify-center bg-edustreet-grey px-10 py-16 h-fit gap-10 text-lg">
          <h2 className="font-bold text-4xl">Info</h2>
          <Link href="#" className="flex items-center gap-3 hover:text-edustreet-orange transition-all"><EnvelopeSimple size={40}/>InfoEduStreet.@gmail.com</Link>
          <Link href="#" className="flex items-center gap-3 hover:text-edustreet-orange transition-all"><PhoneCall size={40}/>+62845 8956 6745</Link>
          <Link href="#" className="flex items-center gap-3 hover:text-edustreet-orange transition-all"><Buildings size={40}/>PT EduStreet, 36, Jalan Kalibata Timur II</Link>
          <Link href="#" className="flex items-center gap-3 hover:text-edustreet-orange transition-all"><Clock size={40}/>08.00 WIB - 16.00 WIB</Link>
      </section>
    </main>
  )
}

export default Page