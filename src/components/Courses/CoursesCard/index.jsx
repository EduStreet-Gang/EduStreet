import Image from "next/image"
import homePic2 from '@/public/img/home/homePic2.jpg'

const CoursesCard = () => {
  return (
    <div className="max-w-sm bg-edustreet-blue">
      <div className="relative h-56 w-full">
        <Image
          src={homePic2}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-center items-center">
        <h5 className="text-edustreet-white text-md text-center font-normal py-2">Basic Web Development For Beginner</h5>
      </div>
    </div>
  )
}

export default CoursesCard