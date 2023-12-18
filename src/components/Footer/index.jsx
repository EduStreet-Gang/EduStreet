import Image from 'next/image'
import logo from '@/public/logo/logo.png'

const Footer = () => {
  return(
    <div className='bg-edustreet-blue flex justify-center py-7'>
      <Image
        src={logo}
        width={200}
      />
    </div>
  )
}

export default Footer