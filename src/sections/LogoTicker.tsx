'use client'

import AcmeLogo from '@/assets/logo-acme.png';
import QuantumLogo from '@/assets/logo-quantum.png';
import EchoLogo from '@/assets/logo-echo.png';
import CelestialLogo from '@/assets/logo-celestial.png';
import PulseLogo from '@/assets/logo-pulse.png';
import ApexLogo from '@/assets/logo-apex.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Fragment } from 'react';

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div className="flex gap-14 flex-none pr-14" 
            animate={{
              translateX: '-50%'
            }} 
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop'
            }}
          >
            {new Array(2).fill(0).map((_, index) => (
              <Fragment key={index}>
                <Image src={AcmeLogo} alt='Acme Logo' className='logo-ticker-image' />
                <Image src={QuantumLogo} alt='Quantum Logo' className='logo-ticker-image' />
                <Image src={EchoLogo} alt='Echo Logo' className='logo-ticker-image' />
                <Image src={CelestialLogo} alt='Celestial Logo' className='logo-ticker-image' />
                <Image src={PulseLogo} alt='Pulse Logo' className='logo-ticker-image' />
                <Image src={ApexLogo} alt='Apex Logo' className='logo-ticker-image' />
              </Fragment>
            ))}
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};
