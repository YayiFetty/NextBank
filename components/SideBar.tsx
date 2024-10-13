'use client'
import { sidebarLinks } from '@constants'
import { cn } from '@lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'

const SideBar = () => {
    const pathname = usePathname();
  return (
    <section className='sidebar'>
            <nav>
                <Link href="/" className='flex items-center cursor-pointer mb-12 gap-2'>
                    <Image src="/icons/logo.svg" alt='logo' width={35} height={35} className='size-[24px] max-xl:size-14'/>
                    <h1 className='sidebar-logo'>NextBank</h1>
                </Link>

                <div>
                    {
                        sidebarLinks.map((item) => {
                                const isActive = pathname === (item.route || pathname.startsWith(`{item.route}`))
                            return(
                                <Link href={item.route} key={item.label} className= {cn('sidebar-link', {'bg-bankGradient':isActive})}>
                                <div className='relative size-6'>
                                    <Image src={item.imgURL} alt={item.label} fill className={cn({'brightness-[3] invert-0':isActive})}/>
                                </div>
                                <p className={cn('sidebar-label', {"!text-white":isActive})}>{item.label}</p>
                                </Link>
                            )
                        })
                    }
                </div>
            </nav>
    </section>
  )
}

export default SideBar
