import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  therapyType: Yup.string().required("Это поле обязательное"),
});
