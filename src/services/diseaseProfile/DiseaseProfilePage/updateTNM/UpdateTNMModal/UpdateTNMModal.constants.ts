import * as Yup from "yup";

export const tOptionsList = [
  "x",
  "0",
  "is (DCIS)",
  "is (Paget)",
  "1mic",
  "1а",
  "1b",
  "1с",
  "2",
  "3",
  "4",
  "4a",
  "4b",
  "4c",
  "4d",
];

export const nOptionsList = ["2", "2a", "2b", "3", "3a", "3b", "3c", "1mic"];

export const mOptionsList = ["0", "1"];

export const validationSchema = Yup.object().shape({
  type: Yup.string().required("Это поле обязательное"),
});
