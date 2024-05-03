import { FC, useMemo } from "react";
import { Wrapper } from "./TherapyInfoCard.styled";
import { Props } from "./TherapyInfoCard.types";
import { TherapyType } from "@/api/shared";
import { ChemotherapyView } from "./ChemotherapyView";
import { OperationView } from "./OperationView";

export const TherapyInfoCard: FC<Props> = ({ therapy, therapyTranslates }) => {
  const therapyView = useMemo(() => {
    const therapyViews = {
      [TherapyType.Chemotherapy]: therapy.Chemotherapy ? (
        <ChemotherapyView
          chemoTherapy={therapy.Chemotherapy}
          therapyTranslates={therapyTranslates}
        />
      ) : null,
      [TherapyType.Operation]: therapy.Operation ? (
        <OperationView
          operation={therapy.Operation}
          therapyTranslates={therapyTranslates}
        />
      ) : null,
      [TherapyType.RadiationTherapy]: null,
      [TherapyType.Symptomatic]: null,
    };

    return therapyViews[therapy.therapyType];
  }, [
    therapy.Chemotherapy,
    therapy.Operation,
    therapy.therapyType,
    therapyTranslates,
  ]);

  return <Wrapper>{therapyView}</Wrapper>;
};
