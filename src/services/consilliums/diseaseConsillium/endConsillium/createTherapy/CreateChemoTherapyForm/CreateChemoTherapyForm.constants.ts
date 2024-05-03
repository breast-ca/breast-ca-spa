import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  chemoType: Yup.string().required("Это поле обязательное"),
  line: Yup.string().required("Это поле обязательное"),
});
