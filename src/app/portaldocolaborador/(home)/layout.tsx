'use client'

import { useLayoutEffect, useState } from "react";

import Header from "@/components/header";
import FullPageLoader from "@/components/full-page-loader";

import { useSessionStorage } from "@/hooks/use-session-storage";
import { useRouter } from "next/navigation";


export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, SetIsLoading] = useState<boolean>(true)
  const {getItem} = useSessionStorage('isLogged')
  const {push} = useRouter()

  useLayoutEffect(() => {
    if(!getItem()){
      push('/portaldocolaborador/login')
    }
    
    setTimeout(() => {
      SetIsLoading(false)
    }, 2000)
  })

  if(isLoading) {
    return <FullPageLoader />
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
