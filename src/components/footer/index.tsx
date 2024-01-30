import Image from "next/image"

import Link from 'next/link'

import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react"

import { Separator } from "../ui/separator"

import logo from '@/assets/image/logo.png'
import { Button } from "../ui/button"


const Footer = () => {
  return (
  
<footer className="bg-background shadow-md">
    <div className="flex flex-col gap-3 w-full p-4 py-6 lg:py-8">
      <div className="w-full py-4 px-6 flex items-center justify-between">
        <div>
          <Image
            src={logo}
            alt='Logomarca'
          />
        </div>
      </div>
      <Separator />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023
            <Link href="https://funerariavida.com.br/" className="hover:underline">
              Funerária Vida™
            </Link>. 
            <strong>Todos os direitos reservados</strong>
          </span>

          {/* footer links */}
          <div className="flex items-center justify-center gap-3">

            <Button
              variant={"outline"}
              size={'icon'}
            >
              <Facebook/>
            </Button>

            <Button
              variant={"outline"}
              size={'icon'}
            >
              <Instagram/>
            </Button>

            <Button
              variant={"outline"}
              size={'icon'}
            >
              <Linkedin/>
            </Button>

            <Button
              variant={"outline"}
              size={'icon'}
            >
              <Youtube/>
            </Button>
          </div>
      </div>
    </div>
</footer>

  )
}

export default Footer