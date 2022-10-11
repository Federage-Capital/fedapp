import * as yup from "yup"

export const contactFormSchema2 = yup.object({
  mail: yup.string().email().required(),

})
