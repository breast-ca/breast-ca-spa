import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  coursesAmount: Yup.number().required("Это поле обязательное"),
  radiationFullAmount: Yup.number().required("Это поле обязательное"),
  radiationOnceAmount: Yup.number().required("Это поле обязательное"),
  radiationTherapyType: Yup.string().required("Это поле обязательное"),
});
