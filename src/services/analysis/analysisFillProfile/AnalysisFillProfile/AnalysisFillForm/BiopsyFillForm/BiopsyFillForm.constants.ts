import * as Yup from "yup";
import { ObjectSchema } from "yup";

const afterOperationSchema = (schema: ObjectSchema<object>) =>
  schema.shape({
    histotype: Yup.string().required("Это поле обязательное"),
    resectionDistance: Yup.number()
      .min(0, "< 0")
      .required("Это поле обязательное"),
    tumorSize: Yup.object().shape({
      sizeX: Yup.number().positive("> 0см").required("Это поле обязательное"),
      sizeY: Yup.number().positive("> 0см").required("Это поле обязательное"),
      sizeZ: Yup.number().positive("> 0см").required("Это поле обязательное"),
    }),
    tumorDifferentiation: Yup.string().required("Это поле обязательное"),
    metastasisNumber: Yup.string().required("Это поле обязательное"),
    T: Yup.string().required("Это поле обязательное"),
    N: Yup.string().required("Это поле обязательное"),
    patomorphologicalAnswer: Yup.number()
      .min(0, "< 0")
      .required("Это поле обязательное"),
  });

export const validationSchema = Yup.object().shape({
  isPostOperational: Yup.boolean().required("Это поле обязательное"),
  gystologyPayload: Yup.object().when(
    ["isPostOperational"],
    ([isPostOperational], schema) => {
      return isPostOperational
        ? afterOperationSchema(schema)
        : schema.shape({
            histotype: Yup.string().required("Это поле обязательное"),
          });
    }
  ),
  ighPayload: Yup.object().shape({
    researchNumber: Yup.string().required("Это поле обязательное"),
    ER: Yup.number()
      .min(0, "< 0%")
      .max(100, "> 100%")
      .required("Это поле обязательное"),
    PR: Yup.number()
      .min(0, "< 0%")
      .max(100, "> 100%")
      .required("Это поле обязательное"),
    HERneu: Yup.number()
      .min(0, "< 0%")
      .max(100, "> 100%")
      .required("Это поле обязательное"),
    ISH: Yup.string().required("Это поле обязательное"),
    Ki67: Yup.number()
      .min(0, "< 0%")
      .max(100, "> 100%")
      .required("Это поле обязательное"),
    Immunohistotype: Yup.string().required("Это поле обязательное"),
  }),
});
