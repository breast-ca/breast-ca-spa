import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  operationType: Yup.string().required("Это поле обязательное"),
  surgeryImpact: Yup.string().required("Это поле обязательное"),
});
