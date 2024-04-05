import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().required("Обязательное поле"),
  surname: yup.string().required("Обязательное поле"),
  individualInsurance: yup.string().required("Обязательное поле"),
  medicalInsurance: yup.string().required("Обязательное поле"),
  passportSeries: yup.string().length(4).required("Обязательное поле"),
  passportNumber: yup.string().length(6).required("Обязательное поле"),
  insuranceOrganization: yup.string().required("Обязательное поле"),
  phoneNumber: yup.string().required("Обязательное поле"),
  birthDate: yup.date().test("", Boolean).required("Обязательное поле"),
});
