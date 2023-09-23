'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/send-email';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const {ref} = useSectionInView('Contact');

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <SectionHeading>
        Contact me
      </SectionHeading>
      <p className='text-gray-700 -mt-6'>Please contact me directly at <a className='underline' href='mailto:dkunrath@gmail.com'>dkunrath@gmail.com</a> or through this form.</p>
      <form
        action={async formData => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('email sent successfully!');
        }}
        className='mt-10 flex flex-col'
      >
        <input
          name='senderEmail'
          className='h-14 rounded-lg borderBlack px-4'
          type='email'
          placeholder='Your email'
          required
          maxLength={500}
        />
        <textarea
          name='message'
          className='h-52 my-3 rounded-lg borderBlack p-4'
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  )
}