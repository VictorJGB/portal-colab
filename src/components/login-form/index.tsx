'use client'

import React, {useState} from 'react'

import useCollab from '@/hooks/use-collab'

import callToast from '@/utils/call-toast'

import { useRouter } from 'next/navigation'

// form
import {z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

// components
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Loader2, LogIn } from 'lucide-react'

import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { useSessionStorage } from '@/hooks/use-session-storage'

const formSchema = z.object({
  cpf: z.string().min(2, 
    {
      message: 'CPF Inválido'
    }),
})

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {replace} = useRouter()
  const {data} = useCollab();
  const {setItem} = useSessionStorage('isLogged')

  function Login () {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setItem(true)
      replace('/')
    }, 2000)
  }

  // Preparando formulário
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cpf: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {

    if(data){
      const collab = data.find((user) => user.ljzkv === values.cpf)

      if(collab){
        values.cpf === ''
        Login()
      }
      else {
        callToast(
          'Erro',
          'CPF não reconhecido',
          true
        )
      }
    }

  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className='flex flex-col items-center justify-center gap-3 w-1/2'>
        {/* password */}
        <FormField
          control={form.control}
          name='cpf'
          render={({field}) => (
            <FormItem className='w-full'>
              <FormControl>
                
                <Input  {...field} placeholder='CPF'/>
              </FormControl>
              <FormMessage className='px-3 text-xs' />
            </FormItem>
          )}
        />
        <Button className='w-full text-primary hover:bg-secondary hover:text-white border-0' 
          variant={'outline'}
        disabled={isLoading} type='submit'>
          {isLoading && <Loader2  className="mr-2 h-4 w-4 animate-spin" />}
          {!isLoading && <LogIn className='mr-2 w-4 h-4'/>} Acessar
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm