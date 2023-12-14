import Image from "next/image"
import homePic2 from '@/../../public/img/home/homePic2.jpg'
import autoprefixer from "autoprefixer"

const PopulerCourses = () => {
  return (
    <div className="bg-white populer-courses shadow-md flex w-fit items-center px-3 py-3 rounded-2xl">
      <Image
        src={homePic2}
        width={250}
      />
      <div className="flex flex-col gap-1 px-8">
        <h2 className="text-lg font-bold">HTML CSS</h2>
        <h3 className="text-md text-slate-500 font-bold">Esther Howard</h3>
        <span className="mt-1 text-sm">⭐⭐⭐⭐⭐</span>
        <span className="text-slate-400 text-sm">1200 ( Comment )</span>
      </div>
    </div>
  )
}

export default PopulerCourses