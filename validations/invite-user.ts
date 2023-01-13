import * as yup from "yup"

export const inviteuserFormSchema = yup.object({
  mail: yup.string().email().required(),

})
