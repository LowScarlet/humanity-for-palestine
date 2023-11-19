/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

"use client"

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { CgSpinner } from "react-icons/cg";
import { IoMdCheckmark } from "react-icons/io";
import { Permanent_Marker } from 'next/font/google'
import Image from 'next/image'

const font = Permanent_Marker({
  subsets: ['latin'],
  weight: '400'
})

interface InputCaptchaState {
  [key: string]: boolean;
}

const initialInputCaptcha = {
  '1': false,
  '2': false,
  '3': false,
  '4': false,
  '5': false,
  '6': false,
  '7': false,
  '8': false,
  '9': false,
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isVerify, setIsVerify] = useState(false)
  const [isFailed, setIsFailed] = useState(false)
  const [failedMsg, setFailedMsg] = useState('')
  const [inputCaptcha, setInputCaptcha] = useState<InputCaptchaState>(initialInputCaptcha);

  const handleVerifyButton = () => {
    if (Object.values(inputCaptcha).filter((value) => value).length < 3) {
      setIsFailed(true)
      setInputCaptcha(initialInputCaptcha)
      setFailedMsg('Click at least 3 images')
      return;
    }
    if (inputCaptcha[3] || inputCaptcha[4] || inputCaptcha[6] || inputCaptcha[7]) {
      setIsFailed(true)
      setInputCaptcha(initialInputCaptcha)
      setFailedMsg('Try Again..')
      return;
    }
    setIsOpen(false);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false)
      setIsVerify(true);
    }, 1500);
  }

  const changeValueAtIndex = (index: any) => {
    setInputCaptcha({
      ...inputCaptcha,
      [index]: !inputCaptcha[index],
    })
  };

  return (
    <main className='relative'>
      <Transition
        show={isLoading || isVerify}
        enter="transition-opacity duration-600"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <img className='absolute inset-0 w-full h-full object-cover -z-10 h-screen filter blur-sm brightness-50' src="/wpp.jpg" alt="" />
      </Transition>
      <div className='z-10 h-screen max-w-xs mx-auto flex items-center'>
        <div className='w-full'>
          <div className='pb-12'>
            <Transition
              show={isVerify}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <h1 className={'text-white font-bold text-center text-5xl ' + font.className}>
                SAVE PALESTINE
              </h1>
            </Transition>
          </div>
          <div className='flex items-center p-3 rounded-sm border border-neutral-300 text-black gap-x-4' style={{
            backgroundColor: '#f9f9f9'
          }}>
            {
              isLoading ? (
                <button disabled className='animate-spin '><CgSpinner className='text-4xl text-blue-500' /></button>
              ) : (
                isVerify ? (
                  <button disabled className=''><IoMdCheckmark className='text-4xl text-green-500' /></button>
                ) : (
                  <button className='w-8 h-8 border-2 border-neutral-300 rounded-sm bg-white' onClick={() => { setIsOpen(true) }} />
                )
              )
            }
            <h1 className='text-sm flex-1'>
              I'm human
            </h1>
            <div className='text-center' style={{
              fontSize: '0.6em'
            }}>
              <img className='mx-auto' width={32} height={32} src="https://forum.nox.tv/core/index.php?media/9-recaptcha-png/" alt="" />
              <h1>reCAPTCHA</h1>
              <p style={{
                fontSize: '0.85em'
              }}>
                <a target='_blank' href="https://www.google.com/intl/en/policies/privacy/">Privacy</a> - <a target='_blank' href="https://www.google.com/intl/en/policies/terms/">Terms</a>
              </p>
            </div>
          </div>
          <div className='py-4'>
            <Transition
              show={isVerify}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className={'text-center'}
            >
              <p className='text-white font-bold text-sm pb-16'>You don't need to be a Muslim to stand up for Palestine, You just need to be Human.</p>
              <p className='text-white font-medium text-xs '>by</p>
              <a target='_blank' href='https://lowscarlet.my.id/' className='text-white font-medium italic text-xs '>@Low_Scarlet</a>
            </Transition>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {
          setIsOpen(false)
        }}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-neutral-200 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto select-none">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-sm">
                  <div className='bg-white rounded-sm p-1 m-4 border border-neutural-300'>
                    <div className='flex bg-blue-500 rounded-sm p-2 text-xs text-white'>
                      <div className='flex-1'>
                        <h2>Select all images with</h2>
                        <h1 className='font-bold text-base'>oppresed</h1>
                        <h2>Click verify once there none left</h2>
                      </div>
                      <div>
                        <Image width={64} height={64} src={`/captcha/2.png`} alt="" />
                      </div>
                    </div>
                    <div className='grid grid-cols-3 gap-1 py-1'>
                      {Array.from({ length: 9 }, (_, i) => i + 1).map((e) => (
                        <button
                          className={inputCaptcha[e] ? 'border border-green-500 border-4' : ''}
                          key={e}
                          onClick={() => changeValueAtIndex(e)}
                        >
                          <Image width={900} height={900} src={`/captcha/${e}.png`} alt="" />
                        </button>
                      ))}
                    </div>
                    <div className={`py-2 ${isFailed ? '' : 'hidden'}`}>
                      <p className='text-red-500 text-center text-xs'>{failedMsg}</p>
                    </div>
                    <div className='flex py-2'>
                      <div className='flex-1'></div>
                      <div>
                        <button className='bg-blue-500 rounded-sm py-2 px-6 text-white text-xs' onClick={handleVerifyButton}>VERIFY</button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </main>
  )
}