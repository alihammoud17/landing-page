'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { Fragment } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    column: {text: string, imageSrc: string, name: string, username: string}[],
    className?: string,
    duration?: number
}

const TestimonalColumn = ({ column, className = '', duration = 10 }: Props) => {
  return (
    <div className={className}>
      <motion.div className="flex flex-col gap-6 pb-6" animate={{translateY: '-50%'}} transition={{repeat: Infinity, ease: 'linear', repeatType: 'loop', duration: duration}}>
        {new Array(2).fill(0).map((_, index) => (
          <Fragment key={index}>
            {column.map(({text, imageSrc, name, username}, index) => (
              <div className="card" key={index}>
                <div className="">{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full" />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">{name}</div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </Fragment>
        ) )}

      </motion.div>
    </div>

  )
}

export default TestimonalColumn;