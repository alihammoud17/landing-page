import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    column: {text: string, imageSrc: string, name: string, username: string}[],
    className?: string
}

const TestimonalColumn = ({ column, className = '' }: Props) => {
  return (
    <div className={twMerge("flex flex-col gap-6 mt-10 [mask-image:linear-gradient(transparent,black_25%,black_75%,transparent)]", className)}>
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
  </div>
  )
}

export default TestimonalColumn;