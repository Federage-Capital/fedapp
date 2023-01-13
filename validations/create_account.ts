import * as yup from "yup"

export const createFormSchema = yup.object({
  mail: yup.string().email().required(),
typesdestructure: yup.string(),
siren: yup.string(),
name: yup.string(),
})
