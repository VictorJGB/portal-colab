import React from 'react'
import Link from 'next/link'

import { useSessionStorage } from '@/hooks/use-session-storage'
import { useCollabContext } from '@/context/collaborator'

import { LogOut } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { Button } from '@/components/ui/button'

const UserMenu = () => {
  const {removeItem} = useSessionStorage('isLogged')
  const {collab} = useCollabContext()
  
  const user = collab?.nome.split(' ')[0].toLowerCase()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='hidden lg:flex'>
        <Avatar>
          <AvatarImage src="https://t4.ftcdn.net/jpg/05/89/93/27/360_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.png" alt="usuário" />
          <AvatarFallback>FV</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-44'>
        <DropdownMenuLabel className='flex flex-col items-start'>
          <span className='text-base font-semibold capitalize'>{user}</span>
          <span className='text-sm font-medium capitalize'>{collab?.cargo.toLowerCase()}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
            <Link
              href={'/portaldocolaborador/login'}
              onClick={() => removeItem()}
              className='w-full flex items-center justify-between'
            >
              <LogOut className='w-4 h-4'/>
              Logout 
            </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default UserMenu