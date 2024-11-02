import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import {Control, FieldPath, useFormContext} from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema1 } from '@/lib/utils'

const formSchema = authFormSchema1('sign-up')

interface CustomInput {
    control: Control<z.infer<typeof formSchema>> ,
    name: FieldPath<z.infer<typeof formSchema>>,
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
                            type={name ==="password"? "password":"text"}
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