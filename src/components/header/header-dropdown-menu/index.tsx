import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent
} from "@/components/ui/dropdown-menu"

import { ExternalLink, Menu } from "lucide-react"

import collaboratorLinks from "@/configs/link-cards"
import Link  from 'next/link';

const HeaderDropdownMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="mr-4">
        <Button
          variant={'outline'}
          className='flex lg:hidden hover:bg-transparent hover:text-primary'
        >
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Links</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* Utils */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>{collaboratorLinks[0].name}</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="w-60">
              {collaboratorLinks[0].infos.map((link) => {
                return <DropdownMenuItem asChild>
                  <Link href={link.linkPath} target="blank">
                    {link.title}
                    <ExternalLink className="ms-auto w-4 h4"/>
                  </Link>
                </DropdownMenuItem>
              })}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        {/* Training */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>{collaboratorLinks[1].name}</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="w-60">
              {collaboratorLinks[1].infos.map((link) => {
                return <DropdownMenuItem asChild>
                  <Link href={link.linkPath} target="blank">
                    {link.title}
                    <ExternalLink className="ms-auto w-4 h4"/>
                  </Link>
                </DropdownMenuItem>
              })}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        {/* Department */}
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>{collaboratorLinks[2].name}</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent className="w-60">
              {collaboratorLinks[2].infos.map((link) => {
                return <DropdownMenuItem asChild>
                  <Link href={link.linkPath} target="blank">
                    {link.title}
                    <ExternalLink className="ms-auto w-4 h4"/>
                  </Link>
                </DropdownMenuItem>
              })}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
  </DropdownMenu>
  )
}

export default HeaderDropdownMenu