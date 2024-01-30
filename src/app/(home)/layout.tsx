'use client'

import { useLayoutEffect, useState } from "react";

import Footer from "@/components/footer";
import Header from "@/components/header";

import { useSessionStorage } from "@/hooks/use-session-storage";
import { useRouter } from "next/navigation";


export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, SetIsLoading] = useState<boolean>(true)
  const {getItem} = useSessionStorage('isLogged')
  const {replace} = useRouter()

  useLayoutEffect(() => {
    if(!getItem()){
      SetIsLoading(false)
      replace('/login')
    }
    SetIsLoading(false)
  })

  if(isLoading) {
    return <div>Carregando...</div>
  }

  if(!isLoading){
    return (
      <div className='h-screen w-full'>
        <Header />
        <main className="flex w-full min-h-screen flex-col items-center justify-center">
        {children}
      </main>
      {/* <Footer /> */}
      </div>
    )
  }
}
