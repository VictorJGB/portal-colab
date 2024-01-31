'use client'

import React from 'react'

import Link from 'next/link'

import Image from 'next/image'

import Logo from '@/assets/image/logo.png'

import { LogOut, Menu } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Separator } from '@/components/ui/separator'

import HeaderNavigation from './header-navigation'
import HeaderSheet from './header-sheet'
import UserMenu from './user-menu'

import { useSessionStorage } from '@/hooks/use-session-storage'
import { useCollabContext } from '@/context/collaborator'


const Header = () => {
  const {removeItem} = useSessionStorage('isLogged')
  const {collab} = useCollabContext()

  const user = collab?.nome.split(' ')[0]

  return (
    <header className='sticky z-10 top-0 w-full bg-background h-20 p-6 shadow-md flex items-center justify-center'>
       <HeaderSheet />
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
          {/* {collab && <span className='hidden lg:flex'>Bem vindo(a), <b className='text-primary'>{user}</b></span>}
          <Button 
            asChild
            variant={'ghost'}
            onClick={() => removeItem()}
            className='hidden lg:flex hover:bg-transparent hover:text-primary'>
              <Link
                href={'/portaldocolaborador/login'}
                
              >
                <LogOut />
              </Link>
          </Button> */}
          <UserMenu />
        </div>
    </header>
  )
}

export default Header