import { FC } from "react";
import { Wrapper } from "./EditChemotherapyForm.styled";
import { Props } from "./EditChemotherapyForm.types";
// import { useFormik } from "formik";

export const EditChemotherapyForm: FC<Props> = () => {
  //   const { values } = useFormik({
  //     initialValues: {
  //       toxicityType: chemotherapy.toxicityType,
  //       hematologicalToxicity: chemotherapy.hematologicalToxicity,
  //       bodyTemperature: chemotherapy.bodyTemperature,
  //       gastroToxicity: chemotherapy.gastroToxicity,
  //       elseToxicity: chemotherapy.elseToxicity,
  //       otherToxicity: chemotherapy.otherToxicity,
  //       therapyDynamic: therapy.therapyDynamic,
  //     },
  //     onSubmit: () => {},
  //   });

  return <Wrapper></Wrapper>;
};
