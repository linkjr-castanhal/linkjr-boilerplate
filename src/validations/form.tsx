// Example of a form validation schema using Zod
import { z } from 'zod'
import { UseFormReturn } from 'react-hook-form'

export const formSchema = z.object({
  name: z
    .string()
    .min(1, 'O nome é obrigatório')
    .max(50, 'O nome deve ter no máximo 50 caracteres'),
})

export type FormData = z.infer<typeof formSchema>

export type FormFieldProps = {
  form: UseFormReturn<FormData>
  disabled?: boolean
}
