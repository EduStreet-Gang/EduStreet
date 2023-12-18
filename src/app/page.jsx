import HomeTitle from "@/components/Home/HomeTitle"
import BenefitsCard from "@/components/Home/BenefitsCard"
import PopulerCourses from "@/components/Home/PopulerCourses"


const Page = () => {
  return (
  <main className="px-32">
    <section>
      <HomeTitle/>
    </section>

    <section className="flex flex-col gap-10">
      <h2 className="tracking-widest text-4xl font-bold">Benefits</h2>
      <div className="grid grid-cols-3 gap-16">
        <BenefitsCard/>
        <BenefitsCard/>
        <BenefitsCard/>
        <BenefitsCard/>
        <BenefitsCard/>
        <BenefitsCard/>
      </div>
    </section>

    <section className="flex flex-col gap-10 mt-28 mb-44">
      <h2 className="tracking-widest text-4xl font-bold">Populer Courses</h2>
      <div className="grid grid-cols-3 gap-16">
        <PopulerCourses/>
        <PopulerCourses/>
        <PopulerCourses/>
        <PopulerCourses/>
        <PopulerCourses/>
        <PopulerCourses/>
      </div>
    </section>
  </main>
  )
}

export default Page