'use client'

import React from 'react'

import Image from 'next/image'

import Logo from '@/assets/image/logo.png'

import { LogOut, Menu } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Separator } from '@/components/ui/separator'

import HeaderNavigation from './header-navigation'
import { redirect } from 'next/navigation'
import HeaderDropdownMenu from './header-dropdown-menu'

const logOut = () => {
  redirect('/login')
}

const Header = () => {
  return (
    <header className='sticky z-10 top-0 w-full bg-background h-20 p-6 shadow-md flex items-center justify-center'>
       <HeaderDropdownMenu />
        <div className='w-32'>
            <Image 
            className='w-full'  
              src={Logo}
              alt='Logomarca'
            />
        </div>
        <div className='ms-auto h-full gap-4 flex items-center justify-center'>
          <HeaderNavigation />
          <Separator orientation='vertical' className='w-[2px] h-full hidden lg:flex bg-primary'/>
          <Button 
            onClick={() => logOut} 
            variant={'ghost'}
            className='hidden lg:flex hover:bg-transparent hover:text-primary'>
            <LogOut />
          </Button>
        </div>
    </header>
  )
}

export default Header