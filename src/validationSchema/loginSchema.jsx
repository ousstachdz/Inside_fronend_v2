import * as yup from 'yup'
import { passwordRules } from './regexRules'

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('The email is not valide.')
    .required('this field is required.'),
  password: yup.string().required('this field is required.'),
})

// .min(8)
// .matches(passwordRules, { message: 'the field is not valide' })
// .required(),
