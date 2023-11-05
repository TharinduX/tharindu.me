"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import ReCAPTCHA from "react-google-recaptcha"
import { verifyCaptcha } from '@/lib/serverActions';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

import { FaGithub, FaEnvelope, FaXTwitter } from "react-icons/fa6";

import React, { useRef, useState } from 'react'
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters long." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters long." }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters long."
  })
})

export const revalidate = 60;

const page = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [isVerified, setIsverified] = useState<boolean>(false)
  const [isCaptchaOpen, setIsCaptchaOpen] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  async function handleCaptchaSubmission(token: string | null) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false))
  }

  function showRecaptcha() {
    setIsCaptchaOpen(true)
  }

  return (
    <div className='ruler'>
      <div className='pt-32 pb-20 px-10 w-full'>
        <div className='max-w-screen-lg flex flex-col mx-auto p-4'>
          <div className='text-3xl md:text-4xl text-center font-bold'>Contact Me</div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='mt-10 flex flex-col gap-5 w-full max-w-sm mx-auto'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type='text' placeholder='Name' {...field} />
                    </FormControl>
                    <FormMessage className='text-primary' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type='email' placeholder='Email' {...field} />
                    </FormControl>
                    <FormMessage className='text-primary' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='subject'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type='text' placeholder='Subject' {...field} />
                    </FormControl>
                    <FormMessage className='text-primary' />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='message'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder='Type your message here.' {...field} onFocus={showRecaptcha} />
                    </FormControl>
                    <FormMessage className='text-primary' />
                  </FormItem>
                )}
              />
              {isCaptchaOpen &&
                <ReCAPTCHA
                  className='mx-auto'
                  size='normal'
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  ref={recaptchaRef}
                  onChange={handleCaptchaSubmission}
                />}

              <Button type="submit" disabled={!isVerified}>Submit</Button>
            </form>
          </Form>
          <div className='flex flex-col mt-20 gap-5 md:flex-row md:mx-auto'>
            <div className='bg-accent/70 border p-10 rounded-lg flex flex-col gap-2 md:w-64 text-center items-center'>
              <FaEnvelope size={32} className="mb-3" />
              <p className='text-xl'>Email</p>
              <p className='text-muted-foreground text-sm'>Please drop me an email</p>
              <p className='text-muted-foreground text-sm hover:text-primary'>
                <Link href="mailto:hello@tharindu.me" rel="noopener noreferrer" target="_blank">hello@tharindu.me</Link>
              </p>
            </div>
            <div className='bg-accent/70 border p-10 rounded-lg flex flex-col gap-2 md:w-64 text-center items-center'>
              <FaGithub size={32} className="mb-3" />
              <p className='text-xl'>GitHub</p>
              <p className='text-muted-foreground text-sm'>Visit my github account</p>
              <p className='text-muted-foreground text-sm hover:text-primary'>
                <Link href="https://github.com/TharinduX" rel="noopener noreferrer" target="_blank">TharinduX</Link>
              </p>
            </div>
            <div className='bg-accent/70 border p-10 rounded-lg flex flex-col gap-2 md:w-64 text-center items-center'>
              <FaXTwitter size={32} className="mb-3" />
              <p className='text-xl'>X</p>
              <p className='text-muted-foreground text-sm'>Follow me on X</p>
              <p className='text-muted-foreground text-sm hover:text-primary'>
                <Link href="https://x.com/tharindume" rel="noopener noreferrer" target="_blank" >tharindume</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page