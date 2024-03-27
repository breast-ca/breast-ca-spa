import * as yup from "yup";

export const validationSchema = yup.object().shape({
  firstName: yup.string().required("Это поле обязательное"),
  lastName: yup.string().required("Это поле обязательное"),
  login: yup.string().required("Это поле обязательное"),
  confirmPassword: yup
    .string()
    .length(8, "менее 8 символов")
    .test("passwords-match", "Пароли должны совпадать", function (value) {
      if (!this.parent.passwordText) return true;

      return this.parent.passwordText === value;
    }),
});
