'use client'

import Image from 'next/image'
import React from 'react'
import useReadMore from '@/hooks/useReadMore'

const ReadMoreSection = ({ imageSrc, title, initialText, extraText, reverse }: 
  { imageSrc: string, title: string, initialText: string, extraText: string, reverse?: boolean }) => {
  
  const { isExpanded, toggleReadMore } = useReadMore();

  return (
    <div className={`container p-4 md:p-12 md:flex ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} my-4`}>
      <Image
        src={imageSrc}
        width={400}
        height={400}
        alt="Illustration"
        className='rounded-xl'
      />
      <div className='md:mx-4'>
        <h1 className='text-3xl font-bold my-4 md:mb-8 md:my-0'>{title}</h1>
        <p className='text-lg'>
          {initialText}
          {isExpanded && <>{' '}{extraText}</>}
          <br />
          <button 
            onClick={toggleReadMore} 
            className='text-blue-500 font-semibold mt-2'
          >
            {isExpanded ? 'Read Less' : 'Read More...'}
          </button>
        </p>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <ReadMoreSection 
        imageSrc="/lady.svg"
        title="Lorem Ipsum"
        initialText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        extraText="When an unknown printer took a galley of type and scrambled it to make 
                  a type specimen book. It has survived not only five centuries, but also the 
                  leap into electronic typesetting, remaining essentially unchanged. It was 
                  popularised in the 1960s with the release of Letraset sheets containing 
                  Lorem Ipsum passages, and more recently with desktop publishing software 
                  like Aldus PageMaker including versions of Lorem Ipsum."
        reverse // This makes the layout right-aligned
      />

      <ReadMoreSection 
        imageSrc="/justice.svg"
        title="Lorem Ipsum"
        initialText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        extraText="When an unknown printer took a galley of type and scrambled it to make 
                  a type specimen book. It has survived not only five centuries, but also the 
                  leap into electronic typesetting, remaining essentially unchanged. It was 
                  popularised in the 1960s with the release of Letraset sheets containing 
                  Lorem Ipsum passages, and more recently with desktop publishing software 
                  like Aldus PageMaker including versions of Lorem Ipsum."
      />
    </div>
  );
};

export default Page;
