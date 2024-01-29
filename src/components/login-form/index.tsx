'use client'

import React from 'react'

// form
import {z} from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

// components
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { LogIn } from 'lucide-react'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'

const formSchema = z.object({
  username: z.string().min(2, 
    {
      message: 'CPF Inválido'
    }),
})

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className='flex flex-col items-center justify-center gap-3 w-1/2'>
        {/* password */}
        <FormField
          control={form.control}
          name='username'
          render={({field}) => (
            <FormItem className='w-full'>
              <FormControl>
                
                <Input  {...field} placeholder='CPF'/>
              </FormControl>
              <FormMessage className='px-3 text-xs' />
            </FormItem>
          )}
        />
        <Button className='w-full' type='submit'>
          <LogIn className='mr-2 w-4 h-4'/> Acessar
        </Button>
      </form>
    </Form>
  )
}

export default LoginForm