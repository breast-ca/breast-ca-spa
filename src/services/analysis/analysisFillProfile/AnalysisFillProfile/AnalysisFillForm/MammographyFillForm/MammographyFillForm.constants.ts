import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  tumorSize: Yup.object().shape({
    sizeX: Yup.number()
      .positive("Размер должно быть > 0")
      .required("Это поле обязательное"),
    sizeY: Yup.number()
      .positive("Размер должно быть > 0")
      .required("Это поле обязательное"),
    sizeZ: Yup.number()
      .positive("Размер должно быть > 0")
      .required("Это поле обязательное"),
  }),
  metastasisNumber: Yup.number()
    .max(20, "Не более 20")
    .min(0, "Кол-во должно быть > 0")
    .required("Это поле обязательное"),
  birNumber: Yup.number().required("Это поле обязательное"),
  description: Yup.string().required("Это поле обязательное"),
  side: Yup.string().required("Это поле обязательное"),
});
