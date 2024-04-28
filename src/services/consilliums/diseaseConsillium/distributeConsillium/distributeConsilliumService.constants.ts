import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  userOnConsillium: Yup.array()
    .of(Yup.number().required("Это поле обязательное"))
    .min(1, "Выберите участников"),
  leadId: Yup.number().required("Это поле обязательное"),
});
