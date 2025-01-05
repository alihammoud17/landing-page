'use client'

import ProductImage from '@/assets/product-image.png';
import PyramidImage from '@/assets/pyramid.png';
import TubeImage from '@/assets/tube.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ProductShowcase = () => {

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className='bg-gradient-to-b from-[#fff] to-[#d2dcff] py-24 overflow-x-clip'>
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">
              Boost your productivity
            </div>
          </div>
          <h2 className='section-title mt-5'>A more effective to track progress</h2>
          <p className='section-description mt-5'>Effortlessly turn your ideas into a fully functional, responsive SaaS website in just minutes with this template.</p>
        </div>
        <div className="relative">
          <Image 
            src={ProductImage} 
            alt='Product image' className='mt-10' 
          />
          <motion.img 
            src={PyramidImage.src} 
            alt='Pyramid image' 
            height={262} 
            width={262} 
            className='hidden md:block absolute -right-36 -top-32' 
            style={{
              translateY
            }}
          />
          <motion.img 
            src={TubeImage.src} 
            alt='Tube image' 
            height={248}
            width={248} 
            className='hidden md:block absolute bottom-24 -left-36' 
            style={{
              translateY
            }}
          />
        </div>
      </div>
    </section>
  );
};
