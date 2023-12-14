import Image from 'next/image'
import footer from '@/../../public/img/footer.png'

const Footer = () => {
  return(
    <div className='bg-blueEdu flex justify-center py-7'>
      <Image
        src={footer}
        width={200}
      />
    </div>
  )
}

export default Footer