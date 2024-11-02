import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import {Control, useFormContext} from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema1 } from '@/lib/utils'


interface CustomInput {
    control: Control<z.infer<typeof authFormSchema1>> ,
    name: "email" | "password",
    label: string,
    placeholder: string
}

function CustomInput({control,name,label,placeholder }:CustomInput) {
  const { formState } = useFormContext();
  return (
    <FormField
                 control={control} 
                 name={name}
                 render={({ field }) => (
                  <div className='form-item'>
                    <FormLabel className='form-label'>{label}</FormLabel>
                    <div className="flex w-full flex-col">
                        <FormControl>
                            <Input placeholder={placeholder} className='input-class'
                            {...field}>
                            </Input>
                        </FormControl>
                        <FormMessage className='form-message mt-2'>{formState.errors[name]?.message}</FormMessage>
                    </div>
                  </div>
                )}
              />
  )
}

export default CustomInput