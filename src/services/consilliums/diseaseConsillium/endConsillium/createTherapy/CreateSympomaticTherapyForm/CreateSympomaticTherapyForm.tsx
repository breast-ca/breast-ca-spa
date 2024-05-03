import { FC, useEffect } from "react";
import { Props } from "./CreateSympomaticTherapyForm.types";
import { createTherapyService } from "../createTherapyService.model";

const { inputs } = createTherapyService;

export const CreateSympomaticTherapyForm: FC<Props> = ({ handlePushState }) => {
  useEffect(
    () =>
      inputs.handleSaveTherapy.watch(() =>
        handlePushState({ sympomaticTherapy: {} })
      ).unsubscribe,
    [handlePushState]
  );

  return <></>;
};
