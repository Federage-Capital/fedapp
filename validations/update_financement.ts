import * as yup from "yup"

export const createFormSchema = yup.object({
title: yup.string(),
body: yup.string(),
revision_log: yup.string(),


})
