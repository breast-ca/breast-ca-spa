import * as yup from "yup";

export const validationSchema = yup.object().shape({
  ICD: yup.string().required("Это поле обязательное"),
  number: yup
    .number()
    .min(1, "Должно быть больше 1")
    .required("Это поле обязательное"),
  description: yup.string().required("Это поле обязательное"),
  tumorState: yup.string().required("Это поле обязательное"),
  side: yup.string().required("Это поле обязательное"),
});
