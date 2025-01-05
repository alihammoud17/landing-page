import Logo from '@/assets/logosaas.png'
import Image from 'next/image';
import Insta from '@/assets/social-insta.svg'
import LinkedIn from '@/assets/social-linkedin.svg'
import SocialX from '@/assets/social-x.svg'
import Youtube from '@/assets/social-youtube.svg'
import Pin from '@/assets/social-pin.svg'

export const Footer = () => {
  return (
    <footer className='bg-black text-[#bcbcbc] text-sm py-10 text-center'>
      <div className="container">

        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:blur before:bg-[linear-gradient(to-right,#f87bff,#fb92cb,#ffdd9b,#c2f0b1,#2fd8fe)] before:absolute">
          <Image src={Logo} alt='Saas Logo' height={40} className='relative' />
        </div>

        <nav className='flex flex-col md:flex-row md:justify-center mt-6 gap-6'>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <Insta />
          <LinkedIn />
          <Pin />
          <Youtube />
        </div>
        <p className='mt-6'>&copy; {new Date().getFullYear().toString()} Your Company, Inc. All Rights Reserved. </p>
      </div>
    </footer>
  );
};
