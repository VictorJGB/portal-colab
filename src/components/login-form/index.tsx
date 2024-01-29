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
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'


const formSchema = z.object({
  username: z.string().min(2, 
    {
      message: 'Usuário deve ter no mínimo 2 caracteres'
    }).max(50),
  password: z.string().min(1, {
    message: 'Senha deve ter no mínimo 1 caractere'
  })
})

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
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
        {/* username */}
        <FormField
          control={form.control}
          name='username'
          render={({field}) => (
            <FormItem className='w-full'>
              <FormLabel className='text-white'>Usuário</FormLabel>
              <FormControl>
                <Input placeholder='Ex: teste' {...field}/>
              </FormControl>
              <FormMessage className='text-xs'/>
            </FormItem>
          )}
        />
        {/* password */}
        <FormField
          control={form.control}
          name='password'
          render={({field}) => (
            <FormItem className='w-full'>
              <FormLabel className='text-white'>Senha</FormLabel>
              <FormControl>
                <Input placeholder='********' {...field}/>
              </FormControl>
              <FormMessage className='text-xs' />
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