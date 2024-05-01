import { FC, useEffect } from "react";
import { Props } from "./CommonFillForm.types";
import { analysisFillProfileService } from "../../../analysisFillProfileService.model";

const { inputs } = analysisFillProfileService;

export const CommonFillForm: FC<Props> = ({ pushFillAnalysisPayload }) => {
  useEffect(
    () =>
      inputs.handleSaveAnalysisButtonClicked.watch(() =>
        pushFillAnalysisPayload({})
      ).unsubscribe,
    [pushFillAnalysisPayload]
  );

  return <></>;
};
