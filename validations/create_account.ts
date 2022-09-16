import * as yup from "yup"

export const contactFormSchema = yup.object({
  mail: yup.string().email().required(),

})
