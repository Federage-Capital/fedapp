import * as yup from "yup"

export const contactFormSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  subject: yup.string().required(),
  text_zone: yup.string().required(),
})
