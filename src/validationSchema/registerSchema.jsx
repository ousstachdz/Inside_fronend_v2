import * as yup from 'yup'
import { passwordRules } from './regexRules'

export const registerSchema = yup.object().shape({
  first_name: yup.string().min(4).required('this field is required'),
  last_name: yup.string().min(4).required('this field is required'),
  email: yup
    .string()
    .email('The email is not valide')
    .required('this field is required'),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: 'thefield is not valide' })
    .required(),
  password1: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: 'thefield is not valide' })
    .required(),
})
