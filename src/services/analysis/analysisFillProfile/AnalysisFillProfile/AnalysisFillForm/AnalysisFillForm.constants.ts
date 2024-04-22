import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  description: Yup.string().required("Это поле обязательное"),
});
