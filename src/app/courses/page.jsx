import Image from "next/image";
import courses1 from '@/public/img/courses/courses1.png'
import logo from '@/public/logo/logo.png'
import Link from "next/link";
import CoursesCard from "@/components/Courses/CoursesCard";

const Page = () => {
    return (
        <main>
            <section className="mt-20 pt-2">
                <div className="relative w-full h-96 bg-edustreet-purple bg-opacity-50">
                    <Image
                        src={courses1}
                        loading="lazy"
                        objectFit="cover"
                        layout="fill"
                    />
                    <div className="absolute pl-8 pt-2">
                        <Image
                            src={logo}
                            loading="lazy"
                            width={150}
                        />
                    </div>
                    <div className="absolute text-edustreet-white flex justify-center items-center w-full h-full flex-col gap-2">
                        <h1 className="font-bold text-5xl tracking-wide">COURSES MENU</h1>
                        <h2 className="text-xl font-extralight mt-4">Tertarik Bergabung dengan Kami? Buat kelasmu Disini</h2>
                        <Link href="/" className="bg-edustreet-orange py-1 px-7 rounded-lg font-semibold">Buat Kelas</Link>
                    </div>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center">
                <div className="py-14 flex flex-col items-center font-bold text-3xl gap-1">
                    <h2>Checkout New Release</h2>
                    <h2>Of Our Courses</h2>
                </div>
            </section>
            <section className="mx-44 grid grid-cols-3 mb-20 gap-14">
                <CoursesCard/>
                <CoursesCard/>
                <CoursesCard/>
                <CoursesCard/>
                <CoursesCard/>
                <CoursesCard/>
            </section>
        </main>
    )
}



export default Page;