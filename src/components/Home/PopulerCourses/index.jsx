import Image from "next/image"
import homePic2 from '@/public/img/home/homePic2.jpg'

const PopulerCourses = () => {
  return (
    <div className="bg-white rounded-lg shadow-md flex overflow-hidden">
      <div className="w-1/3 m-2">
        <Image
          src={homePic2}
          objectFit="cover"
          className="aspect-square h-full"
        />
      </div>
      <div className="p-4 w-2/3">
        <h5 className="text-gray-900 text-lg font-medium">HTML CSS</h5>
        <p className="text-gray-500 text-sm mb-2">Esther Howard</p>
        <span className="tracking-widest">★★★★★</span>
        <p className="text-gray-500 text-sm">1200 ( Comment )</p>
      </div>
    </div>
  )
}

export default PopulerCourses