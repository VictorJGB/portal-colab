import React from 'react'

import collaboratorLinks from '@/configs/link-cards'

import {ExternalLink} from 'lucide-react'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
import Link from 'next/link'
  

const HeaderNavigation = () => {
  return (
    <NavigationMenu>
        <NavigationMenuList>
            {/* Percorrendo array de links */}
            {collaboratorLinks.map((link) => {    
                return (<NavigationMenuItem>
                    <NavigationMenuTrigger className='bg-primary text-white'>
                        {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className='grid w-[300px] gap-3 p-4'>
                            {/* Percorrendo array de infos */}
                            {link.infos.map((info) => {
                                return <Link href={info.linkPath} target='blank' legacyBehavior passHref>
                                    <NavigationMenuLink className='p-4 flex items-start justify-between rounded-lg hover:bg-secondary hover:text-white transition-all'>
                                        {info.title}
                                        <ExternalLink size='16'/>
                                    </NavigationMenuLink>
                                 </Link>
                            })}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                )
            })}

        </NavigationMenuList>
    </NavigationMenu>

  )
}

export default HeaderNavigation