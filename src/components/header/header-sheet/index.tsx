import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


import { ExternalLink, LogOut, Menu } from "lucide-react"

import collaboratorLinks from "@/configs/link-cards"
import Link  from 'next/link';



import { Separator } from "@/components/ui/separator";

const HeaderSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="flex lg:hidden">
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-2 overflow-auto">
        <SheetHeader className="px-2">
          <SheetTitle>Links</SheetTitle>
        </SheetHeader>
        <Separator />
        <div className="grid gap-4 p-4">
          <Accordion type="single" collapsible className="w-full">
            {collaboratorLinks.map((data,index) => {
              return <AccordionItem value={`index-${index}`}>
              <AccordionTrigger className="text-primary font-semibold">{data.name}</AccordionTrigger>
              <AccordionContent className="flex flex-col items-start">
                {data.infos.map((link) => {
                  return <Button variant={'ghost'} asChild>
                   <Link href={link.linkPath} target="blank">
                    <ExternalLink className="mr-4 w-4 h-4"/> 
                    <span className="text-zinc-500">{link.title}</span>
                    </Link>
                  </Button>
                })}
              </AccordionContent>
            </AccordionItem>
            })}

          </Accordion>
        </div>
        <SheetFooter>
          <div className="flex w-full items-start">
            <Button 
              asChild
              variant={'secondary'}
            >
              <Link href={'/login'}>
                <LogOut className="w-4 h-4 mr-4"/>
                <span>Logout</span>
              </Link>
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
  </Sheet>
  )
}

export default HeaderSheet