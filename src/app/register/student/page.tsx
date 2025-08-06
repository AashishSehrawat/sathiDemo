'use client'

import { studentRegisterSchema } from '@/schema/registerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form'
import {z} from 'zod';

export default function StudentRegisterForm() {
  const form = useForm<z.infer<typeof studentRegisterSchema>>({
    resolver: zodResolver(studentRegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "student",
      school: "",
      standard: "",
      dob: undefined,
    }
  })

  async function onSubmit(values: z.infer<typeof studentRegisterSchema>) {
    console.log("student register form ")
    console.log(values);
  }

  return (
    <div>
      
    </div>
  )
}
