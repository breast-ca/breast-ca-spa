import { FC, useMemo } from "react";
import { Wrapper } from "./TherapyInfoCard.styled";
import { Props } from "./TherapyInfoCard.types";
import { TherapyType } from "@/api/shared";
import { ChemotherapyView } from "./ChemotherapyView";

export const TherapyInfoCard: FC<Props> = ({ therapy, therapyTranslates }) => {
  const therapyView = useMemo(() => {
    const therapyViews = {
      [TherapyType.Chemotherapy]: therapy.Chemotherapy ? (
        <ChemotherapyView
          chemoTherapy={therapy.Chemotherapy}
          therapyTranslates={therapyTranslates}
        />
      ) : null,
      [TherapyType.Operation]: null,
      [TherapyType.RadiationTherapy]: null,
      [TherapyType.Symptomatic]: null,
    };

    return therapyViews[therapy.therapyType];
  }, [therapy.Chemotherapy, therapy.therapyType, therapyTranslates]);

  return <Wrapper>{therapyView}</Wrapper>;
};
