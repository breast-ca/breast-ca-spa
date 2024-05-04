import { FC, useEffect } from "react";
import { Wrapper } from "./EditRadiationForm.styled";
import { Props } from "./EditRadiationForm.types";
import { editTherapyService } from "../../editTherapyService.model";
import { useFormik } from "formik";

const {
  inputs: { handleSaveTherapy },
} = editTherapyService;

export const EditRadiationForm: FC<Props> = ({ radiation, therapy }) => {
  const { handleSubmit } = useFormik({
    initialValues: {
      radiationTherapyType: radiation.radiationTherapyType,
      complicationType: radiation.complicationType,
      radiatonComplicationTypes: radiation.radiatonComplicationTypes,
      therapyDynamic: therapy.therapyDynamic,
    },
    onSubmit: () => {},
  });

  useEffect(() => {
    return handleSaveTherapy.watch(() => handleSubmit()).unsubscribe;
  }, [handleSubmit]);

  return <Wrapper></Wrapper>;
};
