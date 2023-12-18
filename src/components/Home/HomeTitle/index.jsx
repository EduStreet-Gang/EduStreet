import Image from 'next/image'
import homePic1 from '@/public/img/home/homePic1.png'
import Link from "next/link"

const HomeTitle = () => {
  return (
  <div className="flex h-screen gap-20 justify-between items-center">
    <div className='flex flex-col gap-4'>
      <h1 className="text-edustreet-blue text-5xl font-bold">EduStreet:</h1>
      <h2 className="text-black text-4xl font-bold">Jalan Pendidikan Menuju Kesuksesan</h2>
      <h3 className="text-black text-2xl">Dapatkan Pengalaman Belajar Dinamis, Dengan Jalan Pendidikan Penuh Inovasi</h3>
      <div className='flex gap-10 mt-7'>
        <Link href='#' className='bg-edustreet-red text-md tracking-wide text-white py-3 px-5 rounded-md'>Explore Courses</Link>
        <Link href='#' className='bg-edustreet-red text-md tracking-wide text-white py-3 px-5 rounded-md'>Pelajari Selengkapnya</Link>
      </div>
    </div>
    <div>
      <Image
        src={homePic1}
        width={600}
      />
    </div>
  </div>
  )
}

export default HomeTitle